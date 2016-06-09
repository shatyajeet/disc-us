/**
 * Created by shatyajeet on 07/06/16.
 */

var Topic = require('../models/topic');
var Comment = require('../models/comment');
var APIrouter = require('express').Router();
var async = require('async');

APIrouter.route('/topics')
  .post(function (req, res) {
    var topic = new Topic();

    topic.content = req.body.content;
    topic.save(function (err, doc) {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(doc);
    });
  })
  .get(function (req, res) {
    Topic.find(function (err, docs) {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(docs);
    });
  });

APIrouter.route('/topics/:topic_id')
  .get(function (req, res) {
    var limit = 10;
    Topic.findById(req.params.topic_id)
      .populate({
        path: 'comments',
        options: {
          limit: limit
        }
      })
      .exec(function (err, topic) {
        if (err) {
          return res.status(400).json(err);
        }
        Topic.findById(req.params.topic_id, function (err, countTopic) {
          if (err) {
            return res.status(400).json(err);
          }
          return res.status(200).json({
            topic: topic,
            loadMore: countTopic.comments.length > limit
          });
        });
      });
  });

APIrouter.route('/topics/:topic_id/comments')
  .post(function (req, res) {
    var comment = new Comment();

    comment.comment = req.body.comment;
    comment.email = req.body.email;
    comment.votes = {
      upVote: 0,
      downVote: 0
    };

    comment.save(function (err, comment) {
      if (err) {
        return res.status(400).json(err);
      }
      Topic.findById(req.params.topic_id, function (err, topic) {
        if (err) {
          return res.status(400).json(err);
        }

        topic.comments.push(comment._id);
        topic.save(function (err, topic) {
          if (err) {
            return res.status(400).json(err);
          }
          return res.status(200).json(comment);
        });
      });
    });
  })
  .get(function (req, res) {
    var limit = 10, pageNumber = parseInt(req.query.pageNumber);
    var commentsQuery = function (callback) {
      Topic.findById(req.params.topic_id)
        .populate({
          path: 'comments',
          options: {
            skip: pageNumber * limit,
            limit: limit
          }
        })
        .exec(function (err, result) {
          if (err) {
            return res.status(400).json(err);
          }
          callback(null, result.comments);
        });
    };

    var commentsCount = function (callback) {
      Topic.findById(req.params.topic_id, function (err, topic) {
        if (err) {
          return res.status(400).json(err);
        }
        callback(null, topic.comments.length > ((pageNumber * limit) + limit));
      });
    };

    async.parallel([commentsCount, commentsQuery], function (err, result) {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json({
        comments: result[1],
        loadMore: result[0]
      });
    });
  });

APIrouter.route('/topics/:topic_id/comments/:comment_id')
  .get(function (req, res) {
    Comment.findById(req.params.comment_id, function (err, comment) {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(comment);
    });
  })
  .put(function (req, res) {
    var voteType = req.body.type;
    Comment.findById(req.params.comment_id, function (err, comment) {
      if (err) {
        return res.status(400).json(err);
      }

      var updateObject = {}, votes = comment.votes[voteType];

      if (voteType === 'upVote') {
        updateObject = {'votes.upVote': votes + 1};
      } else if (voteType === 'downVote') {
        updateObject = {'votes.downVote': votes - 1};
      } else {}

      Comment.update({_id: comment._id}, updateObject, function (err, savedComment) {
        if (err) {
          return res.status(400).json(err);
        }
        return res.status(200).json(savedComment);
      });
    })
  });

module.exports = APIrouter;
