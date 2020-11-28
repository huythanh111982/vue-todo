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
      <!-- <form @submit.prevent="handleCreate"> -->
        <!-- Modal body -->
        <div class="modal-body">
          <div class="form-group">
            <label for="txtName">Name</label>
            <input
              id="txtName"
              name="title"
              type="text"
              class="form-control"
              v-model="formData.title"
              v-validate.continues="'required'"
              :class="{ 'is-invalid': submitted && errors.has('title') }"
            />
            <span v-if="submitted && errors.has('title')" class="invalid-feedback">{{ errors.first("title") }}</span>
          </div>
          <div class="form-group">
            <label for="txtDesc">Description</label>
            <textarea
              v-model="formData.description"
              id="txtDesc"
              name="description"
              class="form-control"
              rows="5"
              v-validate="'required'"
              :class="{'is-invalid':submitted && errors.has('description')}"
            ></textarea>
            <span v-if="submitted && errors.has('description')" class="invalid-feedback">{{ errors.first("description") }}</span>
          </div>
          
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button class="btn btn-sm btn-danger" @click="handleCreate">Create</button>
          <button class="btn btn-sm btn-outline-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      <!-- </form> -->
    </div>
  </todo-modal>
</template>

<script>
import $ from "jquery";
import TodoModal from "@/components/TodoModal";
export default {
  components: {
    TodoModal,
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
      },
      submitted:false,
      forceClose:false
    };
  },
  methods: {
    handleCreate() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$emit("formSubmit", {
            ...this.formData
          });
          this.handleReset();
          this.submitted = false;
          $('#myTodo').modal('hide');
        }
        
      });
     
    },
    handleReset() {
      this.formData.title = "";
      this.formData.description = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
