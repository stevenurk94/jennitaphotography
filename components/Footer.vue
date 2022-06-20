<template>
    <footer>
        <section>
            <img src="~/static/jf_logo_386.png" alt="Logo Jennita Photography">
            <div class="wrapper">
                
                <PagepartsSocials />

                <ul class="wrapper__column">
                    <li class="wrapper__column__item">
                        <a class="wrapper__column__item__link underline-white" @click="$store.commit('cookieBanner/showCookieBanner'), $store.commit('cookieBanner/showItems', true)">Cookiebeleid &amp; instellingen</a>
                    </li>
                </ul>

            </div>
        </section>
    </footer>
</template>



<style scoped>

footer {
    padding: 6px 0px;
    background: var(--clr-1-1);
    margin-top: auto;
}

section {
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
}

/* ########## FOOTER LOGO ########## */

img {
    filter: invert(1);
    width: calc(10% + 47px);
    margin: 10px 0;
}


/* ########## FOOTER WRAPPER ########## */

.wrapper {
    display: flex;
}


/* ########## FOOTER LINKS ########## */

    .wrapper__column {
        display: flex;
        align-items: center;
        margin-left: 50px;
        color: rgba(255 255 255 / 80%);
        width: fit-content;
    }

    .wrapper__column__item__link {
        color: rgba(255 255 255 / 80%);
        transition: all 300ms ease-in-out;
        cursor: pointer;
    }

    .wrapper__column__item:hover .wrapper__column__item__link {
        color: white;
    }




@media only screen and (max-width: 800px) {
    footer {
        padding: 25px 0 35px 0;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
    img {
        width: calc(2% + 111px);
        margin-bottom: 30px;
    }
    .wrapper {
        flex-direction: column;
        align-items: center;
    }
    ul:last-child {
        margin-top: 30px;
        margin-left: 0;
    }
}




</style>