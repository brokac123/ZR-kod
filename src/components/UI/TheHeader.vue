<template>
 <header class="header">
        <div class="wrap flex">
            <router-link to="/">
                <img class="header--logo" src="../../assets/logo.png" alt="logo slika">
            </router-link>
            <nav class="navbar navbar--desktop" v-if="$store.state.user">
                <ul class="flex">
                    <li><router-link to="/">Naslovna</router-link>
                    </li>
                    <li><router-link to="/shop">Ponuda</router-link>
                    </li>
                    <li><router-link to="/about">O nama</router-link>
                    </li>
                    <li><router-link to="/contact">Kontakt</router-link>
                    </li>
                    <li><router-link to="/calculator">Kalkulator</router-link>
                    </li>
                    <h3 class="user-email">Ulogirani korisnik:{{ $store.getters.userEmail}}</h3>
                    <li>
                        <button class="odjava" @click="$store.dispatch('logout')">
                        Odjava</button>
                    </li>
                </ul>
            </nav>
            <nav class="navbar" v-if="isOpened">
                <button class="close-nav" @click="changeState">&#10006;</button>
                <ul class="flex">
                    <li><router-link to="/" @click="closeMenu">Naslovna</router-link>
                    </li>
                    <li><router-link to="/" @click="closeMenu" >Ponuda</router-link>
                    </li>
                    <li><router-link to="/about" @click="closeMenu" >O nama</router-link>
                    </li>
                    <li><router-link to="/contact" @click="closeMenu" >Kontakt</router-link>
                    </li>
                    <li><router-link to="/calculator" @click="closeMenu" >Kalkulator</router-link>
                    </li>
                    <h3 class="user-email">Ulogirani korisnik:{{ $store.getters.userEmail}}</h3>
                    <li>
                       <router-link to="login" @click="closeMenu"><button class="odjava2" @click="$store.dispatch('logout')">Odjava</button></router-link>
                    </li>
                    
                </ul>
            </nav>
            <div class="icon-bar flex" @click="changeState"><span></span></div>
        </div>
    </header>
    
</template>
<script>

import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default{
    setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
    data(){
        return {
            isOpened: false,
        }
    },
    methods:{
        changeState(){
            this.isOpened=!this.isOpened;
        },
        closeMenu() {
         this.isOpened = false;
        }
}
    }

</script>
<style scoped>
.header--logo{
    width: 80%;
}
.header--logo img{
    width: 100%;
}
@media(max-width:851px){
    .navbar--desktop{
        display: none;
}
}
.header {
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header .wrap {
    max-width: 1200px;
    height: 100px;
    padding: 0 20px;
    margin: 0 auto;
    justify-content: space-between; 
    align-items: center;
}

.navbar li{
    text-decoration: none;
}

.navbar .close-nav {
    display: none;
}

.navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
    align-items: center;
}
.navbar ul li a:hover{
    background-color: rgba(255,255,255,0.8); 
    
    color: #86b278;

}
.navbar li {
    padding: 0 0.6em;
}
.user-email{
    font-size: 0.9rem;
}

.navbar a {
    font-size: 1.125rem;
    display: block;
    padding: 0.3em;
    font-weight: bold;
}

@media (max-width: 850px) {
    .container {
        font-size: 1rem;
    }
    .icon-bar {
        cursor: pointer;
        display: flex;
        align-items: center;
        border: 1px solid #86b278;
        width: 50px;
        height: 50px;
        padding: 0 12px;
        border-radius: 3px;
    }
    .icon-bar:hover {
        background-color: #fffaf6;
    }
    .icon-bar span {
        border-top: 2px solid #333;
        width: 100%;
    }
    .icon-bar span::before,
    .icon-bar span::after {
        content: "";
        border-bottom: 2px solid #333;
        display: block;
        height: 8px;
    }
    .overflow-none {
        overflow: hidden;
    }
    .navbar {
        position: fixed;
        width: 100%;
        height: 100%;
        transition: 0.2s linear;
        top: 0;
        left: 0;
        background-color: #fafcf5;
        z-index: 9;
    }
    .navbar .close-nav {
        all: unset;
        font-size: 2.5rem;
        display: block;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        cursor: pointer;
    }
    .navbar .close-nav:hover {
        color: #999999;
    }
    .navbar ul {
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }
    .navbar li {
        padding: 0.7rem 0;
    }
    .navbar a {
        font-size: 2rem;
        text-transform: uppercase;
    }
    .navbar a:hover {
        text-decoration: underline;
    }
    .nav-scale {
        transform: scale(1) !important;
    }
}
@media (max-width: 375px) {
    .container {
        font-size: 1rem;
    }
    .icon-bar {
        cursor: pointer;
        display: flex;
        align-items: center;
        border: 1px solid #86b278;
        width: 50px;
        height: 50px;
        padding: 0 12px;
        border-radius: 3px;
    }
    .icon-bar:hover {
        background-color: #fffaf6;
    }
    .icon-bar span {
        border-top: 2px solid #333;
        width: 100%;
    }
    .icon-bar span::before,
    .icon-bar span::after {
        content: "";
        border-bottom: 2px solid #333;
        display: block;
        height: 8px;
    }
    .overflow-none {
        overflow: hidden;
    }
    .navbar {
        position: fixed;
        width: 100%;
        height: 100%;
        transition: 0.2s linear;
        transform: scale(0);
        top: 0;
        left: 0;
        background-color: #fafcf5;
        z-index: 9;
    } 
    .navbar .close-nav {
        all: unset;
        font-size: 2.5rem;
        display: block;
        position: absolute;
        top: 1.5rem;
        right: 2.5rem;
        cursor: pointer; 
    }
    .navbar .close-nav:hover {
        color: #999999;
    }
    .navbar ul {
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }
    .navbar li {
        padding: 0.7rem 0;
    }
    .navbar a {
        font-size: 2rem;
        text-transform: uppercase;
    }
    .navbar a:hover {
        text-decoration: underline;
    }
    .nav-scale {
        transform: scale(1) !important;
    }
    .dropdown-menu[data-bs-popper]{
        border: 0;
    }
}
.flex{
    display: flex;
}
.odjava{
  background: linear-gradient(45deg, #86b278, #88e279);
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  
}
.odjava2{
  background: linear-gradient(45deg, #86b278, #88e279);
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  margin-top: 0;
}
</style>