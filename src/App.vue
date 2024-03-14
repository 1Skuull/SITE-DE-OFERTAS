<script setup>
import Header from "./layout/Header.vue"
import Footer from "./components/Footer/index.vue"

</script>

<template>
  <Header />
  <main>
    <RouterView ></RouterView>
  </main>
  <Footer />
</template>

<style scoped>
main{
  margin: 0 auto;
  max-width: 1080px;
  min-height: 843px;
}

</style>
