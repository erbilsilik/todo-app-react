import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    submitTodo(input.value);
                    input.value = '';
                }}
            >
                <div className="form-group">
                    <input type="text"
                           placeholder="Title"
                           className="form-control todo-input"
                           name="title"
                           ref={(element) => {
                               input = element;
                           }}
                    />
                </div>

                <div className="form-group">
                    <textarea
                        cols="19"
                        rows="8"
                        placeholder="Text"
                        className="form-control"
                        name="text">
                    </textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary todo-submit">Add Todo</button>
                </div>
            </form>
        </div>
    );
};

// AddTodo.propTypes = {
//     submitTodo: PropTypes.func.isRequired,
// };

export default AddTodo;
