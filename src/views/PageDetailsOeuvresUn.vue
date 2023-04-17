<script setup>
    // Importation d'axios.
    import axios from 'axios';

    import 'animate.css';

    // Importation des composants qui seront utilisés dans la page
    import CreationComposant from '@/components/dalyane/CreationComposant/CreationComposant.vue';
    import CreationSousComposant from '@/components/dalyane/CreationSousComposant/CreationSousComposant.vue';

    //import FicheExposition from "@/components/dalyane/FicheExposition/FicheExposition.vue";
    import TitreComposant from '@/components/dalyane/TitreComposant/TitreComposant.vue';
    import ParagrapheComposant from '@/components/dalyane/ParagrapheComposant/ParagrapheComposant.vue';

    // Importation d'éléments réactifs utilisés dans la page
    import { reactive, onBeforeMount, computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const routeId = computed(() => route.params.id);

    const data = reactive({
        id : null, 
        oeuvre: null
    });

    onBeforeMount(() => {
        data.id = routeId;
        axios.get('https://api.harvardartmuseums.org/object/' + data.id + '?apikey=46570eeb-b237-41b5-b920-5a00c8ef6799')
            .then(response => {
                data.oeuvre = response.data; 
                console.log(data.oeuvre)
            })
    })

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

            <!--Fiche importée dans le page des détails d'une oeuvre en particulier-->

            <div class="details">
                <div class="fiche-exposition">

                    <div class="oeuvre">

                        <div class="fiche" v-if="data.oeuvre">

                            <div class="oeuvreImg">
                                <img :src="data.oeuvre.primaryimageurl" alt="">
                            </div>

                            <div class="oeuvre">

                                <div class="information">
                                    <p v-text="data.oeuvre.title"></p>

                                    <div class="description">
                                        <h3>Description de l'oeuvre</h3>
                                        <p v-text="data.oeuvre.description"></p>
                                    </div>
                                    <div class="division">
                                        <h3>Division de l'oeuvre</h3>
                                        <p v-text="data.oeuvre.division"></p>
                                    </div>
                                    <div class="technique">
                                        <h3>Techniques utilisées dans l'oeuvre</h3>
                                        <p v-text="data.oeuvre.technique"></p>
                                    </div>
                                    <div class="dimensions">
                                        <h3>Dimensions de l'oeuvre</h3>
                                        <p v-text="data.oeuvre.dimensions"></p>
                                    </div>
                                    <div class="periode">
                                        <h3>Période entourant l'oeuvre</h3>
                                        <p v-text="data.oeuvre.period"></p>
                                    </div>
                                    <div class="siecle">
                                        <h3>Siècle de l'oeuvre</h3>
                                      <p v-text="data.oeuvre.century"></p>  
                                    </div>
                                    

                                    <RouterLink :to="{name:'expositionun.liste'}">Retour à la l'exposition</RouterLink>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </div>
                 

            </div>
            

            
            

        </div>
    </main>

</template>

<style lang="scss">
    
</style>