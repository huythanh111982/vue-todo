<template>
  <!-- The Modal -->
  <div class="modal" id="myTodo">
    <div class="modal-dialog modal-dialog-centered">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    close: {
      type: Boolean,
      default:false 
    },
  }
};
</script>
