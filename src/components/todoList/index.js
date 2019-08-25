import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    borderBottom: '2px solid #eee',
    background: '#fafafa',
    margin: '2rem auto',
    padding: '.6rem 1rem',
    maxWidth: '500px',
    borderRadius: '7px'
};

const TodoList = ({todos, deleteTodo, changeStatus, statuses}) => {
    const todoItems = todos.map(todo => (
        <div style={styles} key={todo._id}>
            <div className="row mb-3">
                <div className="col-md-8">
                    <h2 className="todo-text">{todo.summary}</h2>
                </div>
                <div className="col-md-4">
                    <select onChange={e => changeStatus(e.target.value, todo)} value={todo.status} style={{
                        backgroundColor: todo.status == "Incomplete" ? "#0052CC" : "#00875A",
                        color: '#fff',
                    }}>
                        {
                            Object.keys(statuses).map((key, index) =>
                                <option key={index} value={key}>
                                    {statuses[key]}
                                </option>
                            )
                        }
                        )}
                    </select>
                </div>
            </div>
            <p>{todo.description}</p>
            <button className="btn btn-danger" type="button" onClick={() => deleteTodo(todo._id)}>
                Remove
            </button>
        </div>
    ));

    if (!todoItems.length) {
        return (
            <div>
                No To-Do Found
            </div>
        )
    }

    return (
        <div>
            {todoItems}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            _id: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        },
    )).isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
