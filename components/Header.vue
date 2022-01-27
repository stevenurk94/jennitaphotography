<template>
    <div class="nav-section">

        <input type="checkbox" id="toggle" class="input">
        <label for="toggle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>
            <div class="background-image"></div>
            <div class="top-fade"></div>
            <div class="left-fade"></div>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/">Fotokaarten</NuxtLink>
                    <NuxtLink to="/">Foto's downloaden</NuxtLink>
                    <NuxtLink to="/winkelwagen">Winkelwagen</NuxtLink>
                </li>
            </ul>
        </nav>

        <NuxtLink class="nav-logo" to="/">JF</NuxtLink>
        <!-- <NuxtLink class="nav-logo" to="/">
            <img src="~/static/Nieuw logo l19.png" alt="">
        </NuxtLink>
         -->

        <NuxtLink class="cart" to="/winkelwagen">

            <span v-if="cartItemCount" class="notification-label">{{ cartItemCount }}</span>
            <svg viewBox="0 0 38 38" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                <g>
                    <path d="M19.1738378,3 C22.6918793,3 25.5613445,5.80614546 25.7099327,9.3242996 L25.7159769,9.61107428 L25.7158948,11.0581943 L28.2027404,11.0587642 C29.5869089,11.0587642 30.7593675,12.0623362 31.0031568,13.4192401 L31.0326705,13.6253444 L32.9831893,31.8135942 C33.1525648,33.3929902 32.0228677,34.8120964 30.4599416,34.9832561 C30.3580872,34.9944106 30.2557108,35 30.1532592,35 L30.1532592,35 L7.84649926,35 C6.27442109,35 5,33.7121503 5,32.1235069 C5,32.00032 5.00783077,31.8772604 5.02344396,31.7550878 L5.02344396,31.7550878 L7.34783519,13.5668381 C7.53113401,12.1325336 8.73975488,11.0587642 10.1708905,11.0587642 L10.1708905,11.0587642 L12.6312659,11.0581943 L12.6316986,9.61107428 C12.6316986,5.95987877 15.560714,3 19.1738378,3 Z M28.2027404,12.798039 L25.7158948,12.7974692 L25.7159769,18.897231 C25.7159769,19.3775185 25.3306868,19.7668684 24.8554074,19.7668684 C24.4233351,19.7668684 24.0656342,19.4450916 24.0041687,19.0257396 L23.9948378,18.897231 L23.9947557,12.7974692 L14.352405,12.7974692 L14.3528376,18.897231 C14.3528376,19.3775185 13.9675475,19.7668684 13.4922681,19.7668684 C13.0601959,19.7668684 12.702495,19.4450916 12.6410293,19.0257396 L12.6316986,18.897231 L12.6312659,12.7974692 L10.1708905,12.798039 C9.65224251,12.798039 9.20751456,13.1547483 9.08117693,13.6509732 L9.05479887,13.7896031 L6.73040763,31.9778528 C6.72423497,32.0261537 6.72113909,32.0748051 6.72113909,32.1235069 C6.72113909,32.7515753 7.22497995,33.2607251 7.84649926,33.2607251 L7.84649926,33.2607251 L30.1532592,33.2607251 L30.2745054,33.2541056 C30.8924068,33.1864376 31.3390312,32.6253957 31.2720689,32.0009834 L31.2720689,32.0009834 L29.32155,13.8127335 C29.2596437,13.235468 28.7773313,12.798039 28.2027404,12.798039 L28.2027404,12.798039 Z M19.1738378,4.73927488 C16.5971621,4.73927488 14.4926161,6.78200223 14.3595202,9.35233811 L14.3528376,9.61107428 L14.352405,11.0581943 L23.9948378,11.0581943 L23.9948378,9.61107428 C23.9948378,6.92045376 21.8364026,4.73927488 19.1738378,4.73927488 Z"></path>
                </g>
            </svg>
        </NuxtLink>









    </div>

</template>


<style>




/* ----------------- Cart ----------------- */

.cart {
    position: relative;
    width: 55px;
    height: 55px;
    padding: 5px;
}

.notification-label {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--clr-2-1);
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    letter-spacing: 0;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    text-align: center;
}

path {
    fill: white;
    transition: all 400ms ease-in-out;
}

header.scrolled path {
    fill: black;
}

header.scrolled .nav-section.open path {
    fill: white;
}

/*------------------------------------------*/

.nav-logo {
    font-family: 'Fleur De Leah', cursive;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    cursor: pointer;
    z-index: 10;
    transition: all 400ms ease-in-out;
    color: white;
    /* width: 80px; */
}

.nav-logo img {
    width: 100%;
    height: 100%;
}

header.scrolled .nav-logo {
    padding: 15px 0;
    color: black
}

header.scrolled .nav-section.open .nav-logo {
    color: white;
}

/* header .nav-section.open .nav-logo {
    color: white;
} */

/* ############ HEADER ############## */

header {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    top: 0;
    background: var(--clr-1-1);
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 9999;
}

header.scrolled {
    background: white;
    box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0/12%);
}



header .nav-section {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--website-width);
    width: 95%;
}



/* ############ NAV ITEMS ############## */

header .nav-section nav {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: all .75s cubic-bezier(0.87, 0, 0.13, 1);
  opacity: 0;
  visibility: hidden;
  

}

header .nav-section.open nav {
    visibility: visible;
    opacity: 1;
}



header .nav-section .background-image {
    background: url("~/assets/img/kaart0004.jpeg");
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
}



header .nav-section nav .top-fade {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
}

header .nav-section nav .left-fade {
    background: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    position: absolute;
    height: 100%;
    width: 100vw;
    right: 0;
    top: 0;
}

header .nav-section nav ul {
    transform: translate(0, -50%) scale(1.5) rotate(0deg);
    transition: all .75s cubic-bezier(0.87, 0, 0.13, 1);
    opacity: 0;
}

header .nav-section.open nav ul {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 1;
}

header .nav-section nav ul li {
    font-size: 19px;
    font-weight: 500;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 1.25rem;
    flex-wrap: nowrap;
    line-height: 50px;
    flex-direction: column;
}


header .nav-section nav ul li a {
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    width: 100%;
    transition: all ease-in 250ms;
    text-decoration: none;
    font-size: 40px;
    padding: 14px 32px;
    text-align: center;
    font-weight: bold;
}

header .nav-section nav ul li a:hover {
    color: #fff;
    
}




/* ############ MENU BUTTON ############## */

header .nav-section input[type="checkbox"] {
  display: none;
}

header .nav-section label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 35px;
    cursor: pointer;
    position: relative;
    z-index: 999;
}

header .nav-section label span {
    position: absolute;
    background-color: white;
    transition: var(--trans);
    height: 2.5px;
    width: 95%;
    border-radius: 50px;
    transition: all ease-in 250ms;
}

header.scrolled .nav-section label span {
    background-color: black;
}

header.scrolled .nav-section.open label span {
    background-color: white;
}

header .nav-section label span:not(:nth-child(3)) {
    box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0 / 12%);
}

header .nav-section label span:nth-child(1) {
    top: 0;
}
header .nav-section label span:nth-child(4) {
    bottom: 0;
}

/*
header .nav-section input:checked ~ label span:nth-child(1) {
  transform: translateY(75px);
  opacity: 0;
}

header .nav-section input:checked ~ label span:nth-child(4) {
  transform: translateY(-75px);
  opacity: 0;
}
*/

header .nav-section input:checked ~ label span:nth-child(1) {
    transform: translateY(27px);
    width: 0;
}

header .nav-section input:checked ~ label span:nth-child(4) {
    transform: translateY(-27px);
    width: 0;
}

header .nav-section input:checked ~ label span:nth-child(2) {
    transform: rotate(45deg);
}

header .nav-section input:checked ~ label span:nth-child(3) {
    transform: rotate(-45deg);
}




</style>











<script>
export default {

    mounted: function() {
        
        // SCROLL TRIGGER HEADER
        const header = document.querySelector("header");

        window.onscroll = function() {
            if (window.scrollY > 100) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
  
        // NAV-open/close
        const navButton = document.getElementById("toggle");
        const navMenu = document.querySelector("header .nav-section");

        let menuOpen = false;

        navButton.addEventListener("change", function() {

            if(!menuOpen) {
                navMenu.classList.add("open");
                menuOpen = true;
                navButton.checked = true;

            } else {
                navMenu.classList.remove("open");
                menuOpen = false;
                navButton.checked = false;
            }
        });


        // PULLING PRODUCTS FROM LOCAL-STORAGE
        this.$store.commit("updateCartFromLocalStorage")
        this.$store.commit("updateBillingDetailsFromLocalStorage")
        this.$store.commit("updateFormDetailsLocalStorage")

    },

    computed: {
        cartItemCount () {
            if (this.$store.getters.cartItemCount < 100 && this.$store.getters.cartItemCount != 0) {
                return this.$store.getters.cartItemCount
            } else if (this.$store.getters.cartItemCount >= 100) {
                return "99+"
            }
        },
    },






}
</script>

