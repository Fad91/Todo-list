<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
      name: 'el-button',
  }
</script>

<style scoped>
.input {
  border: 1px solid rgb(34, 136, 252);;
  padding: 5px 15px;
}

</style>