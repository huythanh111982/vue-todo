<template>
  <todo-modal>
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Add Todo</h4>
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <div class="form-group">
          <label for="txtName">Name</label>
          <input
            v-model="form.title"
            id="txtName"
            type="text"
            value=""
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="txtDesc">Description</label>
          <textarea
            v-model="form.description"
            id="txtDesc"
            class="form-control"
            rows="5"
          ></textarea>
        </div>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-sm btn-danger"
          data-dismiss="modal"
          @click="handleCreate"
        >
          Create
        </button>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </todo-modal>
</template>

<script>
import TodoModal from "@/components/TodoModal";
export default {
  components: {
    TodoModal,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    handleCreate() {
      this.$emit("formSubmit", { ...this.form });
      this.handleReset();
    },
    handleReset() {
      this.form.title = "";
      this.form.description = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>