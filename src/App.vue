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
  margin: 0 auto;
  width: 1080px;
  margin-top: 30px;
}

</style>
