<template>
    <div class="md:flex md:items-center dark:bg-black dark:text-white">
        <div class=" flex justify-center">
        <logo class="dark:hidden xl:w-[400px] xl:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px]"/>
        <logoBlanc class="hidden dark:block xl:w-[400px] xl:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px]"/>
        </div>
        <p class=" titre text-center mx-5">Tik Tak a pensé un champs de couleurs et de matières unique pour vous ! Créez la montre qui vous accompagnera tous les jours dans votre quotidien ! Laissez libre cours à votre imagination !</p>
    </div>
    <FormMontre/>
    <Footer/>
</template>

<script setup lang="ts">
import logo from "../components/icons/logo.vue"
import FormMontre from "../components/FormMontre.vue"
import Footer from "../components/Footer.vue"
import logoBlanc from "../components/icons/logo_blanc.vue"
</script>