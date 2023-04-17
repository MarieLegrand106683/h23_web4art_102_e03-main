<script setup>
//Importation de l'application
import { reactive } from 'vue'

import 'animate.css';

const data = reactive({
    itemImg: null
})

const props = defineProps({
    item: null
})

</script>

<template> <!--Fiche solitaire de l'exposition qui sera cloné-->
    <div class="fiche-interface">

        <div class="fiche-exposition">
            <div class="oeuvre">

                <div class="oeuvreImg">
                    <img :src="props.item.primaryimageurl" alt="">
                </div>

                <div class="oeuvre">
                    <div class="information">
                        <p v-text="props.item.title"></p>

                        <RouterLink :to="{name:'oeuvre.details', params: {id: props.item.id}}"> En savoir plus &gt;</RouterLink>
                    </div> 
               </div>
            
            </div>
        
        </div>
    </div>
    

</template>

<style lang="scss">
    
</style>