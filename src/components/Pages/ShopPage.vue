<template>
    
    <p class="webshop-header">{{ $store.getters.userEmail}},dobrodošli u Bakula Laminati web shop</p>
   

    <div class="landing--slang">
        <h1>NAŠA PONUDA <span>LAMINATNIH PODOVA</span></h1>
    </div>
    <hr>
    <div class="landing--slang">
        <h1>EGGER</h1>
    </div>
    <div class="egger--container">
       
       <EggerHrast></EggerHrast>
       <egger-sant></egger-sant>
       <egger-bardulino></egger-bardulino>
       <egger-natur></egger-natur>
       <egger-hunton></egger-hunton>
       <egger-cesena></egger-cesena>
       <egger-white-wood></egger-white-wood>
       <egger-hunton-hrast-tamni></egger-hunton-hrast-tamni>
    </div>

    <div class="landing--slang">
        <h1>KRONO</h1>
    </div>
    <div class="egger--container">
       <krono-rip-oak></krono-rip-oak>
        <krono-polar-white></krono-polar-white>
       <krono-oak-peterson></krono-oak-peterson> 
       <krono-oak-grey></krono-oak-grey>
       <krono-oak-brown></krono-oak-brown>
       <krono-bohemia></krono-bohemia>
       <KronoBeige></KronoBeige>
       <KronoAdaja></KronoAdaja>
    </div>

    <div class="landing--slang">
        <h1>BINYL PRO</h1>
    </div>
    <div class="egger--container">
      <binyl-pro-tortona></binyl-pro-tortona>
      <binyl-pro-sohopine></binyl-pro-sohopine>
      <binyl-pro-quick-silver></binyl-pro-quick-silver>
      <binyl-pro-moonslate></binyl-pro-moonslate>
      <binyl-pro-havana-oak></binyl-pro-havana-oak>
      <binyl-pro-dartagnan></binyl-pro-dartagnan>
      <binyl-pro-bolero-oak></binyl-pro-bolero-oak>
      <binyl-pro-skatepark></binyl-pro-skatepark>
    </div>


</template>

<script>
import EggerHrast from './EggerHrast.vue';
import EggerHunton from './EggerHunton.vue';
import EggerNatur from './EggerNatur.vue';
import EggerBardulino from './EggerBardulino.vue';
import EggerSant from './EggerSant.vue';
import EggerCesena from './EggerCesena.vue';
import EggerWhiteWood from './EggerWhiteWood.vue';
import EggerHuntonHrastTamni from './EggerHuntonHrastTamni';

import KronoRipOak from './KronoRipOak.vue'
import KronoPolarWhite from './KronoPolarWhite.vue'
import KronoOakPeterson from './KronoOakPeterson.vue'
import KronoOakGrey from './KronoOakGrey.vue'
import KronoOakBrown from './KronoOakBrown.vue'
import KronoBohemia from './KronoBohemia.vue'
import KronoBeige from './KronoBeige.vue'
import KronoAdaja from './KronoAdaja.vue'

import BinylProTortona from './BinylProTortona.vue'
import BinylProSohopine from './BinylProSohopine.vue'
import BinylProQuickSilver from './BinylProQuickSilver.vue'
import BinylProMoonslate from './BinylProMoonslate.vue'
import BinylProHavanaOak from './BinylProHavanaOak.vue'
import BinylProDartagnan from './BinylProDartagnan.vue'
import BinylProBoleroOak from './BinylProBoleroOak.vue'
import BinylProSkatepark from './BinylProSkatepark.vue'
export default {
    metaInfo() {
    return {
      showHeaderFooter: false
    }},
    components: {
        EggerHrast,
        EggerSant,
        EggerBardulino,
        EggerNatur,
        EggerHunton,
        EggerCesena,
        EggerWhiteWood,
        EggerHuntonHrastTamni,
        KronoRipOak,
        KronoPolarWhite,
        KronoOakPeterson,
        KronoOakGrey,
        KronoOakBrown,
        KronoBohemia,
        KronoBeige,
        KronoAdaja,
        BinylProTortona,
        BinylProSohopine,
        BinylProQuickSilver,
        BinylProMoonslate,
        BinylProHavanaOak,
        BinylProDartagnan,
        BinylProBoleroOak,
        BinylProSkatepark

        
        
    }}
        

    
</script>
<style scoped>
.egger--container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;
    width: 90%;
    margin: auto;
    padding-bottom: 3rem;
    
}

.egger--card-description {
    display: flex;
    padding: 2rem 1rem;
}

.egger--card-description h1 {
    font-size: 1.2rem;
}

.egger--card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    width: 100%;
}

button {
    border: none;
    border-radius: 1rem;
    background: #86b278;
    width: 60%;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
}

span {
    color: #86b278;
}

.landing--slang {
    font-size: 1.5rem;
    margin: 5vw 10vh;
    line-height: 166%;
}

img {
    height: 100%;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}
.webshop-header{
    font-size: 2.5rem;
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    line-height: 166%;
    font-family: 'Helvetica Neue', sans-serif; /* Choose your desired font-family */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a subtle text shadow */
    padding: 20px; /* Add some padding around the text for spacing */
    background-color: #FDFEFE; /* Choose a background color */
    border-radius: 10px; /* Round the corners of the background */
    color:#86b278;
}
@media screen and (min-width:768px)and (max-width: 911px) {
    .webshop-header{
        font-size: 2rem;
    }
}
@media screen and (min-width:320px)and (max-width: 911px) {
    .webshop-header{
        font-size: 1.3rem;
    }
    .egger--container{
        display: block;
    }
    h1{
        font-size: 1.5rem;
    }
}



</style>