<script setup lang="ts">
import logo from "../components/icons/logo.vue"
import bouton from "../components/Bouton.vue"
import Footer from "../components/Footer.vue"
import { ref } from "@vue/reactivity";
import { supabase, user } from "../supabase";
import logoBlanc from "./../components/icons/logo_blanc.vue"
    
const nvlUtilisateur = ref(false);
// @ts-ignore
async function signIn(data, node) {
      const { user, error } = await (nvlUtilisateur.value
        ? supabase.auth.signUp(data)
        : supabase.auth.signIn(data));
      if (error) {
        console.error(error);
        node.setErrors([error.message]);
      }
    }


    async function loginGoogle() {
      // @ts-ignore
  const { data, error } = await supabase.auth.signIn({
    provider: 'google',
  })
}

async function loginFacebook() {
  // @ts-ignore
  const { data, error } = await supabase.auth.signIn({
    provider: 'facebook',
  })
}
</script>

<template>
    
      <div class="dark:bg-black dark:text-white">
        <div class="flex flex-col ">
        <div class="flex justify-evenly items-center text-center mt-10">
            <logo class=" dark:hidden md:w-[248px] md:h-[282px] xl:w-[348px] xl:h-[382px]"/>
            <logoBlanc class="hidden dark:block md:w-[248px] md:h-[282px] xl:w-[348px] xl:h-[382px]"/>
            <div class="flex flex-col">
            <h2 class="h2">Ravis de vous revoir !</h2>
            <h3 class="font-eb-garamond text-[30px] lg:text-[40px] xl:text-[50px]">Connectez-vous ou créer un compte.</h3>
            </div>
        </div>
      

        <div class="mx-5">
          <span class="sr-only">Se déconnecter</span>
    <bouton class="m-auto bg-violet_foncé mb-5" v-if="user" @pointerdown="supabase.auth.signOut()">
          Se déconnecter ({{ user.email }})
    </bouton>
    
        <div v-else class="md:grid md:grid-cols-2 items-center">
        <FormKit
          
          type="form"
          :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
          @submit="signIn"
          :submit-attrs="{ classes: { input: 'm-auto flex flex-wrap justify-center font-work-sans font-semibold mb-5 p-2 bg-violet_foncé text-white rounded-lg p-3 text-[15px] md:text-[20px] xl:text-[28px]' } }" :config="{classes: {
                    input: 'dark:bg-black p-1 rounded lg:w-[500px] md:w-[400px] xl:w-[600px] border-b-3 border-t-0 border-x-0 flex flex-wrap justify-center ',
                    label: 'dark:text-white text-black font-eb-garamond xl:text-[30px] md:text-[20px] text-[15px]',
 },
}"
        >
        <span class="sr-only">Se connecter</span>
          <FormKit wrapper-class="items-center m-5 justify-start gap-3 max-w-xs" name="email" label="Adresse mail" type="email" />
          <span class="sr-only">Champ entrée adresse mail</span>
          <FormKit wrapper-class="items-center m-5 justify-start gap-3 max-w-xs" name="password" label="Mot de passe" type="password" />
          <span class="sr-only">Champ entrée mot de passe</span>
          <div class="flex gap-2 items-center">
            <p class="titre ">Vous n'avez pas encore de compte ?</p>
            <formKit
            wrapper-class="items-center underline flex flex-row-reverse my-10 justify-start gap-3 max-w-xs"
            inner-class="sr-only"
              label="Inscrivez vous !"
              name="nvlUtilisateur"
              type="checkbox"
              v-model="nvlUtilisateur"
            />
            <span class="sr-only">S'inscrire</span>
          </div>
        </FormKit>
        

        <div class="md:border-l md:dark:border-white md:border-black flex flex-col items-center">
        <div class="flex flex-wrap justify-center">
        <bouton class="bg-red-600 rounded-full " @click="loginGoogle()">Se connecter avec Google</bouton> 
        <span class="sr-only">Se connecter avec Google</span>
        </div>
        
        <div class="flex my-5 flex-wrap justify-center">
        <bouton class="bg-blue-900 rounded-full" @click="loginFacebook()">Se connecter avec Facebook</bouton> 
        <span class="sr-only">Se connecter avec Facebook</span>
        </div>
        </div>
        </div>
</div>
        </div>

        <Footer class="mt-5"/>
        </div>
    

</template>