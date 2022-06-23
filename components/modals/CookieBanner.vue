<template>
    <transition name="cookieBanner">
        <div class="CB" v-if="this.$store.state.cookieBanner.showCookieBanner" data-nosnippet>
            <div class="CB__popup">
                <span v-if="this.$store.state.cookieBanner.showItems" @click="$store.commit('cookieBanner/showItems', false)" class="CB__popup__arrow">
                    <IconsLeftArrow />
                </span>
                <h3 class="CB__popup__h3">{{ this.$store.state.cookieBanner.showItems ? "Cookie-instellingen" : "Cookies op Jennitaphotography.nl" }}</h3>
                <transition name="closeItems">
                    <p v-if="!this.$store.state.cookieBanner.showItems" class="CB__popup__text">Welkom op Jennitaphotography.nl! Onze website maakt gebruik van cookies en vergelijkbare technieken. Sommige cookies zijn noodzakelijk andere meer gemakkelijk om erbij te hebben. Je kunt dit zelf naar voorkeur <span @click="$store.state.cookieBanner.showItems ? $store.commit('cookieBanner/showItems', false).cookieBanner : $store.commit('cookieBanner/showItems', true)" >instellen</span>. Met behulp van cookies maken we de website elke dag een beetje beter.</p>
                </transition>
                <transition name="showItems">
                    <div v-if="this.$store.state.cookieBanner.showItems" class="CB__items">
                        <div class="CB__items__item">
                            <div class="CB__items__item__text">
                                <h4>Standaard cookies</h4>
                                <p>Onze standaard cookies zorgen ervoor dat simpele functie van de website werken. We gebruiken analytische en functionele cookies om te kijken hoe we de website beter kunnen maken.</p>
                            </div>
                            <input type="checkbox" id="switch-1" checked disabled>
                            <label class="CB__items__item__switch" for="switch-1"></label>
                        </div>
                        <div class="CB__items__item">
                            <div class="CB__items__item__text">
                                <h4>Persoonlijke cookies</h4>
                                <p >Onze persoonlijke cookies zorgen ervoor dat de website werkt zoals je verwacht. Daarnaast maken we gebruik van wat geavanceerdere technieken die ons helpen de website nog beter te maken.</p>
                            </div>
                            <input type="checkbox" id="switch-2" checked>
                            <label class="CB__items__item__switch" for="switch-2"></label>
                        </div> 
                    </div>
                </transition>
                <div class="CB__popup__buttons">
                    <button 
                        v-if="this.$store.state.cookieBanner.showItems" 
                        class="CB__popup__buttons__selection button-2" 
                        @click="$store.commit('cookieBanner/setCookieBanner', 'selection'), $store.commit('cookieBanner/showItems', false)"
                    >Selectie toestaan</button>
                    <button 
                        class="CB__popup__buttons__accept button-1" 
                        :class="this.$store.state.cookieBanner.showItems ? 'wider' : ''" 
                        @click="$store.commit('cookieBanner/setCookieBanner', 'accepted'), $store.commit('cookieBanner/showItems', false)"
                    >Akkoord</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>

.CB {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--clr-1-3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    backdrop-filter: blur(5px);
}

.CB__popup {
    background-color: var(--clr-1-1);
    padding: 35px;
    border-radius: var(--border-radius);
    max-width: 770px;
    width: 95%;
    /* max-height: 700px; */
    height: fit-content;
    max-height: 100%;
    position: relative;
}

@media only screen and (max-width: 768px) {
    .CB__popup {
        padding: 25px;
    }
}

@media only screen and (max-width: 640px) {
    .CB__popup {
        width: 98%;
        max-height: 98%;
    }
}

@media only screen and (max-width: 380px) {
    .CB__popup {
        padding: 15px;
    }
}


/* ###################### POPUP ARROW ######################  */

.CB__popup__arrow {
    position: absolute;
    left: 36px;
    top: 39px;
    cursor: pointer;
    width: 31px;
    height: 31px;
    padding: 3px;
}

.CB__popup__arrow svg, .CB__popup__arrow svg path {
    fill: white;
    opacity: 0.7;
    transition: all 200ms ease-in-out;
}

.CB__popup__arrow:hover svg, .CB__popup__arrow:hover svg path {
    opacity: .95;
}

@media only screen and (max-width: 768px) {
    .CB__popup__arrow {
        top: 30px;
        left: 24px;
        width: 28px;
        height: 28px;
    }

}

@media only screen and (max-width: 380px) {
    .CB__popup__arrow {
        width: 26px;
        width: 26px;
        top: 19.5px;
        left: 14px;
    }
}


/* ###################### POPUP TITLE & TEXT ######################  */

.CB__popup__h3 {
    color: white;
    text-align: center;
    margin-bottom: 15px;
    line-height: 1.5;
}

.CB__popup__text {
    color: rgb(255 255 255 / 90%);
    margin-bottom: 25px;
    font-size: 15px;
}

.CB__popup__text span  {
    text-decoration: underline;
    cursor: pointer;
}





/* ###################### POPUP ITEMS ######################  */

.CB__items {
    max-height: 320px;
    overflow-y: scroll;
    margin: 40px 0 25px 0;
}

.CB__items::-webkit-scrollbar-thumb {
    background: var(--clr-2-3);
    border-radius: var(--border-radius);
}

.CB__items::-webkit-scrollbar {
    width: 8px;
}

.CB__items__item {
    display: flex;
    margin-bottom: 25px;
    padding-top: 18px;
    border-top: 1px solid rgba(255 255 255 / 30%);
    margin-right: 7px;
}

.CB__items__item:last-child {
    border-bottom: 1px solid rgba(255 255 255 / 30%);
    padding-bottom: 18px;
}



.CB__items__item__text h4 {
    font-size: 20px;
    margin-bottom: 10px;
    color: rgb(255 255 255 / 90%);
    margin-top: 2.5px;
    width: fit-content;
}


.CB__items__item__text p {
    color: rgb(255 255 255 / 80%);
    font-size: 15px;
}














.CB__items__item input[type="checkbox"] {
    display: none;
}


.CB__items__item__switch {
    height: 32px;
    width: 57px;
    min-width: 57px;
    background: #e4e4e4;
    border: 4px solid #e4e4e4;
    cursor: pointer;
    display: block;
    padding: 0;
    top: 0;
    bottom: 0;
    margin: auto 0 auto 35px;
    position: relative;
    border-radius: 100px;
    transition: all 100ms ease-in-out;
}

.CB__items__item__switch::after {
    content: "";
    height: 24px;
    width: 24px;
    background: white;
    border-radius: 100px;
    box-shadow: 2px 2px 5px rgb(0 0 0 / 16%);
    left: 0;
    top: 0;
    position: absolute;
    transform: translateX(0);
    transition: all 100ms ease-out;


}

input:checked + .CB__items__item__switch {
    background: var(--clr-2-1);
    border-color: var(--clr-2-1);
}

input:checked + .CB__items__item__switch::after {
    transform: translateX(25px);
}
/* 
.CB__items:not(:first-child).CB__items__item__switch:hover::after {
    background: #e6e6e6;
} */

.CB__items__item__switch:hover:active::after {
    width: 32.4px!important;
}

input:checked + .CB__items__item__switch:hover:active::after {
    transform: translateX(16.6px);
}


.CB__items__item:first-child .CB__items__item__switch {
    pointer-events: none;
    background: var(--clr-3-2);
    border-color: var(--clr-3-2);
}


@media only screen and (max-width: 640px) {
    .CB__items__item__switch {
        margin-left: 0;
    }
}


/* ###################### POPUP BUTTONS ######################  */

.CB__popup__buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.CB__popup__buttons__accept {
    margin-left: auto;
    right: 0;
    width: 32%;
    transition: width 0ms;
    padding: 13.5px 33px;
}

.CB__popup__buttons__accept.wider {
    width: 48%;
    padding: 15px 33px;
}

.CB__popup__buttons__selection {
    border-color: white;
    color: white;
    opacity: .8;
    width: 48%;
}

.CB__popup__buttons__selection:hover {
    background: rgb(255 255 255 / 20%);
}



@media only screen and (max-width: 640px) {
    .CB__popup__buttons {
        display: block;
    }

    .CB__popup__buttons__selection {
        width: 100%;
    }

    .CB__popup__buttons__accept {
        margin-top: 18px;
    }

    .CB__popup__buttons__accept.wider {
        width: 100%;
    }
}

@media only screen and (max-width: 520px) {
    .CB__popup__buttons__accept {
        width: 100%;
    }
}

/* ###################### CSS TRANSITIONS ######################  */

.showItems-enter-active {
    height: auto;
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms ease-in-out;
}

.showItems-enter {
    height: 0;
    opacity: 0;
    transform: translateX(50px);
    transition: all 250ms ease-in-out;
}

.closeItems-enter-active {
    height: 100%;
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms ease-in-out;
}

.closeItems-enter {
    height: 0;
    opacity: 0;
    transform: translateX(50px);
    transition: all 250ms ease-in-out;
}




.cookieBanner-enter-active,
.cookieBanner-leave-active {
    opacity: 1;
    transition: all 1s ease-in-out;
}

.cookieBanner-enter,
.cookieBanner-leave-to {
    opacity: 0;
    transition: all 200ms ease-in-out;
}



</style>