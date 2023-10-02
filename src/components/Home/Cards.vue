<template>
    <h1>{{ props.title }}</h1>
</template>
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    title: String,
})

</script>
<style scoped>


</style>