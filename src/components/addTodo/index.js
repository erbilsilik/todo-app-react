import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
    let summary;
    let description;

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    submitTodo(summary.value, description.value);
                    summary.value = '';
                    description.value = '';
                }}
            >
                <div className="form-group">
                    <input type="text"
                           placeholder="Summary"
                           className="form-control todo-input"
                           name="summary"
                           ref={(element) => {
                               summary = element;
                           }}
                    />
                </div>

                <div className="form-group">
                    <textarea
                        cols="19"
                        rows="8"
                        placeholder="Description"
                        className="form-control"
                        name="text"
                        ref={(element) => {
                            description = element;
                        }}
                    >
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
