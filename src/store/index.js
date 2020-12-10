import cuid from "cuid";
const store = {
  state: {
    todos: [
      {
        _id: "1",
        title: "Walk the dog",
        description: "Go to forrest near the Zoo",
      },
      {
        _id: "2",
        title: "Buy a bread",
        description: "Whole grain bread would be good",
      },
      {
        _id: "3",
        title: "Learn Programming",
        description: "Preferable Tomorrow!",
      },
    ],
  },
  actions:{
    createTodo(state,newCreate) {
        newCreate._id = cuid();
        state.todos.unshift(newCreate);
      },
  }
 
};

store.dispatch = function(action, payload) {
  if (!this.actions[action]){
    throw new Error(`Action ${action} is not defined in the store`)
  }
  return this.actions[action](this.state, payload);
};
export default store;
