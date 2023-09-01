<template>
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-info">
                    <img src="../../assets/footer_logo.png" style="max-width:100%;">
                    <p style="margin-top:2%">Veliki izbor laminatnih podova vrhunskih <br>proizvodača.</p>
                    <p>Lajsne: drvene (parket, opšavne, sokl,<br> kutne, za komarnike...)</p>
                    <p>MDF i PVC (za laminat) Aluminijske <br>(završne, prijelazne...)</p>
                </div>
                <div class="footer-box">
                    <p><b>KONTAKT INFORMACIJE</b></p>
                    <p> <font-awesome-icon icon="fa-solid fa-location-dot" style="padding-right: 3px;" />BAKULA trgovački obrt Matije Gupca 58, 31 000 Osijek</p>
                    <p> <font-awesome-icon icon="phone" style="padding-right: 3px;"/> 091-522-2559</p>
                    <p> <font-awesome-icon icon="fa-solid fa-envelope" style="padding-right: 3px;"/>E-mail: info@bakula-laminati.hr</p>
                </div>
                <div class="footer-box">
                    <p><b>ZADNJI TWEETOVI</b></p>
                    <p>POSEBNA POGODNOST PRI KUPNJI <br>LAMINATNIH PODOVA: NE MORATE KUPOVATI<br> CIJELE PAKETE (odnosi se<br> na robu sa skladišta - lagera)<br></p>
                </div>
            </div>
            <hr>
            <p class="copyright">&copy; BAKULA obrt 2015... Sva prava pridržana.</p>
        </div>
    </footer>
</template>

<style scoped>


 .footer{
    background: #333; 
    padding: 1rem 1rem;
    color: white;
    border-top: 4px solid #86b278;
}
.container{
    width: 60vw;
    margin:0 auto;
}
.row{
    display: flex;
}
.footer-box{
    margin-left: 9rem;
}
.row > div > p{
 margin:1rem 0;
}
@media(max-width:424px)
{

    .header--logo{
        width: 80%;
    }

}
.copyright{
    margin-top: 1rem;
}
@media (max-width:850px) {

    .row{
       display: block !important; 
    }
    .footer-box{
        margin-left: 0;
    }
}
</style>