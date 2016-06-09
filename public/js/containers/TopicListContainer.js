/**
 * Created by shatyajeet on 08/06/16.
 */

import React from 'react';

import APIUtils from '../utils/APIUtils';
import TopicList from '../components/TopicList';

class TopicListContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      topics: []
    };
  }
  componentWillMount () {
    APIUtils.fetchTopics()
      .then((res) => {
        this.setState({
          topics: res.data
        });
      });
  }
  render () {
    return (
      <TopicList topics={this.state.topics} />
    );
  }
}

export default TopicListContainer;
