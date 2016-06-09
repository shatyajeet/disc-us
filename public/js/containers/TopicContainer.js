/**
 * Created by shatyajeet on 08/06/16.
 */

import React from 'react';

import Topic from '../components/Topic';
import APIUtils from '../utils/APIUtils';

class TopicContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      topic: {},
      loadMore: false,
      fetchingComments: false,
      pageNumber: 1
    };
  }
  componentWillMount () {
    const {topicId} = this.props.routeParams;
    APIUtils.fetchTopic(topicId).then((res) => {
      this.setState({
        topic: res.data.topic,
        loadMore: res.data.loadMore
      });
    });
  }
  onLoadMore () {
    let {pageNumber, topic} = this.state, {topicId} = this.props.routeParams;
    this.setState({
      fetchingComments: true
    });
    APIUtils.fetchComments(topicId, pageNumber)
      .then((res) => {
        const newComments = res.data.comments;
        let {comments} = topic;
        comments = comments.concat(newComments);
        topic = Object.assign({}, topic, {comments});
        this.setState({
          topic,
          loadMore: res.data.loadMore,
          pageNumber: pageNumber + 1,
          fetchingComments: false
        });
      });
  }
  onVote (commentId, voteType) {
    const {topicId} = this.props.routeParams, {topic} = this.state;
    APIUtils.voteComment(topicId, commentId, voteType)
      .then((res) => {
        if (res.data.ok && res.data.nModified) {
          let votes = {};
          for (let comment of topic.comments) {
            if (comment._id === commentId) {
              votes = comment.votes;
            }
          }
          if (voteType === 'upVote') {
            votes.upVote = votes.upVote + 1;
          } else {
            votes.downVote = votes.downVote - 1;
          }
          this.setState({
            topic
          });
        }
      });
  }
  onSubmitForm (formObj, cb) {
    const {topicId} = this.props.routeParams, {topic} = this.state;
    APIUtils.submitComment(topicId, formObj)
      .then((res) => {
        const comment = res.data;
        topic.comments.push(comment);
        this.setState({
          topic
        });
        cb();
      });
  }
  render () {
    const {topic, loadMore, fetchingComments} = this.state;
    return (
      <Topic topic={topic}
             loadMore={loadMore}
             fetchingComments={fetchingComments}
             handleVote={(commentId, voteType) => this.onVote(commentId, voteType)}
             handleSubmit={(obj, cb) => this.onSubmitForm(obj, cb)}
             handleLoadMore={() => this.onLoadMore()}
      />
    );
  }
}

export default TopicContainer;
