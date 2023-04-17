<script setup>
  const props = defineProps({
    photo: {
        type: String,
        required: true, 
        default: '// photo //'
    },
    nom: {
        type: String,
        required: true, 
        default: '// nom //'
    },
    description: {
        type: String,
        required: true, 
        default: '// description //'
    },
    prix: {
        type: String,
        required: true, 
        default: '// prix //'
    },
    artiste: {
        type: String,
        required: true, 
        default: '// artiste //'
    },
    annee: {
        type: String,
        required: true, 
        default: '// année //'
    },
  })


</script>

<template>
    <div class="fiche-expo">
        <div class="wrapExpo">
            <div class="wrapImg">
                <div class="image">
                    <img :src="props.photo" :alt="props.nom">
                </div>
            </div>

            <div class="wrapExpo">
                <div class="infoExpo">
                    <span>Le nom de l'oeuvre</span> 
                    <span v-text="props.nom"></span>
                </div>
                <div class="infoExpo">
                    <span>Sa description</span> 
                    <span v-text="props.description"></span>
                </div>
                <div class="infoExpo">
                    <span>Le prix de l'oeuvre</span> 
                    <span v-text="props.prix"></span>
                </div>
                <div class="infoExpo">
                    <span>L'artiste</span> 
                    <span v-text="props.artiste"></span>
                </div>
                <div class="infoExpo">
                    <span>L'année de production</span> 
                    <span v-text="props.annee"></span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    
</style>