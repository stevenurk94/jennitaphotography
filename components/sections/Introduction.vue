<template>
    <section>
        <div>
            <div>
                <picture>
                    <source
                        type="image/webp"
                        sizes="
                            (max-width: 320px) 160px,
                            (min-width: 320px) and (max-width: 520px) 320px,
                            (min-width: 520px) 640px"
                        srcset="
                            ~/assets/intro_picture/webp_2_160.webp 160w,
                            ~/assets/intro_picture/webp_2_320.webp 320w,
                            ~/assets/intro_picture/webp_2_640.webp 640w">
                    <source
                        type="image/jpeg"
                        sizes="
                            (max-width: 320px) 160px,
                            (min-width: 320px) and (max-width: 520px) 320px,
                            (min-width: 520px 640px"
                        srcset="
                            ~/assets/intro_picture/jpg_2_160.jpeg 160w,
                            ~/assets/intro_picture/jpg_2_320.jpeg 320w,
                            ~/assets/intro_picture/jpg_2_640.jpeg 640w">
                    <img src="~/assets/intro_picture/jpg_2_640.jpeg" alt="Foto Jennita">
                </picture>
                <div>
                    <h1>Even voorstellen...</h1>
                    <p>Heeey, welkom!</p>
                    <p>Leuk dat je een kijkje neemt op mijn website. Ik ben Jennita Altena en ik verkoop sinds 2021 mijn eigen fotokaarten. Van deze opbrengst gaat 25% naar het goede doel 'Kom over en help'.</p>
                    <p>'Kom over en help' steunen mensen die in kwetsbare omstandigheden leven. Door middel van mijn kaartenverkoop wil ik daar graag een steentje aan bijdragen. Mede doordat wij in Nederland zo rijk gezegend zijn met het vele wat wij mogen ontvangen en wat juist deze mensen moeten missen.</p>
                    <p>Door jouw bestelling te plaatsen, help jij ook deze mensen.</p>
                    <p>Zie ik jou?</p>
                    <p>Groetjes, Jennita</p>
                    
                    <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bestellen</NuxtLink>

                </div>               
                



            </div>
            
        </div>


        <!-- <div>
            <div>
                <p>Heee, welkom!</p>
                <p>Leuk dat je een kijkje neemt op mijn site.</p>
                <p>Ik ben Jennita Altena en verkoop mijn eigen fotokaarten sinds 2021. Met deze kaartenverkoop gaat 25% naar het goede doel 'Kom over en help'.</p>
                <p>'Kom over en help' steunen mensen die in kwetsbare omstandigheden leven en door middel van mijn kaartenverkoop wil ik daar graag een steentje aan bijdragen. Want hoe rijk zijn wij in Nederland gezegend met dat wat wij allemaal mogen ontvangen in tegenstelling tot wat deze mensen moeten missen…?!</p>
                <p>Door jouw bestelling te plaatsen, help je deze mensen.</p>
                <p>Zie ik jou?</p>
                <p>Liefs, Jennita</p>
                <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bestellen</NuxtLink>
            </div>
            <img src="~/assets/home-picture.jpg" alt="">
        </div> -->
    </section>
</template>

<style scoped>

section {
    margin: 50px 0;
    padding: 50px 0;
    background-color: var(--clr-1-3);
    max-width: 100%;
    width: 100%;
}

section > div {
    max-width: var(--website-width);
    left: 0;
    right: 0;
    margin: auto;
    width: 95%;
}

section > div > div {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 40px 0;
}

section > div > div > div {
    width: 100%;
}


/* ########## INTRODUCTION TITLE ########## */

section > div > div > div h1 {
    color: var(--clr-1-1);
    margin-bottom: 50px;
    position: relative;
    width: fit-content;
}

section > div > div > div h1::after {
    content: "";
    position: absolute;
    border-radius: var(--border-radius);
    width: 40%;
    height: 2.5px;
    background-color: var(--clr-1-2);
    bottom: -10px;
    right: 0;
    left: 0;
}

section > div > div > div p {
    width: 100%;
    margin-bottom: 10px;
}

section > div > div > div a {
    margin-top: 40px;
}


/* ########## INTRODUCTION IMAGE ########## */
section > div > div picture {
    width: 40%;
    height: 100%;
    margin-right: 100px;
}


section > div > div img {
    width: 100%;
    object-fit: cover;
} 




</style>