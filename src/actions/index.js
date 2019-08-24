import types from "../constants/constants";
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api';

let todoId = 0;

const nextId = () => {
    todoId += 1;

    return todoId;
};

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
    submitTodo(text) {
        return {
            type: types.SUBMIT_TODO,
            id: nextId(),
            text,
        };
    },
    deleteTodo(id) {
        return {
            type: types.DELETE_TODO,
            id,
        };
    },
};

export default actions
