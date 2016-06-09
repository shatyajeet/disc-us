/**
 * Created by shatyajeet on 08/06/16.
 */

import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

import RaisedButton from 'material-ui/RaisedButton';

const Topic = (props) => (
  <div>
    <h3>{props.topic.content}</h3>
    <CommentForm handleSubmit={props.handleSubmit} />
    <h5>Comments</h5>
    <CommentList {...props} />
    {props.loadMore ? <RaisedButton label="Load More" primary={true} disabled={props.fetchingComments} onClick={props.handleLoadMore} /> : ''}
  </div>
);

export default Topic;
