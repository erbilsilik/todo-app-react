import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import TodoList from "../components/todoList";

class TodosContainer extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return <TodoList
            todos={this.props.todos}
            deleteTodo={this.props.deleteTodo}
            changeStatus={this.props.changeStatus}
            statuses={STATUSES}
        />
    }
}

const STATUSES =
    {
        Completed: 'Completed',
        Incomplete: 'Incomplete',
    }
;

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => {
        dispatch(actions.fetchTodos());
    },
    deleteTodo: id => {
        dispatch(actions.deleteTodo(id));
    },
    changeStatus: (event, todo) => {
        const changedTodo = {...todo};
        changedTodo.status = event;
        dispatch(actions.editTodo(changedTodo));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
