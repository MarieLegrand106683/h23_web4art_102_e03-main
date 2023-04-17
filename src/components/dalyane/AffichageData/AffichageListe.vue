<script setup>
// Importation de l'application.
import axios from 'axios'
import { onBeforeMount, reactive } from 'vue'
import ItemListe from './ItemListe.vue'

// Création des éléments réactifs qui serviront à faire afficher les données.


const data = reactive({
    oeuvres: [],
    idImages: [336789, 219609, 299985, 331746, 231717, 303417]
});

// Importation du lien de la librairie Axios pour avoir accès à l'API du musée.
onBeforeMount(() => {
    for(let i = 0; i < data.idImages.length; i++) {
        axios.get('https://api.harvardartmuseums.org/object/' + data.idImages[i]+ '?apikey=46570eeb-b237-41b5-b920-5a00c8ef6799')
        .then(response =>{
            data.oeuvres.push(response.data);           
        }).catch(error => {
            console.error(error);
        });
    }
    console.log(data.oeuvres);

});


</script>

<template> <!--Importation du composant de la liste-->
    <ItemListe v-for="oeuvre in data.oeuvres" :key="oeuvre.id" :item="oeuvre"/>
</template>

<style lang="scss">
    
</style>