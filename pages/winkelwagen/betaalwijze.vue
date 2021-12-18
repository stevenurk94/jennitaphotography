<template>
    <main>

        <StepIndicator :items="stepindicator" />
        <section>
            <form @submit.prevent="savePaymethod">

                <h2>Betaalwijze</h2>
                <div class="paymethod">
                    <input type="radio" id="ideal" name="paymethod" :checked="paymethod == null || paymethod == 'ideal'" value="ideal">
                    <label for="ideal">Ideal</label>
                </div>
                <div class="paymethod">
                    <input type="radio" id="card" name="paymethod" :checked="paymethod == 'card'" value="card">
                    <label for="card">Creditcard</label>
                </div>

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








<style scoped>


form {
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    right: 0;
    left: 0;
    margin: auto;
}

form > input {
    height: 30px;
    width: 100%;
    margin: 10px 0px;
}

.shipping {
    display: flex;
}



</style>