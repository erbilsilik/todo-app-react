import type from '../constants'
import actions from "../../actions";


describe('Actions', () => {
   const todo = 'A todo';

   it('Should create an action to add a todo', () => {
       const expectedAction = {
           type: types.SUBMIT_TODO,
           id: 1,
           text: todoText,
       };

       expect(actions.submitTodo(todoText)).toEqual(expectedAction);
   })
});
