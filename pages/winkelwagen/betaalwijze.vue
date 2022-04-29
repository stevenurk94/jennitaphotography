<template>
    <main>

        <PagepartsStepIndicator :items="stepindicator" />
        
        <section>
            
            
            <form @submit.prevent="savePaymethod">
                <p class="message orange">Er ging iets fout met betalen, probeer het opnieuw</p>
                

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

    head () {
        return {
            title: "Betaalwijze"
        }
    },

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
            const { paymethod } = Object.fromEntries(new FormData(event.target));
            this.$store.commit("savePaymethod", paymethod);
            this.$router.push("/winkelwagen/overzicht");
        },
        pageAuthentication () {
            if (!this.$store.state.cart.length) {
                this.$router.push("/kaarten");
            } else {
                if (this.$store.state.formDetails[0]) {
                    if (!this.$store.state.formDetails[0].shipping) {
                        this.$router.push("/winkelwagen/verzending")
                    }
                } else {
                    this.$router.push("/winkelwagen/gegevens")
                }
            }
        },
    },

    mounted: function () {
        if (new URLSearchParams(window.location.search).get("cancel") == "true") {
            document.querySelector("section p.message.orange").style.display = "block";
        }
        this.pageAuthentication();
    }
}

</script>


<style scoped>
section p.message.orange {
    display: none;
    width: 100%;
    padding: 7px 15px;
    margin: 5px 0 35px 0;
}

</style>