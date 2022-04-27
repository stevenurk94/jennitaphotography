<template>
    <section>
        <div>
            <h1>Prachtige fotokaarten</h1>
        </div>
        
        <div>
            <!-- <NuxtLink to="/kaarten/1">
                <img src="~/static/img/jpeg/1024/kaart0001.jpeg" alt="">
            </NuxtLink>
            <NuxtLink to="/kaarten/16">
                <img src="~/static/img/jpeg/1024/kaart0016.jpeg" alt="">
            </NuxtLink>
            <NuxtLink to="/kaarten/2">
                <img src="~/static/img/jpeg/1024/kaart0002.jpeg" alt="">
            </NuxtLink>
            <NuxtLink to="/kaarten/3">
                <img src="~/static/img/jpeg/1024/kaart0003.jpeg" alt="">
            </NuxtLink>
            <NuxtLink to="/kaarten/18">
                <img src="~/static/img/jpeg/1024/kaart0018.jpeg" alt="">
            </NuxtLink>
            <NuxtLink to="/kaarten/5">
                <img src="~/static/img/jpeg/1024/kaart0005.jpeg" alt="">
            </NuxtLink>
            <NuxtLink to="/kaarten/4">
                <img src="~/static/img/jpeg/1024/kaart0014.jpeg" alt="">
            </NuxtLink> -->
        </div>
    </section>
</template>





<style scoped>

section {
    background: var(--clr-1-3);
    width: 100%;
    max-width: 100%;
    padding: 80px 0;

}

div:first-child {
    left: 0;
    right: 0;
    margin: 0 auto 50px auto;
    width: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
}




div:nth-child(2) {
    max-width: var(--website-width);
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    right: 0;
    left: 0;
    margin: auto;
    max-width: 95%;
}

a {
    border-radius: var(--border-radius);
    max-height: 300px;
    object-fit: cover;
    overflow: hidden;
    transition: all 300ms ease-in-out;
}

a:nth-child(2), a:nth-child(5), a:nth-child(7) {
    grid-column: span 2;
}

a:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transform: scale(1.03);
}

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}



@media only screen and (max-width: 1200px) {

    a:nth-child(5) {
        grid-column: span 1;
    }

   

    div:nth-child(2) {
        grid-template-columns: repeat(3, 1fr);
    }

}

@media only screen and (max-width: 520px) {
  

    div:nth-child(2) {
        grid-template-columns: repeat(2, 1fr);
    }

    a:nth-child(2){
        grid-column: span 1;
    }

    a:nth-child(5), a:nth-child(6)  {
        grid-column: span 2;
    }


}

</style>