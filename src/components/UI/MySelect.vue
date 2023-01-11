<template>
    <select v-model="localModelValue" @change="changeOptions">
        <option value="" disabled>Choose from list</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}</option>
    </select>
</template>

<script>
export default {
    computed: {
        localModelValue: {
            get() {
                return this.modelValue
            },
            set(newValue) {
                this.$emit('update:modelValue', newValue)
            }
        }
    },
    name: 'my-select',
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOptions(event) {
            this.$emit('update: modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>