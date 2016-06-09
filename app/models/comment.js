/**
 * Created by shatyajeet on 07/06/16.
 */

var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  comment: {type: 'string', trim: true, required: true},
  email: {type: 'string', trim: true, required: true},
  votes: {type: 'object', default: {
    upVote: 0,
    downVote: 0
  }},
  topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}
});

module.exports = mongoose.model('Comment', commentSchema);
