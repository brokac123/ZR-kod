<template>
    <main>
        <div class="landing--slang">
            <h1>VELIKI IZBOR <span>LAMINATNIH PODOVA</span></h1>
        </div>
        <div class="landing--container">
            <h1>POSEBNA POGODNOST PRI KUPNJI LAMINATNIH PODOVA: <b>NE MORATE KUPOVATI CIJELE PAKETE</b> (odnosi se na robu sa skladišta - lagera)</h1>
            <div class="landing--container-grid">
                <div class="grid--card">
                    <img src="../../assets/lajsne.jpg" alt="">
                    <h2>LAJSNE</h2>
                    <p>Drvene(parket, opšavne, sokl...)</p>
                </div>
                <div class="grid--card">
                    <img src="../../assets/mdf.jpg" alt="">
                    <h2>MDF i PVC</h2>
                    <p>za laminat</p>
                </div>
                <div class="grid--card">
                    <img src="../../assets/aluminijske.jpg" alt="">
                    <h2>ALUMINIJSKE</h2>
                    <p>završne, prijelazne...</p>
                </div>
                <div class="grid--card">
                    <img src="../../assets/plastika.jpg" alt="">
                    <h2>PLASTIKA</h2>
                    <p>plastične lajsne za laminat</p>
                </div>
            </div>
        </div>
        <div class="partner--container">
            <h2>POSJETITE NAS U SALONU! <b>RADNO VRIJEME: PONEDJELJAK - PETAK 9:00 - 20:00, SUBOTA: 08:00 - 13:00 </b></h2>
            <div class="partner--wrapper">
                <div class="partner--card">
                <a href="https://www.kaindl.com/en/" target="_blank">
                    <img src="../../assets/kaindl.jpg" alt="">
                </a>
            </div>
            <div class="partner--card">
                <a href="https://www.egger.com/hr/?country=HR" target="_blank">
                    <img src="../../assets/eegger.jpg" alt="">
                </a>
            </div>
            <div class="partner--card">
                <a href="https://krono-shop.com/hr/en" target="_blank">
                    <img src="../../assets/krono.jpg" alt="">
                </a>
            </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
span{
    color:#86b278;
}
.landing--slang{
   
    font-size: 1.5rem;
    margin: 5vw 10vh;
    line-height: 166%;
}
.landing--container{
    text-align: center;
    padding: 2rem 5rem;
    background-color: #F8F9F9;
}
.landing--container > h1{
    margin-bottom: 2rem;

}
.landing--container-grid{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 2rem;
}
.grid--card img{
    width: 100%;
}
.partner--wrapper{
    display: flex;
    margin-top: 2rem;
    gap: 2rem;
}
.grid--card > h2{
   margin:1rem 0;
}
.partner--container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:5rem 0;
    line-height: 1;
    
   
}
.partner--card img{
    width: 100%;
}
@media (max-width:850px) {
    .landing--container h1{
        font-size: 1.2rem;
    }
    .landing--container-grid{
        display: block;
    }
    .partner--wrapper{
        flex-direction: column;
    }
    .partner--container h2{
        text-align: center;
        font-size:1.1rem;
        display: block;
    }
    .row{
       display: block !important; 
    }
    .footer-box{
        margin-left: 0;
    }
    .grid--card{
        margin-bottom: 2rem;
    }
}
</style>