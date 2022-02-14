<template>
    <section>
        <div>
            <img src="~/assets/img/kaart0018.jpeg" alt="">
            <img src="~/assets/img/kaart0019.jpeg" alt="">
            <img src="~/assets/img/kaart0016.jpeg" alt="">
            <img src="~/assets/img/kaart0014.jpeg" alt="">
            <img src="~/assets/img/kaart0018.jpeg" alt="">
        </div>
    </section>

</template>


<style scoped>

section {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
}

div {
    width: 500%;
    height: 100%;
    position: relative;
    margin: 0;
    left: 0;
    animation: slider 40s infinite;

}

div img {
    width: 20%;
    height: 100%;
    float: left;
    object-position: bottom;
    object-fit: cover;

}

@keyframes slider {
    0% {
        left: 0;
    }
    20% {
        left: 0;
    }
    25% {
        left: -100%;
    }
    45% {
        left: -100%;
    }
    50% {
        left: -200%;
    }
    70% {
        left: -200%;
    }
    75% {
        left: -300%;
    }
    95% {
        left: -300%;
    }
    100% {
        left: -400%;
    }
}

</style>

