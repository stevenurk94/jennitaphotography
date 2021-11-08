<template>
    <div class="nav-section">

        <div class="nav-logo">JF</div>

        <nav>
            <div class="background-image"></div>
            <div class="top-fade"></div>
            <div class="left-fade"></div>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/">Fotokaarten</NuxtLink>
                    <NuxtLink to="/">Foto's downloaden</NuxtLink>
                </li>
            </ul>
        </nav>

        <input type="checkbox" id="toggle" class="input">
        <label for="toggle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </label>


    </div>

</template>





<style>



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
    background: #3A524D;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
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
    background: url("~/static/img/image00004.jpeg");
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
}

header .nav-section label span {
    position: absolute;
    background-color: white;
    transition: var(--trans);
    height: 3px;
    width: 100%;
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

    }






}
</script>

