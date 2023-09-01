<template>
      <div class="landing--slang">
            <h1>VELIKI IZBOR <span>LAMINATNIH PODOVA</span></h1>
      </div>
      <div class="about--wrapper">
        <div class="notification--wrapper">
            <div class="notification--wrapper-flex">
                <font-awesome-icon icon="fa-solid fa-paperclip" size="2xl" />
                <p>Upoznajte Bakula obrt</p>
            </div>
            <font-awesome-icon icon="fa-solid fa-xmark" size="2xl" />
        </div>
        <div class="kartica--wrapper">
        <div class="kartica">
            <h6>BAKULA trgovački obrt</h6>
            <p>Novootvoreni Bakula trgovački obrt svojim cijenjenim kupcima nudi veliki izbor laminata, laminatnih podova, lajsni, MDF i PVC za laminat vrhunskih proizvodača - <b>KAINDL, E EGGER, KRONO.</b>
            </p>
            <p>Svojim kupcima odobravamo 10% popusta na plaćanje gotovinom. Također imamo mogućnost obročnog plaćanja: <b>VISA, AMEX, DINERS, MAESTRO</b>.
            </p>
            <h6 style="text-decoration: underline;">OSNOVNI PODACI:</h6>
            <p>BAKULA trgovacki obrt</p>
            <p>vl. Damir Bakula</p>
            <p>Matije Gupca 58, 31000 Osijek</p>
            <p>OIB: 82508831481</p>
            <p>IBAN: HR03 2340009 1160421942</p>
        </div>
        <div class="kartica">
            <h6>Što naši kupci kažu o nama</h6>
            <div class="kartica--kupci">Jako smo zadovoljni kvalitetnom laminata! Tople preporuke svima.
            </div>
            <div class="kartica--kupci-pointer-wrapper">
                <div class="kartica--kupci-pointer">   
                </div> 
                <p><span class="color">Marija</span>, Osijek</p> 
            </div>
            <div class="kartica--kupci">
                Veliki izbor laminatnih podova, te opcija da ne moramo kupovati cijele pakete bila je presudna u konačnoj odluci pri izboru trgovca. Svaka pohvala Bakula laminatima.
            </div>
            <div class="kartica--kupci-pointer-wrapper">
                <div class="kartica--kupci-pointer">   
                </div> 
                <p><span class="color">Josip</span>, Našice</p> 
            </div>
        </div>
    </div>
    </div>   
</template>

<script>
export default {

}
</script>

<style scoped>
.landing--slang{
   
   font-size: 1.5rem;
   margin: 5vw 10vh;
   line-height: 166%;
   margin-left: 11rem;
   
}
span{
    color:#86b278;
}
.about--wrapper{
    width: 80%;
    margin: auto;
    font-size: 0.8rem;
}
.notification--wrapper{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #cccccc;
}
.notification--wrapper-flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
.notification--wrapper-flex p{
    margin-bottom: 0 !important;
    margin-left: 1rem;
}
.kartica--wrapper{
    display: flex;
    gap: 2rem;
    margin-top: 2rem;

}
.kartica--kupci-pointer-wrapper p{
    margin-top: 0.5rem;
}
.kartica--kupci-pointer-wrapper{
    display: flex;
    justify-content: flex-end;
    position: relative;
}
.kartica--kupci-pointer {
    position: absolute;
    width: 0;
    height: 0;
    border-right: 20px solid transparent;
    border-top: 25px solid #efefef;
    left: 40px;
  } 
.kartica:nth-child(2){
    width: 25%;
}
 .kartica--kupci{
    padding: 1.5rem;
    border: 1px solid #e5e5e5;
    box-shadow: 0 1px 1px 0 rgb(180 180 180 / 10%); 
    
} 
.kartica h6{
    font-size: 0.9rem;
    font-weight: 500;
}
.kartica p{
    margin-top: 0.6em;
}


@media(max-width:768px)
{
    .color{
        position: relative;
    }
    .kartica--kupci{
        
        width: fit-content;
    }
    .kartica--kupci-pointer-wrapper>p{
        position: relative;
    }
    .landing--slang{
        margin-left:3rem;
    }
    .kartica--wrapper{
        display: block;
    }
    .kartica{
        margin-top:1em;
    }
   
}
</style>