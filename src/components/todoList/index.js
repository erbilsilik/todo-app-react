import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo }) => {
    const todoItems = todos.map(todo => (
        <li key={todo._id}>
            <span className="todo-text">{todo.title}</span>
            {/*<button*/}
            {/*    type="button"*/}
            {/*    className="btn btn-danger todo-delete"*/}
            {/*    onClick={() => deleteTodo(todo.id)}*/}
            {/*>*/}
            {/*    Delete*/}
            {/*</button>*/}
        </li>
    ));

    return (
        <ul>
            {todoItems}
        </ul>
    );
};

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape(
//         {
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//         },
//     )).isRequired,
//     deleteTodo: PropTypes.func.isRequired,
// };

export default TodoList;
