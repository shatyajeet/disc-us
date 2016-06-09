/**
 * Created by shatyajeet on 08/06/16.
 */

import React from 'react';
import {Link} from 'react-router';

import {Card, CardText, CardActions} from 'material-ui/Card';
import CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';

const TopicList = (props) => (
  <div>
    <h3>List of Topics</h3>
    <div className="row">
      {props.topics.map((topic, index) => {
        return (
          <div className="col l3" key={index}>
            <Link to={`/topics/${topic._id}`}>
              <Card>
                <CardText>{topic.content}</CardText>
                <CardActions style={{padding: 16}}>
                  <div><CommunicationChatBubbleOutline /> <span style={{verticalAlign: 'top'}}>{topic.comments.length}</span></div>
                </CardActions>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default TopicList;
