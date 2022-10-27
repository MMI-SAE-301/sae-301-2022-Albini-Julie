<template>
    <div class="flex gap-2 lg:p-5 bg-black justify-between items-center">
        <p class="titre font-bold text-white font-work-sans">Nous contacter</p>
        <span class="sr-only">Nous contacter</span>
        <div class="flex gap-5">
            <a href="https://www.facebook.com/">
                <Facebook class="sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"/>
            </a>
            <span class="sr-only">Facebook</span>
            <a href="https://www.instagram.com/">
                <Instagram class="sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"/>
            </a>
            <span class="sr-only">Instagram</span>
            <a href="https://www.linkedin.com/feed/">
            <Linkedin class="sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"/>
            </a>
            <span class="sr-only">Linkedin</span>
        </div>
        <p class="mr-5 font-bold titre font-work-sans text-white">Mentions légales</p>
        <span class="sr-only">Mentions légales</span>
    </div>
</template>

<script setup lang="ts">
import Facebook from "../components/icons/facebook.vue"
import Instagram from "../components/icons/Instagram.vue"
import Linkedin from "../components/icons/Linkedin.vue"

</script>