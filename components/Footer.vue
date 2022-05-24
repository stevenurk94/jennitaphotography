<template>
    <footer>
        <section>
            <img src="~/static/jf_logo_386.png" alt="Logo Jennita Photography">
            <div>
                <ul class="socialmedia">
                    <li>
                        <a href="https://www.facebook.com/jennitaphotography/" target="_blank">
                            <IconsFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jennita_photography/" target="_blank">
                            <IconsInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:info@jennitaphotography.nl">
                            <IconsMail />
                        </a>
                    </li>

                </ul>

                <ul>
                    <li>
                        <a @click="$store.commit('cookieBanner/showCookieBanner'), $store.commit('cookieBanner/showItems', true)">Cookiebeleid &amp; instellingen</a>
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

footer section {
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
}

footer section img {
    filter: invert(1);
    width: calc(10% + 47px);
    margin: 10px 0;
}

footer section div {
    display: flex;
}

.socialmedia {
    margin-right: 50px;
}

ul {
    display: flex;
    align-items: center;
}

ul li {
    display: inherit;
}

.socialmedia li:nth-child(2) {
    margin: 0 15px;
}


li a {
    color: rgba(255 255 255 / 80%);
    transition: all 300ms ease-in-out;
    cursor: pointer;
}

.socialmedia li a {
    border: 1px solid white;
    border-radius: 50%;
    height: 42px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.socialmedia li a svg {
    height: 100%;
    width: 100%;
    cursor: pointer;
    fill: rgba(255 255 255 / 80%);
    width: 18px;
    height: 18px;
    transition: all 300ms ease-in-out;
}



li a svg path, li a svg polygon {
    fill: rgba(255 255 255 / 80%);
}

li:hover a svg path, li:hover a svg {
    fill: white;
}

li:hover a {
    color: white;
    text-decoration: underline;
}




@media only screen and (max-width: 800px) {
    footer {
        padding: 15px 0 25px 0;
    }
    footer section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
    footer section img {
        width: calc(2% + 111px);
    }

    footer section div {
        display: block;
    }
    footer section div ul, .socialmedia {
        width: fit-content;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
    ul {
        margin-top: 15px;
    }
    ul:last-child {
        margin-top: 25px;
    }
}




</style>