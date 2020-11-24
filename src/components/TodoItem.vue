<template>
  <tr>
    <td>{{title}}</td>
    <td>{{description}}</td>
    <td>
      <span
        class="mdi mdi-account-edit mdi-24px text-warning cursor"
        data-tooltip="tooltip"
        title="Edit"
        data-placement="left"
      ></span>
      <span
        class="mdi mdi-delete mdi-24px text-danger cursor"
        data-tooltip="tooltip"
        title="Edit"
        data-placement="left"
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
      required:true 
    },
    description:{
      type:String,
      required:true
    }
  },
  mounted() {
    $('[data-tooltip="tooltip"]').tooltip({
      trigger: "hover",
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
