// TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import TodoList from "../components/todoList";

class TodosContainer extends Component {
    componentDidMount() {
        this.props.fetchTodos();
        // When container was mounted, we need to start fetching todos.
    }

    render() {
        // return <TodoList todos={this.props.todos} />
        return <h1></h1>
    }
}

// This function is used to convert redux global state to desired props.
function mapStateToProps(state) {
    // `state` variable contains whole redux state.
    return {
        // I assume, you have `todos` state variable.
        // Todos will be available in container component as `this.props.todos`
        todos: state.todos
    };
}

// This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
    return {
        // This function will be available in component as `this.props.fetchTodos`
        fetchTodos: () => {
            dispatch(actions.fetchTodos());
        }
    };
}

// We are using `connect` function to wrap our component with special component, which will provide to container all needed data.
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
