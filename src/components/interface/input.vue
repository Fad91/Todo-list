<template>
    <input type="text" :value="modelValue" @input="updateInput" class="input">
</template>

<script>
    export default {
        name: 'el-input',
        props: {
            modelValue: [String, Number],
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value )
            }
        }
    }
</script>

<style scoped>
.input {
    border: 1px solid rgb(34, 136, 252);;
    padding: 5px 15px;
}

</style>