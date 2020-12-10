<template>
<tr>
    <td>
        <span v-if="!editMode">{{ title }}</span>
        <input v-else class="form-control" type="text" :value="title" />
    </td>
    <td>
        <span v-if="!editMode">{{ description }}</span>
        <textarea v-else class="form-control" type="text" rows="1" :value="description" />
        </td>
    <td>
      <div v-if="!editMode" class="d-flex">
        <button @click="editTodo" class="btn btn-sm btn-warning w-65">Edit</button>
        <button @click="delTodo" class="btn btn-sm btn-danger w-65">Delete</button>
      </div>
      <div v-else class="d-flex">
        <button @click="updateTodo" class="btn btn-sm btn-warning w-65">Update</button>
        <button @click="editMode = false" class="btn btn-sm btn-danger w-65"> Cancel</button>
      </div>
    </td>
  </tr>
</template>

<script>
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
    methods: {
        editTodo() {
            this.editMode = !this.editMode;
        },
        delTodo() {
            alert("Del todo");
        },
        updateTodo() {
            alert("Update");
        },
    },
};
</script>

<style lang="css" scoped>
.btn +.btn{
  margin-left: 5px;
}
.w-65{
  min-width: 64px;
}
</style>
