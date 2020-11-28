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
  handleCreateTodo(newCreate) {
    newCreate._id = cuid();
    this.state.todos.unshift(newCreate);
  },
};
export default store;
