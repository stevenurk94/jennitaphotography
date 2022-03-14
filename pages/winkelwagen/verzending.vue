<template>
    <main>

        <PagepartsStepIndicator :items="stepindicator" />
        <section>
            <form @submit.prevent="saveShipping">
                <h2 class="title">Verzending</h2>

                <input type="radio" id="shipping" name="shipping" :checked="shipping == null || shipping == 'Verzending via PostNL'" value="Verzending via PostNL">
                <label class="radio" for="shipping">

                    <span class="radio__button"></span>
                    <p class="radio__text">Verzending via PostNL</p>

                </label>

                <input type="radio" id="shippingFree" name="shipping" :checked="shipping == 'Gratis bezorging in Genemuiden en Urk'" value="Gratis bezorging in Genemuiden en Urk" v-if="zipCode >= '8320' && zipCode < '8323' || zipCode >= '8280' && zipCode < '8282'">
                <label class="radio" for="shippingFree" v-if="zipCode >= '8320' && zipCode < '8323' || zipCode >= '8280' && zipCode < '8282'">

                    <span class="radio__button"></span>
                    <p class="radio__text">Gratis bezorging in Genemuiden en Urk</p>

                </label>
                
                <button class="button-1" type="submit">Doorgaan</button>
            </form>

            
            
        </section>
    </main>
</template>




<script>
export default {

    head () {
        return {
            title: "Verzending"
        }
    },
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
