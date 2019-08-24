import types from "../constants/constants";

export const initialState = {
    todos: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TODOS_REQUEST:
            return {
                ...state,
                isFetching: false,
            };

        case types.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                todos: action.todos
            };

        case types.FETCH_TODOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case types.SUBMIT_TODO_SUCCESS:
            return {
                todos: [action.todo, ...state.todos]
            };

        case types.DELETE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => (
                        todo.id !== action.id
                    )),
                ],
            };


        default:
            return state;
    }
};

export default reducer;
