import types from "../constants/constants";
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api';

const actions = {
    fetchTodos: () => {
        return dispatch => {
            dispatch({
                type: types.FETCH_TODOS_REQUEST
            });
            axios
                .get(`${apiUrl}/todos`)
                .then(res => {
                    dispatch({
                        type: types.FETCH_TODOS_SUCCESS,
                        todos: res.data,
                    })
                })
                .catch(err => {
                    dispatch({
                        type: types.FETCH_TODOS_FAILURE,
                        todos: err,
                    });
                });
        };
    },
    submitTodo(todo) {
        return dispatch => {
            dispatch({
                type: types.SUBMIT_TODO,
            });
            axios
                .post(`${apiUrl}/todos`, todo)
                .then(res => {
                    dispatch({
                        type: types.SUBMIT_TODO_SUCCESS,
                        todo: res.data
                    });
                })
                .catch(err => {
                    dispatch({
                        type: types.SUBMIT_TODO_FAILURE,
                        todo: err
                    });
                });
        };
    },
    editTodo(todo) {
        return dispatch => {
            dispatch({
                type: types.EDIT_TODO,
            });
            axios
                .put(`${apiUrl}/todos/${todo._id}`, todo)
                .then(res => {
                    dispatch({
                        type: types.EDIT_TODO_SUCCESS,
                        todo: res.data
                    });
                })
                .catch(err => {
                    dispatch({
                        type: types.EDIT_TODO_FAILURE,
                        todo: err
                    });
                });
        };
    },
    deleteTodo(id) {
        return dispatch => {
            dispatch({
                type: types.DELETE_TODO,
            });
            axios
                .delete(`${apiUrl}/todos/${id}`)
                .then(res => {
                    dispatch({
                        type: types.DELETE_TODO_SUCCESS,
                        todo: res.data
                    });
                })
                .catch(err => {
                    dispatch({
                        type: types.DELETE_TODO_FAILURE,
                        todo: err
                    });
                });
        };
    },
};

export default actions
