<template>
  <div >
    <div class="flex justify-between xl:mx-10">
        <p class=" text-violet_foncé h1 xl:text-[100px] md:text-[80px] text-[60px]">"</p>
        <p class=" text-violet_foncé h1  xl:text-[100px] md:text-[80px] text-[60px]">"</p>
    </div>
    <div class="lg:mx-32">
    <p class="texte">{{texte}}</p>
    <p class="texte font-bold flex justify-end">{{nom}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const temprops = defineProps({
  texte: String,
  nom: String
});

</script>