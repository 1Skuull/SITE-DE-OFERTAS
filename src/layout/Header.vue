<script setup>
import Carrinho from '../components/Header/Carrinho.vue';
import Logo from '../components/Header/Logo.vue';

</script>
<template>
    <header>
        <Logo />
        <h3>Barato coletivo</h3>
        <Carrinho />
    </header>
</template>
<style scoped>
header{
  margin: 15px auto;
  max-width: 1080px;
  border: 2px solid #b3b3b3de;
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 5px;

  /* -webkit-box-shadow: -4px 15px 88px -15px rgba(0,0,0,0.4);
  -moz-box-shadow: -4px 15px 88px -15px rgba(0,0,0,0.4); */
  box-shadow: -4px 15px 88px -15px rgba(0, 0, 0, 0.542);
}

</style>