import { apiClient } from "./ApiClient";

export const retrieveAllTodosForUsernameApi = (username: string) =>
  apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (username: string, id: string) =>
  apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username: string, id: string) =>
  apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username: string, id: string, todo: string) =>
  apiClient.put(`/users/${username}/todos/${id}`, todo);

export const createTodoApi = (username: string, todo: string) =>
  apiClient.post(`/users/${username}/todos`, todo);
