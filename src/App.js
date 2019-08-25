import React from 'react';
import { connect } from 'react-redux';
import actions from "./actions";
import AddTodo from "./components/addTodo";
import TodosContainer from "./containers/TodosContainer";

const stylesApp = {
    marginTop: 40
};

export const App = ({ submitTodo, deleteTodo }) => (
    <div className="container" style={stylesApp}>
        <div className="row">
            <div className="col-md-5">
                <AddTodo submitTodo={submitTodo} deleteTodo={deleteTodo}/>
            </div>
            <div className="col-md-7">
                <TodosContainer />
            </div>
        </div>
    </div>
);

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    submitTodo: (summary, description) => {
        dispatch(actions.submitTodo({
            summary: summary,
            description: description
        }));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
