<template>
  <div class="">
  <Header/>
  </div>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>

<script setup>
import Header from "./components/Header.vue"

</script>
