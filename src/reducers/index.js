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

        case types.EDIT_TODO_SUCCESS:
            const updatedTodos = state.todos.map(
                item => action.todo._id === item._id ? action.todo : item);
            return {
                ...state,
                todos: updatedTodos,
            };

        case types.DELETE_TODO_SUCCESS:
            return {
                todos: state.todos.filter(todo => todo._id !== action.todo._id)
            };

        default:
            return state;
    }
};

export default reducer;
