import * as api from '../api'
import { CREATE, UPDATE, FETCH_ALL, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST } from '../constants/actionTypes'

// Action Creators

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPost(id)

    dispatch({ type: FETCH_POST, payload: data })
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPosts(page)

    dispatch({ type: FETCH_ALL, payload: data })
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery)

    dispatch({ type: FETCH_BY_SEARCH, payload: data })
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE, payload: data })
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.updatePost(id, post)
    dispatch({ type: UPDATE, payload: data })
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    await api.deletePost(id)
    dispatch({ type: DELETE, payload: id})
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.likePost(id)
    dispatch({ type: UPDATE, payload: data})
    dispatch({ type: END_LOADING})
  } catch (error) {
    console.log(error)
  }
}