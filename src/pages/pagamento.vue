<template>
    <div class="container">
        <Form />
        <Resumo />
    </div>
</template>
<script setup>
import Form from "../components/Pagamento/Form.vue"
import Resumo from "../components/Pagamento/Resumo.vue"

</script>
<style scoped>
.container{
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: 60% 40%;
}


</style>