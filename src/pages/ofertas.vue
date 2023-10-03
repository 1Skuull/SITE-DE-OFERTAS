<template>
    <h1>Ofertas</h1>
    <h1>{{ route.params.id }}</h1>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

</script>