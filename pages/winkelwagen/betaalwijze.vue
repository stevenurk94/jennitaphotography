<template>
    <main>

        <StepIndicator :items="stepindicator" />
        <section>
            <form @submit.prevent="savePaymethod">

                <h2 class="title">Betaalwijze</h2>
                <input type="radio" id="ideal" name="paymethod" :checked="paymethod == null || paymethod == 'ideal'" value="ideal">
                <label class="radio" for="ideal">

                    <span class="radio__button"></span>
                    <p class="radio__text">iDEAL</p>
                    <img class="radio__img" src="~/assets/ideal-logo.svg" alt="">

                </label>

                <input type="radio" id="card" name="paymethod" :checked="paymethod == 'card'" value="card">
                <label class="radio" for="card">
                    
                    <span class="radio__button"></span>
                    <p class="radio__text">Creditcard</p>
                    <img class="radio__img creditcard" src="~/assets/creditcard-logo.svg" alt="">

                </label>

                <button class="button-1" type="submit">Doorgaan</button>

            </form>

            
        </section>
    </main>
</template>

<script>

export default {

    computed: {
        paymethod () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["paymethod"];
            }
        },

        stepindicator() {
            return [
                {
                    label: "Gegevens",
                    url: "/winkelwagen/gegevens"
                },
                {
                    label: "Verzending",
                    url: "/winkelwagen/verzending"
                },
                {
                    label: "Betaalwijze",
                    page: true
                },
                {
                    label: "Overzicht"
                }
            ]
        }

    },
    
    
    methods: {

        async savePaymethod () {

            const { paymethod } = Object.fromEntries(
                new FormData(event.target)
            );

            this.$store.commit("savePaymethod", paymethod);
            this.$router.push("/winkelwagen/overzicht");            
        },
    }, 
}

</script>






