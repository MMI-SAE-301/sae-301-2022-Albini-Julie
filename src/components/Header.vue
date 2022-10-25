<template>
    <div class="md:hidden flex justify-between mt-2">
        <logo class="w-1/6 h-1/6 ml-5"/>
    <div>
    <div class="mb-5 flex flex-wrap justify-between">
<button class="relative z-50 m-5" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
:class="[menuOuvert ? 'hidden' : '',]">
  <Menu1 class="mx-5" />
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
          </li>
          <li class="mt-5">
            <router-link class="" to="/Connexion">
                Connexion
            </router-link>
          </li>
               </div>
      </ul>
    </div>
  </div>
  </div>
  </div>

    <div class="hidden md:block">
        <div class="flex items-center justify-evenly border-b-2 border-black ">
        <logo/>
        <RouterLink class="font-eb-garamond text-[40px]" to="/Personnalisation">Personnalisation</RouterLink>
        <RouterLink class="font-eb-garamond text-[40px]" to="/Connexion">Connexion</RouterLink>
        </div>
    </div>
    

<Suspense>
  <router-view class="m-2 border-2 p-2" />
</Suspense>


</template>

<script setup lang="ts">
import logo from "../components/icons/logo.vue"
import Menu1 from "./icons/menu.vue"
  import Croix from "./icons/croix.vue"

  import { ref } from "@vue/reactivity";

  let menuOuvert = ref()
  menuOuvert.value = false

</script>