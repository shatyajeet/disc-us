/**
 * Created by shatyajeet on 08/06/16.
 */

import Axios from 'axios';

const axiosCustom = Axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

const fetchTopics = () => {
  let url = '/topics', method = 'GET';
  return axiosCustom.request({
    url,
    method
  });
};

const fetchTopic = (topicId) => {
  let url = '/topics/' + topicId, method = 'GET';
  return axiosCustom.request({
    url,
    method
  });
};

const voteComment = (topicId, commentId, voteType) => {
  let url = '/topics/' + topicId + '/comments/' + commentId, method = 'PUT', data = {type: voteType};
  return axiosCustom.request({
    url,
    method,
    data
  });
};

const submitComment = (topicId, commentObj) => {
  let url = '/topics/' + topicId + '/comments', method = 'POST';
  return axiosCustom.request({
    url,
    method,
    data: commentObj
  });
};

const fetchComments = (topicId, pageNumber) => {
  let url = '/topics/' + topicId + '/comments', method = 'GET', params = {pageNumber};
  return axiosCustom.request({
    url,
    method,
    params
  });
};

export default {
  fetchComments,
  fetchTopic,
  fetchTopics,
  submitComment,
  voteComment
};
