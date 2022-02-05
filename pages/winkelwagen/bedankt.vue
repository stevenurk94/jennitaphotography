<template>
    <main>
        <section>
            <div>
                <h1>Gelukt Steven!</h1>
                <h2>Bedankt voor je bestelling, we gaan direct voor je aan de slag.</h2>
                <!-- <p>Je bestelling is geslaagd. De bestelbevestiging is verstuurd naar stevenurk94@hotmail.com.</p> -->
            </div>



        </section>
        <section>
            <p>Steven van Middendorp</p>
            <p>Kooizand 18</p>
            <p>8321ZG Urk</p>
        </section>
    </main>
</template>




<style scoped>

section:first-child {
    margin: 12px 0 0 0; 
    background: var(--clr-1-3);
    max-width: 100%;
    width: 100%;
    padding: 50px 0;
}

section:not(:first-child) {
    max-width: 800px;
}


section:first-child div {
    max-width: 800px;
    left: 0;
    right: 0;
    margin: auto;
}

section:not(:first-child) {
    margin: 50px 0 0 0;
}

h1 {
    color: var(--clr-1-1);
    font-size: 42px;
    margin-bottom: 5px;
}


</style>