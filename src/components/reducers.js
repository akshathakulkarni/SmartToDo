import { CREATE_TODO, REMOVE_TODO } from "./actions";

/*reducers take in current state of the application along with the
action type that was triggered and decide what changes should occur 
in the state based on the action. It then returns the updated
state and redux will set the current state to that*/

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_TODO": {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case "REMOVE_TODO": {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
