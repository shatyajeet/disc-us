/**
 * Created by shatyajeet on 08/06/16.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import LayoutContainer from '../containers/LayoutContainer';
import TopicListContainer from '../containers/TopicListContainer';
import TopicContainer from '../containers/TopicContainer';

const routes = (
  <Route path="/" component={LayoutContainer}>
    <IndexRoute component={TopicListContainer} />
    <Route path="/topics/:topicId" component={TopicContainer} />
  </Route>
);

export default routes;
