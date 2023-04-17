<script setup>
import {ref, onMounted} from 'vue'
import anime from 'animejs'

const monAnim = ref(null);
const monCarre1 = ref(null);
const monCarre2 = ref(null);
const monCarre3 = ref(null);
const mesJumelles = ref(null);

function animationJumelles(){
    anime({
        targets: mesJumelles.value,
        opacity: {
            value:[0,1], 
            duration: 800, 
            delay: 2000, 
            easing: 'linear'
        }, 
    });
}


function animationCarre3() {
    anime({
        targets: monCarre3.value,
        translateX:[
            {
                value: -200, 
                duration: 1000, 
                delay: 200, 
                easing: 'linear'
            },
            {
                value: 70, 
                duration : 600,
                easing: 'linear'
            }
        ],
        
        opacity: [
           {
            value: 0, 
            duration: 90, 
            delay: 1800, 
            easing: 'linear'
           
            
           }, 
           {
            value: [0,1], 
            duration: 800, 
            delay: 2000, 
            easing: 'linear',
            complete: animationJumelles
           }
           
        ]
        
    });
}

function animationCarre2() {
    anime({
        targets: monCarre2.value,
        translateX:[
            {
                value: -200, 
                duration: 1000, 
                delay: 200, 
                easing: 'linear'
            },
            {
                value: 50, 
                duration : 600,
                easing: 'linear'
            }
        ],
        opacity: [
            {
            value: 0, 
            duration: 100, 
            delay: 1800, 
            easing: 'linear',
            complete: animationCarre3
            },
            {
                value:[0,1], 
                duration: 800, 
                delay: 2000, 
                easing: 'linear'
            }
        ] 
    });
}
function animationCarre1(){
    anime({
        targets: monCarre1.value,
        translateX:[
            {
                value: -200, 
                duration: 1000, 
                delay: 200, 
                easing: 'linear'
            },
            {
                value: 40, 
                duration : 600,
                easing: 'linear'
            }
        ],
        opacity: [
           {
            value: 0, 
            duration: 100, 
            delay: 1800, 
            easing: 'linear',
            complete: animationCarre2
           }, 
           {
                value:[0,1], 
                duration: 800, 
                delay: 2000, 
                easing: 'linear'
            }
        ] 
    });
}

onMounted(() => {
    animationCarre1();
});
</script>

<template>
    <div class="animation-carre" ref="monAnim">
        <div class="carre1" ref="monCarre1"></div>
        <div class="carre2" ref="monCarre2"></div>
        <div class="carre3" ref="monCarre3"></div>
        <img src="../../../assets/img/svg/jumelles.svg" alt="" ref="mesJumelles">
    </div>
      
</template>

<style lang="scss">
    
</style>