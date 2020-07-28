import api from './api';

export default class Repository {
  getPosts = async (page = 1, limit = 10) =>
    api.get(`/posts?_page=${page}&_limit=${limit}`);

  getPostById = async (id) => api.get(`/posts/${id}`);

  getCommentsById = async (id) => api.get(`/posts/${id}/comments`);

  getUserById = async (id) => api.get(`/users/${id}`);
}
