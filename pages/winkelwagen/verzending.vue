<template>
    <main>

        <StepIndicator :items="stepindicator" />
        <section>
            <form @submit.prevent="saveShipping">
                <h2>Verzending</h2>

                <div class="shipping">
                    <input type="radio" id="shipping" name="shipping" :checked="shipping == null || shipping == 'Verzending via PostNL'" value="Verzending via PostNL">
                    <label for="shipping">Verzending via PostNL</label>
                </div>

                <div v-if="zipCode >= '8320' && zipCode < '8323' || zipCode >= '8280' && zipCode < '8282'" class="shipping">
                    <input type="radio" id="shippingFree" name="shipping" :checked="shipping == 'Gratis bezorging in Genemuiden en Urk'" value="Gratis bezorging in Genemuiden en Urk">
                    <label for="shippingFree">Gratis bezorging in Genemuiden en Urk</label>
                </div>
                
                <button class="button-1" type="submit">Doorgaan</button>
            </form>

            
            
        </section>
    </main>
</template>

<script>
export default {
    computed: {
        shipping () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0].shipping;
            }
        },

        zipCode () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0].zipCode
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
                    page: true
                },
                {
                    label: "Betaalwijze"
                },
                {
                    label: "Overzicht"
                }
            ]
        }
    },



    methods: {
        async saveShipping () {

            const { shipping } = Object.fromEntries(
                new FormData(event.target)
            );

            this.$store.commit("saveShipping", shipping);
            this.$router.push("/winkelwagen/betaalwijze");
        }
    }
}
</script>


<style scoped>

form {
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
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