<template>
  <div class="">
  <Header/>
  </div>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class=" p-2" />
  </Suspense>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"

</script>
