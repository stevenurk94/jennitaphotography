<template>
    <main>
        <section>
            <h1>Gelukt Steven!</h1>
            <h2>Bedankt voor je bestelling, we gaan direct voor je aan de slag.</h2>

            <h2>Hoe nu verder?</h2>
            <div class="item">
                <h2>1. Bevestiging</h2>
                <p>We hebben een bevestiging van je bestelling gestuurd naar <b>stevenurk94@hotmail.com</b>.</p> 
            </div>
            <div class="item">
                <h2>2. Verzending</h2>
                <p>We gaan je bestelling zo snel mogelijk inpakken en verzenden met <b>Postnl</b>.</p>
            </div>
            <div class="item">
                <h2>3. Bezorging</h2>
                <p>Je artikelen worden bezorgd op <b>Kooizand 18, 8321ZG Urk</b>. Houd je deurbel, brievenbus of inbox in de gaten.</p>
            </div>
            <div class="item">
                <h2>Heb je nog vragen?</h2>
                <p>We helpen je graag met al je vragen. Neem daarvoor per mail <a href="mailto:info@jennitaphotography.nl">contact</a> met ons op.</p>
            </div>
        </section>
    </main>
</template>




<style scoped>

main {
    background: var(--clr-1-3);
}

section {
    left: 0;
    right: 0;
    margin: 90px auto auto auto;
    z-index: 2;
    padding: 40px 60px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: white;
    border-radius: var(--border-radius);
    max-width: 800px;
}

section h1 {
    color: var(--clr-1-1);
    font-size: 38px;
    margin-bottom: 5px;
}

section > h2:first-of-type {
    margin-bottom: 30px;
}

section > h2:nth-of-type(2) {
    font-style: italic;
}

.item {
    margin: 20px 0;
    border-radius: var(--border-radius);
    background: var(--clr-1-3);
    padding: 15px 18px;
}

.item h2 {
    font-size: 19px;
}

.item p {
    font-size: 15px;
}

.item a {
    width: fit-content;
    text-decoration: underline;
    color: var(--clr-1-1);
}

</style>