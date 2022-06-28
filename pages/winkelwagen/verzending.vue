<template>
    <main>

        <PagepartsStepIndicator :items="stepindicator" />
        <section>
            <form name="checkout" @submit.prevent="saveShipping">
                <h2 class="title">Verzending</h2>

                <input type="radio" id="shipping" name="shipping" :checked="shipping == null || shipping == 'Verzending via PostNL'" value="Verzending via PostNL">
                <label class="radio" for="shipping">

                    <span class="radio__button"></span>
                    <p class="radio__text">Verzending via PostNL (1-3 werkdagen)</p>

                </label>

                <input type="radio" id="shippingFree" name="shipping" :checked="shipping == 'Gratis bezorging in Genemuiden en Urk'" value="Gratis bezorging in Genemuiden en Urk" v-if="zipCode >= '8320' && zipCode < '8323' || zipCode >= '8280' && zipCode < '8282'">
                <label class="radio" for="shippingFree" v-if="zipCode >= '8320' && zipCode < '8323' || zipCode >= '8280' && zipCode < '8282'">

                    <span class="radio__button"></span>
                    <p class="radio__text">Gratis bezorging in Genemuiden en Urk</p>

                </label>

                <!-- <input type="radio" id="shippingFree2" name="shipping" :checked="shipping == shippingLabel" :value="shippingLabel" v-if="shippingLabel">
                <label class="radio" for="shippingFree2" v-if="shippingLabel">
                    <span class="radio__button"></span>
                    <p class="radio__text"> {{ shippingLabel }}</p>
                </label> -->

                
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
        // shippingLabel () {
        //     if (this.$store.getters.formDetails[0]) {
        //         if ( this.$store.getters.formDetails[0].place.toLowerCase() == "urk" ) return "Gratis bezorging op Urk";
        //         else if ( this.$store.getters.formDetails[0].place.toLowerCase() == "genemuiden" ) return "Gratis bezorging in Genemuiden";
        //         else if ( this.$store.getters.formDetails[0].place.toLowerCase() == "ijsselmuiden" ) return "Gratis bezorging in IJsselmuiden";
        //         else if ( this.$store.getters.formDetails[0].place.toLowerCase() == "nunspeet" ) return "Gratis bezorging in Nunspeet";
        //         return false;
        //     }
        // },
        stepindicator() {
            return [
                {
                    label: "Gegevens",
                    url: "/winkelwagen/gegevens/"
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
            this.$router.push("/winkelwagen/betaalwijze/");
        },
        pageAuthentication () {
            if (!this.$store.state.cart.length) {
                this.$router.push("/kaarten/");
            } else {
                if (!this.$store.state.formDetails[0]) {
                    this.$router.push("/winkelwagen/gegevens/")
                }
            }
        },
    },



    mounted: function () {
        this.pageAuthentication();
        console.log(this.shippingLabel)
    }
}
</script>
