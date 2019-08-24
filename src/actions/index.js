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
        return function(dispatch) {
            dispatch({
                type: types.FETCH_TODOS_REQUEST
            });
            return fetch(`${apiUrl}/todos`)
                .then(response => response.json().then(body => ({ response, body })))
                .then(({ response, body }) => {
                    if (!response.ok) {
                        dispatch({
                            type: types.FETCH_TODOS_FAILURE,
                            error: body.error
                        });
                    } else {
                        console.log(response);
                        dispatch({
                            type: types.FETCH_TODOS_SUCCESS,
                            todos: body.todos
                        });
                    }
                });
        }
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
