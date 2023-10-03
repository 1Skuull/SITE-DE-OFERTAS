<script setup>
import Header from "./layout/Header.vue"

</script>

<template>
  <Header />
  <main>
    <RouterView ></RouterView>
  </main>
</template>

<style scoped>
main{
  margin: 30px auto;
  width: 1080px;
}

</style>
