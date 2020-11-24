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
    <todo-create/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate"
export default {
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      todos: [
        {
          _id: '1',
          title: 'Walk the dog',
          description: 'Go to forrest near the Zoo'
        },
        {
          _id: '2',
          title: 'Buy a bread',
          description: 'Whole grain bread would be good'
        },
        {
          _id: '3',
          title: 'Learn Programming',
          description: 'Preferable Tomorrow!'
        }
      ]
    }
  },
};
</script>

<style>
</style>
