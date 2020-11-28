<template>
  <tr>
    <td>
      <span v-if="!editMode">{{ title }}</span>
      <input v-else class="form-control" type="text" :value="title" />
    </td>
    <td>
      <span v-if="!editMode">{{ description }}</span>
      <textarea
        v-else
        class="form-control"
        type="text"
        rows="1"
        :value="description"
      />
    </td>
    <td>
        <span
          class="mdi mdi-account-edit mdi-24px text-warning cursor"
          data-tooltip="tooltip"
          title="Edit"
          data-placement="left"
          @click="editTodo"
        ></span>
        <span
          class="mdi mdi-delete mdi-24px text-danger cursor"
          data-tooltip="tooltip"
          title="Delete"
          data-placement="left"
          @click="delTodo"
        ></span>
    </td>
  </tr>
</template>

<script>
import $ from "jquery";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editMode: false,
    };
  },
  mounted() {
    $('[data-tooltip="tooltip"]').tooltip({
      trigger: "hover",
    });
  },
  methods: {
    editTodo() {
      this.editMode = !this.editMode;
    },
    delTodo() {
      alert("Del todo");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
