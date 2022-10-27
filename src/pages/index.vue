<template>

<div class=" dark:bg-black dark:text-white">
<div class="md:flex justify-center md:items-center">
    
    <img class="md:w-1/3 mb-10 md:h-1/2" src="../../public/Montre_Couleurs_1.webp" alt="exemple de montres Tik Tak"/>
    
    <div class="md:w-2/3 md:mx-10 m-auto">
<h1 class="h1 mb-5 text-center">Créez <span class="h1 text-violet_foncé"> votre </span>propre montre !</h1>
<div class="md:border md:border-black p-5">
    <div class="md:border md:p-3 md:border-black">
        <p class="texte">Personnalisez de manière <span class="texte text-violet_foncé">unique</span> votre montre ! De l’écran en passant par le bracelet, que ce soit pour le style ou la pratique, portez votre montre créer de A à Z par <span class="texte text-violet_foncé">VOUS</span> et que personne d’autre ne portera ! Une montre unique pour un caractère unique, aucune montre ne peut se ressembler !</p>
        <p class="flex gap-2 texte">Alors vous aussi, <span class="texte text-violet_foncé">créez votre montre Tik Tak !</span></p>

        <div class="flex justify-center gap-5 mt-5">
            <RouterLink to="/Personnalisation">
                <bouton>Personnaliser</bouton>
                <span class="sr-only">Bouton personnaliser</span>
            </RouterLink>
            <RouterLink to="/connexion">
                <bouton class="dark:border-white dark:border-2 bg-black">Se connecter</bouton>
                <span class="sr-only">Bouton se connecter</span>
            </RouterLink>
        </div>
    </div>
</div>
</div>
</div>

<section v-if="user">
    <h3 class="titre mt-10 mx-10">Vos créations</h3>
    <ListeMontres class="flex flex-wrap justify-center gap-2" />
</section>

<div class=" w-3/4 m-auto">
<temoignage nom="Charline" texte="J’ai vraiment du plaisir à porter ma montre tous les jours car c’est moi qui l’ai entièrement créée, et je sais que je ne croiserai personne d’autre avec la même dans la rue !"/>
<temoignage nom="Olivier" texte="Quelle super idée ! Ca permet vraiment à chacun de ne pas être déçu du produit ou de faire des choix contraints sur certaines couleurs ! "/>
<temoignage nom="Fabrice" texte="Je recommande vraiment ! Le service est génial, la livraison rapide et les valeurs très intéressantes ! Une entreprise à soutenir !"/>
</div>

<h3 class="titre my-10 mx-10">Acheter Tik Tak c'est :</h3>
<div class="md:grid md:grid-cols-3 flex flex-col items-center justify-center">
    <img class="w-2/3 h-2/3 md:w-auto md:h-auto" src="../../public/Montre_Couleurs_Rose_2.webp" alt="valeur de la montre d'origine française"/>
    <img class="w-2/3 h-2/3 md:w-auto md:h-auto" src="../../public/Montre_Couleurs_Rose_3.webp" alt="valeur de la montre artisanale"/>
    <img class="w-2/3 h-2/3 md:w-auto md:h-auto" src="../../public/Montre_Couleurs_Rose_4.webp" alt="valeur de la préservation de l'emploi"/>
</div>

<div class="md:flex mt-20 text-center items-center ">
    <h3 class="titre mb-5 mx-28">Créer votre montre <span class="titre text-violet_foncé">française unique de fabrication artisanale et soutenez l’emploi !</span>Faites confiance à <span class="titre text-violet_foncé">Tik Tak</span>!</h3>
    <RouterLink to="/Personnalisation">
        <bouton class="flex m-auto">Personnaliser</bouton>
    </RouterLink>
    <span class="sr-only">Personnaliser</span>
</div>
</div>
<Footer class=""/>


</template>

<script setup lang="ts">
import bouton from "../components/Bouton.vue"
import temoignage from "../components/Temoignages.vue"
import { supabase, user } from "@/supabase";
import ListeMontres from "../components/ListeMontres.vue"
import Footer from "../components/Footer.vue"
</script>