<template>
  <div class="dialog" v-if="$store.getters.DIALOG_VISIBLE">
    <div @click.stop class="dialog__content" :show="$store.getters.DIALOG_VISIBLE" v-show="!isDialogShown">
        <p>Вы точно хотите удалить эту туду?</p>
        <label>
          <input type="checkbox" name="checkbox" @change="checkedCheckbox">
          Больше не показывать это окно
        </label>
        <el-button @click="removeTodoAfterClick">Подтвердить</el-button>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'el-dialog',
  props: {
    isDialogShown: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      checkCheckbox: false
    }
  },
  methods: {
    removeTodoAfterClick() {
      this.$emit('removeTodoAfterClick')
    },
    checkedCheckbox() {
      this.checkCheckbox = !this.checkCheckbox
      this.$store.commit('SET_CHECKED_CHECKBOX', this.checkCheckbox)
    }
  },
  mounted() {

  },
}
</script>
<style>
  
</style>