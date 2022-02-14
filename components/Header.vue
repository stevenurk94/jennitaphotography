<template>
    <section class="navbar">

        <NuxtLink class="navbar__logo" to="/">
            <img src="~/static/Logo website.png" alt="">
        </NuxtLink>
        
        <input type="checkbox" id="toggle">
        <label for="toggle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </label>

        <nav>
            <ul>
                <li>
                    <h3>Menu</h3>
                </li>
                <li>
                    <NuxtLink to="/">Home
                        <span>&#8250;</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/kaarten">Webshop
                        <span>&#8250;</span>
                    </NuxtLink>                   
                </li>
                <li>
                    <a href="mailto:info@jennitaphotography.nl">Contact
                        <span>&#8250;</span>
                    </a>
                </li>
            </ul>
        </nav>


        <NuxtLink class="cart" to="/winkelwagen">

            <span v-if="cartItemCount" class="cart__notification">{{ cartItemCount }}</span>
            <svg viewBox="0 0 38 38" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                <!-- <g> -->
                    <path d="M19.1738378,3 C22.6918793,3 25.5613445,5.80614546 25.7099327,9.3242996 L25.7159769,9.61107428 L25.7158948,11.0581943 L28.2027404,11.0587642 C29.5869089,11.0587642 30.7593675,12.0623362 31.0031568,13.4192401 L31.0326705,13.6253444 L32.9831893,31.8135942 C33.1525648,33.3929902 32.0228677,34.8120964 30.4599416,34.9832561 C30.3580872,34.9944106 30.2557108,35 30.1532592,35 L30.1532592,35 L7.84649926,35 C6.27442109,35 5,33.7121503 5,32.1235069 C5,32.00032 5.00783077,31.8772604 5.02344396,31.7550878 L5.02344396,31.7550878 L7.34783519,13.5668381 C7.53113401,12.1325336 8.73975488,11.0587642 10.1708905,11.0587642 L10.1708905,11.0587642 L12.6312659,11.0581943 L12.6316986,9.61107428 C12.6316986,5.95987877 15.560714,3 19.1738378,3 Z M28.2027404,12.798039 L25.7158948,12.7974692 L25.7159769,18.897231 C25.7159769,19.3775185 25.3306868,19.7668684 24.8554074,19.7668684 C24.4233351,19.7668684 24.0656342,19.4450916 24.0041687,19.0257396 L23.9948378,18.897231 L23.9947557,12.7974692 L14.352405,12.7974692 L14.3528376,18.897231 C14.3528376,19.3775185 13.9675475,19.7668684 13.4922681,19.7668684 C13.0601959,19.7668684 12.702495,19.4450916 12.6410293,19.0257396 L12.6316986,18.897231 L12.6312659,12.7974692 L10.1708905,12.798039 C9.65224251,12.798039 9.20751456,13.1547483 9.08117693,13.6509732 L9.05479887,13.7896031 L6.73040763,31.9778528 C6.72423497,32.0261537 6.72113909,32.0748051 6.72113909,32.1235069 C6.72113909,32.7515753 7.22497995,33.2607251 7.84649926,33.2607251 L7.84649926,33.2607251 L30.1532592,33.2607251 L30.2745054,33.2541056 C30.8924068,33.1864376 31.3390312,32.6253957 31.2720689,32.0009834 L31.2720689,32.0009834 L29.32155,13.8127335 C29.2596437,13.235468 28.7773313,12.798039 28.2027404,12.798039 L28.2027404,12.798039 Z M19.1738378,4.73927488 C16.5971621,4.73927488 14.4926161,6.78200223 14.3595202,9.35233811 L14.3528376,9.61107428 L14.352405,11.0581943 L23.9948378,11.0581943 L23.9948378,9.61107428 C23.9948378,6.92045376 21.8364026,4.73927488 19.1738378,4.73927488 Z"></path>
                <!-- </g> -->
            </svg>
        </NuxtLink>


    </section>

</template>


<style>

/* ########## HEADER SETTINGS ########## */
header {
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 9999;
    background: var(--clr-1-1);
}

header.scrolled {
    background: white;
    box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0/12%);
}

header .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    right: 0;
    left: 0;
    margin: auto;
}



/* ########## NAVBAR LOGO ########## */
header .navbar__logo {
    width: calc(6.5% + 87px);
    z-index: 2;
}

header.scrolled .navbar__logo {
    color: black;
    width: 200px;
}

header .navbar__logo img {
    width: 100%;
    height: 100%;
    filter: invert(1);
    transition: all 150ms ease-in-out;
    margin: 13.5px 0 12.5px 0;
}

header.scrolled .navbar__logo {
    width: calc(5% + 87px)
}

header.scrolled .navbar__logo img {
    filter: invert(0);
    margin: 10px 0 8px 0;
}

header.scrolled .navbar.open .navbar__logo img {
    filter: invert(1);
}


@media only screen and (max-width: 900px) {
    header .navbar__logo {
        width: calc(2% + 140px);
    }
    header.scrolled .navbar__logo {
        width: calc(2% + 120px);
    }
    header .navbar__logo img, header.scrolled .navbar__logo img {
        margin: 6px 0 5px 0;
    }
}










/* ########## NAVBAR ITEMS ########## */
header .navbar nav ul {
    display: flex;

}
header .navbar nav ul li a {
    font-family: 'IBM Plex Serif', serif;
    color: rgba(255, 255, 255, 0.767);
    transition: all 300ms ease-in-out;
    font-size: 20px;
    margin: 0 30px;
    font-weight: 500;
    letter-spacing: 0.8px;
    position: relative;
    padding: 5px 0;
}
header .navbar nav ul li a:hover, header .navbar nav ul li a.nuxt-link-exact-active.nuxt-link-active {
    color: white;
}
header .navbar nav ul li a::after {
    content: "";
    width: 0;
    height: 1.5px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 50px;
    bottom: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    position: absolute;
}
header .navbar nav ul li a:hover::after {
    width: 100%;
}
header.scrolled .navbar nav ul li a.nuxt-link-exact-active.nuxt-link-active:hover::after {
    background: var(--clr-1-1);
}
header.scrolled .navbar nav ul li a {
    color: var(--clr-3-1);
}
header.scrolled .navbar nav ul li a:hover {
    color: black;
}
header.scrolled .navbar nav ul li a.nuxt-link-exact-active.nuxt-link-active {
    color: var(--clr-1-1);
}
header.scrolled .navbar nav ul li a::after {
    background: black;
}




/* ########## MENU BUTTON ########## */

header .navbar input[type="checkbox"], header .navbar nav ul li a span, header .navbar nav ul li h3 {
  display: none;
}

header .navbar label {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 30px;
    cursor: pointer;
    position: relative;
    z-index: 999;
}

header .navbar label span {
    position: absolute;
    background-color: white;
    transition: var(--trans);
    height: 2px;
    width: 95%;
    border-radius: 50px;
    transition: all ease-in 250ms;
}

header.scrolled .navbar label span {
    background-color: black;
}

header.scrolled .navbar.open label span {
    background-color: white;
}

header .navbar label span:not(:nth-child(3)) {
    box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0 / 12%);
}

header .navbar label span:nth-child(1) {
    top: 0;
}
header .navbar label span:nth-child(4) {
    bottom: 0;
}

header .navbar input:checked ~ label span:nth-child(1) {
    transform: translateY(27px);
    width: 0;
}

header .navbar input:checked ~ label span:nth-child(4) {
    transform: translateY(-27px);
    width: 0;
}

header .navbar input:checked ~ label span:nth-child(2) {
    transform: rotate(45deg);
}

header .navbar input:checked ~ label span:nth-child(3) {
    transform: rotate(-45deg);
}





@media only screen and (max-width: 900px) {

    header .navbar label {
        display: flex;
        order: -1;
    }

    header .navbar nav {
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
        visibility: hidden;
        background: linear-gradient(rgb(0 0 0 / 80%), rgb(0 0 0 / 60%)), url("~/assets/img/kaart0004.jpeg");
        background-size: cover;
        opacity: 0;
        transition: opacity 60ms ease-in-out, transform 50ms cubic-bezier(.19,1.22,1);
        transform: scaleY(0);
        transform-origin: top;
    }

    header .navbar.open nav {
        opacity: 1;
        transform: scaleY(1);
        overflow-y: hidden;
        visibility: visible;
        transition: transform 100ms cubic-bezier(.19,1,.22,1);

    }

    header .navbar nav ul {
        padding-top: 140px;
        display: block;
        right: 0;
        left: 0;
        margin: auto;
        width: 95%;
        max-width: 500px;
    }

    header .navbar nav ul li {
        border-bottom: .1px solid rgba(255, 255, 255, 0.25);
    }


    header .navbar nav ul li h3 {
        display: block;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1.4px;
        text-align: center;
        margin-bottom: 13px;
        font-size: 23px;
    }

    header .navbar nav ul li a {
        margin: 0;
        padding: 9px 15px 11px 15px;  
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 0;
        font-size: 17px;
    }

    header .navbar nav ul li:nth-child(1) h3 {
        transition: opacity 150ms ease-in-out;
        opacity: 0;
    }
    header .navbar nav ul li:nth-child(2) a {
        /* transform: translateX(-10%); */
        transition: all 250ms ease-in-out;
    }    
    header .navbar nav ul li:nth-child(3) a {
        /* transform: translateX(-20%); */
        transition: all 350ms ease-in-out;
    }
    header .navbar nav ul li:nth-child(4) a {
        /* transform: translateX(-30%); */
        transition: all 450ms ease-in-out;
    }
    header .navbar.open nav ul li a, header .navbar.open nav ul li h3 {
        /* transform: translate(0); */
        opacity: 1;
    }





    header.scrolled .navbar nav ul li a {
        color: rgba(255, 255, 255, 0.767);
    }

    header.scrolled .navbar nav ul li a.nuxt-link-exact-active.nuxt-link-active {
        color: white;
    }

    header .navbar nav ul li a span {
        display: block;
        color: rgba(255, 255, 255, 0.767);
        font-size: 30px;
        font-weight: 400;
        padding-bottom: 2px;
    }
}









/* ########## NAVBAR CART ICON ########## */

.cart {
    position: relative;
    width: 37px;
    height: 37px;
    margin-left: 11%;
}

.cart__notification {
    position: absolute;
    top: -5px;
    right: -5px;
    background: var(--clr-2-1);
    border-radius: 8px;
    padding: 3px;
    min-width: 18px;
    height: 18px;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 1;
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    text-align: center;
}

header svg path {
    fill: white;
    transition: all 400ms ease-in-out;
}

header.scrolled svg path {
    fill: black;
}

header.scrolled .navbar.open svg path {
    fill: white;
}

@media only screen and (max-width: 900px) {
    .cart {
        margin-left: 0;
    }
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
        const navMenu = document.querySelector("header .navbar");

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

