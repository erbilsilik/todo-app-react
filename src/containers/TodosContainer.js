// TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import TodoList from "../components/todoList";

class TodosContainer extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return <TodoList todos={this.props.todos} />}
}

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => {
        dispatch(actions.fetchTodos());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
