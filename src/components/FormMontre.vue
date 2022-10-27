<script setup lang="ts">
import type { Montre } from "@/types";
import {ref} from "vue";
import SvgMontre from "../components/SvgMontre.vue"
import FormKitListColors from "./FormKitListColors.vue"
import FormKitListMateriaux from "./FormKitListMateriaux.vue"
import bouton from "../components/Bouton.vue"
import {colors} from "../types"
import {materiaux} from "../types"
import type { Context } from "vm";
import {supabase, user} from "../supabase"
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
  data?: Montre;
  id?: string;
}>();

const montre = ref<Montre>(props.data ?? {});


if (props.id) {
 // On charge les données du quartier
 let { data, error } = await supabase
 .from("montre")
 .select("*")
 .eq("id_montre", props.id);
 if (error) console.log("n'a pas pu charger le table Montre :", error);
 else montre.value = (data as any[])[0]};

// @ts-ignore
 async function upsertMontre(dataForm, node) {
  console.log(dataForm);
  const { data, error } = await supabase.from("montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "montres-edit-id", params: { id: data[0].id_montre} });
  }
}

// @ts-ignore
 async function upsertCommande(dataForm, node) {
  console.log(dataForm);
  const { data, error } = await supabase.from("montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push("/");
  }
}

async function supprimerMontre() {
  const { data, error } = await supabase
    .from("montre")
    .delete()
    .match({ id_montre: montre.value.id_montre });
  if (error) {
    console.error(
      "Erreur à la suppression de ",
      montre.value,
      "erreur :",
      error
    );
  } else {
    router.push("/");
  }
}

</script>
<template>
<div class="dark:bg-black dark:text-white">


<div class="flex gap-20 justify-center">
    <div>
<FormKit type="form" v-model="montre" submit-label="Enregistrer" @submit="upsertMontre" :submit-attrs="{ classes: { input: 'dark:border-2 dark:border-white mt-5 flex flex-wrap justify-around font-work-sans font-semibold mb-5 p-2 bg-black text-white rounded-lg p-3 text-[15px] md:text-[20px] xl:text-[28px]' } }" :config="{classes: {
                    input: 'dark:bg-black p-1 rounded lg:w-[500px] md:w-[400px] xl:w-[600px] border-b-3 border-t-0 border-x-0 flex flex-wrap justify-center ',
                    label: 'dark:text-white text-black font-eb-garamond xl:text-[30px] md:text-[20px] text-[15px]',
 },}">

    <div class="gap-5">
    
    <div class="lg:grid lg:grid-cols-2 gap-10">
        <div class="flex gap-10 items-center justify-center">
            <div class="flex titre flex-col">
                <FormKitListColors  name="bracelet" label="Bracelet" />
                <span class="sr-only">Choix des couleurs du bracelet</span>
                <h3 class="titre">Matériaux</h3>
                <FormKitListMateriaux name="bracelet"/>
                <span class="sr-only">Choix des matériaux du bracelet</span>
            </div>
            <img class="mb-16" src="../../public/bracelet_1.jpg" alt="représentation bracelet"/>
        </div>
        <div class="flex gap-10 items-center justify-center">
                <div class="flex flex-col titre">
                    <FormKitListColors name="ecran" label="Ecran" />
                    <span class="sr-only">Choix des couleurs de l'écran</span>
                    <h3 class="titre">Matériaux</h3>
                    <FormKitListMateriaux name="ecran"/>
                    <span class="sr-only">Choix des matériaux de l'écran</span>
                </div>
                <img src="../../public/ecran_1.jpg" alt="représentation écran"/>
        </div>
   </div>
   <div class="lg:grid lg:grid-cols-2 gap-5 mt-16">
    <div class="flex flex-col justify-center gap-32">
    <div class="flex gap-10 sitems-center justify-center">
            <div class="flex flex-col titre">
                <FormKitListColors name="boitier" label="Boitier" />
                <span class="sr-only">Choix des couleurs du boitier</span>
                <h3 class="titre">Matériaux</h3>
                <FormKitListMateriaux name="boitier"/>
                <span class="sr-only">Choix des matériaux du boitier</span>
            </div>
    <img src="../../public/Bords_1.jpg" alt="représentation boitier"/>
    </div>
    

    <FormKit name="libelle" label="Nom de votre montre" placeholder="Nom de la montre" type="text" />
    <span class="sr-only">Champs d'entrée du nom de la montre</span>
    </div>
    <div class="flex justify-center">
    <SvgMontre  class="w-[214px] h-[469px] md:w-[414px] md:h-[569px] xl:w-[614px] xl:h-[869px]" v-bind="montre" id="profil" />
    <span class="sr-only">Prototype</span>
    </div>
   </div>
    </div>
    <FormKit label="Commander" label-class="bg-violet_foncé text-white gap-2 rounded-lg p-3 text-[20px] md:text-[20px] xl:text-[28px] " type="checkbox" name="commande" input-class="sr-only"/>

</FormKit>
</div>
</div>
<div class="flex justify-center">
<button
        type="button"
        v-if="montre.id_montre"
        @click="($refs.dialogSupprimer as any).showModal()"
        class="mx-5 focus-style justify-self-end rounded-md text-[20px] bg-red-500 p-2 font-inter font-bold text-white shadow-sm"
      >
        Supprimer la montre
      </button>
      </div>
      <span class="sr-only">Suppression</span>
      <dialog
        ref="dialogSupprimer"
        @click="($event.currentTarget as any).close()"
      >
        <button
          type="button"
          class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm"
        >
          Annuler</button
        >
        <span class="sr-only">Annuler</span>
        <button
          type="button"
          @click="supprimerMontre()"
          class="focus-style rounded-md bg-red-500 p-2 shadow-sm"
        >
          Confirmer suppression
        </button>
        <span class="sr-only">Confirmer la suppression</span>
      </dialog>

      <div class="md:flex mt-20 text-center items-center">
        <div class="md:w-2/3 ">
        <p class="texte mx-28 font-semibold text-center">Fier de vous ? Vous pouvez désormais commander votre montre et avec Tik Tak, vous pouvez bénéficier de la <span class="m-auto text-violet_foncé">livraison rapide</span> qui vous permettra de porter votre montre dans <span class="text-violet_foncé">2 jours</span> !</p>
        </div>
        <div class="md:w-1/3 my-5 flex flex-col items-center">
        <!--<bouton @click= "montre.commande = true">Commander</bouton>
        <span class="sr-only">Commander</span>
        -->
          
        <p class="titre font-work-sans font-semibold text-center">Livraison rapide en 2j !</p>
        </div>
      </div>
</div>
</template>
