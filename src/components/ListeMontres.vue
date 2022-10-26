<script setup lang="ts">
import { supabase } from "@/supabase";
import SvgMontre from "./SvgMontre.vue";
import bouton from "../components/Bouton.vue"
import { useRouter } from "vue-router";
import type { Montre } from "@/types";
import {ref} from "vue";
const router = useRouter();



const props = defineProps<{
  max?: number;
  data?: Montre;
  id?: string;
}>();

const { data: montres, error } = await supabase
  .from("montre")
  .select("*")
  .limit(props.max ?? 100);
if (error) {
  console.log("n'a pas pu récupérer les montres", { error });
}

const montre = ref<Montre>(props.data ?? {});

if (props.id) {
 // On charge les données du quartier
 let { data, error } = await supabase
 .from("montre")
 .select("*")
 .eq("id_montre", props.id);
 if (error) console.log("n'a pas pu charger le table Montre :", error);
 else montre.value = (data as any[])[0]};


</script>
<template>
  <ul class="md:flex-nowrap md:relative md:w-full flex md:snap-x md:overflow-x-auto pb-14">
    <li class="flex flex-col justify-center items-center" v-for="montre in montres" :key="montre.id">
      <div class="shrink-0 md:w-[30vw] lg:w-[23vw]">
      <router-link class="block"
        :to="{ name: 'montres-edit-id', params: { id: montre.id_montre } }"
      >
        <SvgMontre class="w-full snap-center shrink-0" v-bind="montre" />
      </router-link>
      </div>
      <bouton class="w-1/2" @click= "montre.commande = true">Commander</bouton>
    </li>
  </ul>
</template>