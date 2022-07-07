<template>

    <main>
        <section>
            <div class="div1">
                <div class="div2">
                    <div class="div3">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/herfst-1.fdf6232.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div2">
                    <div class="div3">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/een-jongen-of-meisje.b421585.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div2">
                    <div class="div3">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/een-dochter-6.1da82a8.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div2">
                    <div class="div3">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/vlinder-1.e93bfee.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div2">
                    <div class="div3">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/een-dochter-2.55e63e4.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div2">
                    <div class="div3">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/vuurtoren.f7bf235.webp" alt="">
                        </picture>
                    </div>
                </div>   
            </div>

        </section>
        <section>
            <div class="div11">
                <div class="div22">
                    <div class="div33">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/herfst-1.fdf6232.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div22">
                    <div class="div33">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/een-jongen-of-meisje.b421585.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div22">
                    <div class="div33">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/een-dochter-6.1da82a8.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div22">
                    <div class="div33">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/vlinder-1.e93bfee.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div22">
                    <div class="div33">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/een-dochter-2.55e63e4.webp" alt="">
                        </picture>
                    </div>
                </div>
                <div class="div22">
                    <div class="div33">
                        <picture>
                            <img src="https://jennitaphotography.nl/_nuxt/img/vuurtoren.f7bf235.webp" alt="">
                        </picture>
                    </div>
                </div>   
            </div>

        </section>
    </main>


</template>


<style scoped>

section {
    display: flex;
    justify-content: center;
    margin: 40px 0;
    width: 100%;

}

.div1 {
    display: grid;
    gap: 25px 3%;
    grid-template-columns: repeat(3, 1fr); 
    padding-top: 15px;
    position: relative;
    max-width: 800px;
}

.div2 {
    position: relative;
    margin: 8%;
}



.div3 {
    padding: 6%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background: white;
}

.div2::before {
    content: "";
    width: 90%;
    background: linear-gradient(270deg, #f1f1f1 0%, #b8b8b8 100%);
    height: 18px;
    display: flex;
    transform: skewY(-4deg);
    z-index: -10000;
    position: absolute;
    top: -7.4px;
    left: 0;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 14;
}




























.div11 {
    display: grid;
    gap: 25px 3%;
    grid-template-columns: repeat(3, 1fr); 
    padding-top: 15px;
    position: relative;
    max-width: 800px;
}

.div22 {
    position: relative;
    margin: 8%;
    /* transform: skewY(0deg); */
    transform: rotateY(-25deg) skewY(6deg);
}

.div33 {
    padding: 6%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background: white;
}

.div22::before {
    content: "";
    width: 113%;
    background: linear-gradient(270deg, #f1f1f1 0%, #b8b8b8 100%);
    height: 50px;
    display: block;
    z-index: -10000;
    position: absolute;
    top: -17.9px;
    left: 0;
    transform: skewY(-9deg);
}

.div22::after {
    content: "";
    height: 96%;
    background-color: #f1f1f1;
    width: 48px;
    position: absolute;
    display: block;
    right: -27px;
    bottom: 14%;
    z-index: -20000;
    transform: skewY(-6deg);

    /* background: red; */



}



</style>