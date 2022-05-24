<template>
    <section class="empty">
        <h1>Je hebt geen fotokaarten in je winkelwagen</h1>
        <NuxtLink class="button-1" to="/kaarten/">Verder winkelen</NuxtLink>
    </section>
</template>



<style scoped>

.empty {
    margin-top: 10px;
    display: block;
}


h1 {
    margin-bottom: 50px;
}

@media only screen and (max-width: 767px) {
    h1 {
        font-size: calc(17px + 1vmax);
    }
}
</style>