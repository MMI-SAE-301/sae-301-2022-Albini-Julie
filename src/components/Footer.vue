<template>
    <div class="flex bg-black p-5 justify-between items-center">
        <p class="titre ml-5 font-bold text-white font-work-sans">Nous contacter</p>
        <div class="flex gap-5">
            <a href="https://www.facebook.com/">
                <Facebook class="sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"/>
            </a>
            <a href="https://www.instagram.com/">
                <Instagram class="sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"/>
            </a>
            <a href="https://www.linkedin.com/feed/">
            <Linkedin class="sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"/>
            </a>
        </div>
        <p class="mr-5 font-bold titre font-work-sans text-white">Mentions légales</p>
    </div>
</template>

<script setup lang="ts">
import Facebook from "../components/icons/facebook.vue"
import Instagram from "../components/icons/Instagram.vue"
import Linkedin from "../components/icons/Linkedin.vue"

</script>