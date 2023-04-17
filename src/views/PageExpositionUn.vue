<script setup>
 // Importation de l'application
 import CreationComposant from '@/components/dalyane/CreationComposant/CreationComposant.vue';
 import CreationSousComposant from '@/components/dalyane/CreationSousComposant/CreationSousComposant.vue';

 import AffichageListe from '../components/dalyane/AffichageData/AffichageListe.vue';
 import TitreComposant from '../components/dalyane/TitreComposant/TitreComposant.vue';
 import ParagrapheComposant from '../components/dalyane/ParagrapheComposant/ParagrapheComposant.vue';
 import AnimeComposant from '../components/dalyane/AnimeComposant/AnimeComposant.vue';
 
 //import FicheExposition from "@/components/dalyane/FicheExposition/FicheExposition.vue";

 
</script>

<template>
    <main>
        <!--Main qui sert de div.interface-->
        <div class="contenu">

            <!--Le logo de l'exposition (Peut être modifié en cours de route)-->
            <div class="logoExpo">
                <img src="../assets/img/svg/BELD1678345_logo2.svg" alt="logo-expo">
            </div>

            <!--Insertion des composants-->
            <CreationComposant/>
            <CreationSousComposant/>

            <!--Le texte-->
            <TitreComposant/>
            <ParagrapheComposant/>


            <AnimeComposant/>
            
            <!--Importation de l'affichage de la liste des oeuvres -->
            <div class="conteneur">
                <AffichageListe/>
            </div>
            
            
            

        </div>
    </main>

</template>

<style lang="scss">
    
</style>