import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from "./actions";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import TodosContainer from "./containers/TodosContainer";

const stylesApp = {
    marginTop: 40
};

export const App = ({ submitTodo, todos, deleteTodo }) => (
    <div className="container" style={stylesApp}>
        <div className="row">
            <div className="col-md-5">
                <AddTodo submitTodo={submitTodo} />
            </div>
            <div className="col-md-7">
                {/*<TodoList todos={todos} deleteTodo={deleteTodo} />*/}
                <TodosContainer />
            </div>
        </div>
    </div>
);

// App.propTypes = {
//     submitTodo: PropTypes.func.isRequired,
//     todos: PropTypes.arrayOf(PropTypes.shape(
//         {
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//         },
//     )).isRequired,
//     deleteTodo: PropTypes.func.isRequired,
// };

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    submitTodo: (text) => {
        if (text) {
            dispatch(actions.submitTodo(text));
        }
    },
    deleteTodo: (id) => {
        dispatch(actions.deleteTodo(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
