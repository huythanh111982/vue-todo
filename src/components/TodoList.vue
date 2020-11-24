<template>
  <div class="table-responsive">
    <table class="table table-striped mb-0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th class="w-60">Action</th>
        </tr>
      </thead>
      <tbody>
        <todo-item
          v-for="todo in todos"
          :key="todo._id"
          :title="todo.title"
          :description="todo['description']"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style lang="scss" scoped>
</style>
