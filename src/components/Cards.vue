<template>
    <h1>{{ props.title }}</h1>
    <div class="container-cards">
        <div v-for="produto in stores.produtos" class="cards" :key="produto.id">
            <img class="img-produto" :src="produto.img" :alt="produto.title">
            <h2 class="title-produto">{{ produto.title }}</h2>
            <p class="descricao-produto">{{ produto.descricao }}</p>
            <p class="preco-produto">{{ produto.preco }}</p>
            <div class="buttao-produtos">
                <button class="buttao-comprar-produto" @click="params(produto.id)">Comprar</button>
                <!-- <button class="buttao-carrinho" @click="params(produto.id)">
                    ola
                    <img src="../assets/header-cart.png" alt="">
                </button> -->
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { useCarrinhoStore }  from "../stores/Carrinho.js"

const stores = useCarrinhoStore()

console.log(stores.carrinhos)
 
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

.buttao-produtos{
    display: flex;
    gap: 5px;
}

.buttao-comprar-produto{
    background-color: black;
    color: white;
    font-size: larger;
    border: none;
    min-width: 190px;
    height: 40px;
    border-radius: 5px;
    transition: 1s;
    cursor: pointer;
}

.buttao-comprar-produto:hover{
    background-color: white;
    color: black;
    box-shadow: -15px 15px 88px -15px rgba(0, 0, 0, 1);
}
.buttao-carrinho{
    min-width: 50px;
    max-height: 40px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    transition: 1s;
    cursor: pointer;
}

</style>