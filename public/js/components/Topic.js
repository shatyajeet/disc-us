/**
 * Created by shatyajeet on 08/06/16.
 */

import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Topic = (props) => (
  <div>
    <h3>{props.topic.content}</h3>
    <h4>Comments</h4>
    <CommentList {...props} />
    <CommentForm handleSubmit={props.handleSubmit} />
  </div>
);

export default Topic;
