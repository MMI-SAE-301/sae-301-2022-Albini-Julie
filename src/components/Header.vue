<template>
    <div class="md:hidden dark:bg-black flex justify-between mt-2">
      <RouterLink to="/">
        <logo class=" dark:hidden xl:w-1/6 xl:h-1/6 w-[90px] h-[94px] ml-5"/>
        <logoBlanc class="hidden dark:block"/>
      </RouterLink>
      <span class="sr-only">Accueil</span>
    <div>
    <div class="mb-5 flex flex-wrap justify-between">
<button class="relative z-50 m-5" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
:class="[menuOuvert ? 'hidden' : '',]">
  <Menu1 class="mx-5 dark:hidden" />
  <menuBlanc class="hidden dark:block"/>
      <span class="sr-only">Menu</span>
    </button>
    <button class="relative z-50 m-5" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
:class="[menuOuvert ? '' : 'hidden',]">
  <Croix class="mx-5" />
      <span class="sr-only">Menu</span>
    </button>
</div>

    <div class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
    :class="['bg-gray-900 text-white', menuOuvert ? 'translate-x-0' : '',]">
    <div class="flex justify-center items-center">
      <ul class="sm:flex "  @click="menuOuvert = !menuOuvert ">
        <div class="flex flex-col mt-10">
          <router-link to="/">
          <h2 class="font-bold text-2xl">Tik Tak</h2>
        </router-link>
          <li class="mt-5" :class="[menuOuvert ? '' : 'hidden',]">
            <router-link class="" to="/Personnalisation">
                Personnalisation 
            </router-link>
            <span class="sr-only">Personnaliser</span>
          </li>
          <li class="mt-5">
            <router-link class="" to="/Connexion">
                Connexion
            </router-link>
            <span class="sr-only">Connexion</span>
          </li>
               </div>
      </ul>
    </div>
  </div>
  </div>
  </div>

    <div class="hidden md:block dark:bg-black dark:text-white">
        <div class="flex items-center justify-evenly border-b-2 border-black dark:border-white">
        <RouterLink to="/">
            <logo class="dark:hidden"/>
            <logoBlanc class="hidden dark:block"/>
        </RouterLink>
        <span class="sr-only">Accueil</span>
        <RouterLink class="font-eb-garamond text-[40px]" to="/Personnalisation">Personnalisation</RouterLink>
        <span class="sr-only">Personnalisation</span>
        <RouterLink class="font-eb-garamond text-[40px]" to="/Connexion">Connexion</RouterLink>
        <span class="sr-only">Connexion</span>
        </div>
    </div>


</template>

<script setup lang="ts">
import logo from "../components/icons/logo.vue"
import Menu1 from "./icons/menu.vue"
  import Croix from "./icons/croix.vue"
  import logoBlanc from "../components/icons/logo_blanc.vue"
  import menuBlanc from "../components/icons/menuBlanc.vue"

  import { ref } from "@vue/reactivity";

  let menuOuvert = ref()
  menuOuvert.value = false

</script>