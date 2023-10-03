<template>
    <h1>{{ props.title }}</h1>
    <div class="container-cards">
        <div class="cards">
            <img class="img-produto" src="" alt="">
            <h2 class="title-produto">Hotel Long Beach</h2>
            <p class="descricao-produto">2 diarias em um quarto com vista para o mar</p>
            <p class="preco-produto">R$ 100,00</p>
            <button class="buttao-comprar-produto" @click="params(1)">Comprar</button>
        </div>
        <div class="cards">
            <img class="img-produto" src="" alt="">
            <h2 class="title-produto">Hotel Long Beach</h2>
            <p class="descricao-produto">2 diarias em um quarto com vista para o mar</p>
            <p class="preco-produto">R$ 100,00</p>
            <button class="buttao-comprar-produto" @click="params(2)">Comprar</button>
        </div>
        <div class="cards">
            <img class="img-produto" src="" alt="">
            <h2 class="title-produto">Hotel Long Beach</h2>
            <p class="descricao-produto">2 diarias em um quarto com vista para o mar</p>
            <p class="preco-produto">R$ 100,00</p>
            <button class="buttao-comprar-produto" @click="params(3)">Comprar</button>
        </div>
        <div class="cards">
            <img class="img-produto" src="" alt="">
            <h2 class="title-produto">Hotel Long Beach</h2>
            <p class="descricao-produto">2 diarias em um quarto com vista para o mar</p>
            <p class="preco-produto">R$ 100,00</p>
            <button class="buttao-comprar-produto" @click="params(4)">Comprar</button>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
    title: String,
    img: String,
    alt: String,
    titleProduto: String,
    preco: String,
    buttao: String,
})

const route = useRouter()

function params(id){
    route.push(`/oferta/${id}`)
}

</script>
<style scoped>

.container-cards{
    /* background-color: black; */
    height: 500px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.cards{
    /* background-color: brown; */
    /* color: white; */
    width: 300px;
    height: 400px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.img-produto{
    border: 2px solid #b3b3b3de;
    min-height: 190px;
    border-radius: 5px;
    width: 100%;
    display: flex;
}

.title-produto{
    font-size: x-large;
}

.descricao-produto{
    font-size: larger;
    margin-left: 15px; 
}

.preco-produto{
   font-weight: bold;
   font-size: larger;
   margin-left: 15px; 
}

.buttao-comprar-produto{
    background-color: black;
    color: white;
    font-size: larger;
    border: none;
    width: 190px;
    height: 40px;
    border-radius: 5px;
    transition: 1s;
    cursor: pointer;
}

.buttao-comprar-produto:hover{
    background-color: white;
    color: black;
    box-shadow: -4px 15px 88px -15px rgba(0, 0, 0, 0.542);
}

</style>