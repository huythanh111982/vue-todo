<template>
  <div id="app" class="mt-5">
    <div class="container">
      <div class="card">
        <div class="card-header d-flex align-items-center">
          <div class="card-title">Todo list</div>
          <button
            class="ml-auto btn btn-sm btn-primary"
            data-toggle="modal"
            data-target="#myTodo"
          >
            Create
          </button>
        </div>
        <div class="card-body p-0">
          <todo-list :todos ="todos"/>
        </div>
      </div>
    </div>
    <todo-create @formSubmit="handleCreateTodo"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";
import store from "@/store";
export default {
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      todos: store.state.todos,
    }
  },
  methods: {
    handleCreateTodo(newCreate) {
      // store.createTodo(newCreate);
      store.dispatch('createTodo', newCreate)
    }
  },
};
</script>

<style>
</style>
