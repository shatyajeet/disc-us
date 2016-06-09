/**
 * Created by shatyajeet on 09/06/16.
 */

import React from 'react';

import Comment from './Comment';

const CommentList = (props) => {
  return (
    <div>
      {props.topic.comments && props.topic.comments.map((comment, index) => <Comment key={index} comment={comment} handleVote={props.handleVote} />)}
    </div>
  );
};

export default CommentList;
