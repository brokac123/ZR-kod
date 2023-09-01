<template>
  
     <div class="slogan">
        <p class="first">UKOLIKO IMATE BILO KAKVIH PITANJA <br><span class="color">SLOBODNO NAS KONTAKTIRAJTE </span></p>
    </div>
    <hr>
    <div class="main">
            <div id="googlemaps">
                <iframe src="https://www.google.com/maps/d/embed?mid=zfuxwf-8gPsQ.kp_dIA83xp6o"></iframe>
                </div>
             <div class="omotac">   
            <div class="content">
              <h3>BAKULA OBRT</h3>
                  <p>Veliki izbor laminatnih podova vrhunskih proizvođača. <br>
                    <br>
                    Lajsne: drvene (parket, opšavne, sokl, kutne, za komarnike...)<br>
                    <br>
                    MDF i PVC (za laminat)Aluminijske (završne, prijelazne...)</p>
              </div>
              
              <div class="content">
              <h3>KONTAKT INFORMACIJE</h3>
              <p>BAKULA trgovački obrt<br />
              Matije Gupca 58, 31 000 Osijek<br /><br />
              Mob: 091-522-2559<br />
              Tel: 031-505-061
              <br>
              <br />
              E-mail: <a href="mailto:info@bakula-laminati.hr">info@bakula-laminati.hr</a></p>
          </div>
             </div>    
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.slogan{
    font-size: 3.1rem;
    margin-top: 4%;
  /*  margin-left: 17%; */
    margin-left: 4%;
    margin-bottom: 4%;
    font-weight: 0;
    color: #333;
    display: block;
    
}
.color{
    color: #86b278;
}
.first{
    display: block;
    
    line-height: 133%;
}
#googlemaps { margin: 0 0rem; }


.main{
    display:flex;
    gap: 2rem;
    margin-top: 2rem;
    margin-left: 2rem;
    justify-content: flex-start;
}

.content>h3{
    font-size: 1.5rem;
    font-weight: 200;
}
.content>p{
    font-size: 0.8rem;
    color: #999999;
    font-weight: 300;
    margin:0.6em 0;
}

@media screen and (min-width: 1303px) {
	
	#googlemaps iframe {
		width:900px;
		height:420px;
		
	}
}
@media screen and (min-width: 1159px) and (max-width: 1303px) {
	
	#googlemaps iframe {
		width:750px;
		height:300px;
		
	}
} 
 @media screen and (min-width: 971px) and (max-width: 1159px) {
	
	#googlemaps iframe {
		width:550px;
		height:300px;
		
	}
} 
@media screen and (min-width:912px)and (max-width: 970px) {
	
	#googlemaps iframe {
		width:500px;
		height:300px;
        
	}}

    @media screen and (min-width:768px)and (max-width: 911px) {
	
	#googlemaps iframe {
		width:450px;
		height:300px;
        
	}}

@media screen and (min-width:479px)and (max-width: 767px) {
	
	#googlemaps iframe {
		width:400px;
		height:200px;
        }
        .main{
        display: block;
    }
    .first{
        font-size: 2.5rem;
    }
    }
    @media screen and (min-width:375px)and (max-width: 478px) {
	
	#googlemaps iframe {
		width:300px;
		height:200px;
        }
        .main{
        display: block;
    }
    .first{
        font-size: 2.5rem;
    }
    }
    @media screen and (min-width:200px)and (max-width: 374px) {
	
	#googlemaps iframe {
		width:250px;
		height:200px;
        }
        .main{
        display: block;
    }
    .first{
        font-size: 2rem;
    }
    }



</style>