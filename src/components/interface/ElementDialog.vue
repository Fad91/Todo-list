<template>
  <div class="dialog" v-if="$store.getters.DIALOG_VISIBLE">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'el-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  },
  mounted() {

  }
}
</script>
<style>
  
</style>