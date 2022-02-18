<template>
    <main>
        <section>
            <h1>Ooeps... 404</h1>
            <h2>De pagina die je probeert te bereiken is momenteel niet beschikbaar</h2>
            <NuxtLink to="/kaarten" class="button-1">Terug naar de webshop</NuxtLink>
        </section>
    </main>
</template>

<style scoped>
section {
    margin: 100px 0 0 0;
}

section h1 {
    text-transform: uppercase;
    font-size: 60px;
}

section h2 {
    margin: 10px 0 50px 0;
}


@media only screen and (max-width: 767px) {
    section {
        margin: 60px 0 0 0;
    }

    section h1 {
        font-size: calc(40px);
    }

    section h2 {
        margin: 0 0 50px 0;
    }
}

</style>