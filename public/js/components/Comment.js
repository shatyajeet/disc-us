/**
 * Created by shatyajeet on 09/06/16.
 */

import React from 'react';

import styles from '../styles';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';

const Comment = (props) => {
  const {comment} = props;
  return (
    <div className="row">
      <div className="col l1">
        <div>
          <IconButton onClick={(e) => props.handleVote(comment._id, 'upVote')} style={styles.voteButton} tooltip="Up Vote" tooltipPosition="top-center"><ActionThumbUp /></IconButton>
          &nbsp;<span style={{verticalAlign: 'super'}}>{comment.votes.upVote}</span>
        </div>
        <div>
          <IconButton onClick={(e) => props.handleVote(comment._id, 'downVote')} style={styles.voteButton} tooltip="Down Vote" tooltipPosition="bottom-center"><ActionThumbDown /></IconButton>
          &nbsp;<span style={{verticalAlign: 'super'}}>{comment.votes.downVote}</span>
        </div>
      </div>
      <div className="col l11">
        <div style={styles.commentBox}>
          <Subheader style={styles.subHeader}>{comment.email}</Subheader>
          {comment.comment}
        </div>
      </div>
    </div>
  );
};

export default Comment;
