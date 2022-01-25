<template>
    <main>

        <StepIndicator :items="stepindicator" />

        <section>
            <form @submit.prevent="saveCustomerDetails">
                <h2 class="title">Gegevens</h2>
                
                <div class="input half">
                    <input name="firstName" type="text" :value="firstName">
                    <span>Voornaam *</span>
                </div>

                <div class="input half">
                    <input name="lastName" type="text" :value="lastName">
                    <span>Achternaam *</span>
                </div>

                <div class="input half">
                    <input name="streetName" type="text" :value="streetName">
                    <span>Straatnaam *</span>
                </div>

                <div class="input quarter">
                    <input name="streetNumber" type="number" :value="streetNumber">
                    <span>Huisnummer *</span>
                </div>

                <div class="input quarter">
                    <input name="addition" type="text" :value="addition">
                    <span>Toevoeging</span>
                </div>

                <div class="input half">
                    <input name="zipCode" type="text" :value="zipCode">
                    <span>Postcode *</span>
                </div>

                <div class="input half">
                    <input name="place" type="text" :value="place">
                    <span>Woonplaats *</span>
                </div>

                <div class="input">
                    <input name="country" value="Nederland" type="text" readonly class="filled">
                    <span>Land</span>
                </div>

                <div class="input">
                    <input name="email" type="text" :value="email">
                    <span>E-mailadres *</span>
                </div>

                <div class="input">
                    <input name="phoneNumber" type="text" :value="phoneNumber">
                    <span>Telefoonnummer</span>
                </div>              

                <button class="button-1" type="submit">Doorgaan</button>

            </form>

        </section>

    </main>
</template>

<script>

export default {

    computed: {
        firstName () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["firstName"];
            }
        },
        lastName () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["lastName"];
            }
        },
        streetName () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["streetName"];
            }
        },
        streetNumber () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["streetNumber"];
            }
        },
        addition () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["addition"];
            }
        },
        zipCode () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["zipCode"];
            }
        },
        place () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["place"];
            }
        },
        email () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["email"];
            }
        },
        phoneNumber () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["phoneNumber"];
            }
        },

        stepindicator() {
            return [
                {
                    label: "Gegevens",
                    page: true
                },
                {
                    label: "Verzending"
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

        async saveCustomerDetails () {

            const { 
                firstName, lastName, streetName, streetNumber, addition, zipCode, place, country, email, phoneNumber } = Object.fromEntries(
                new FormData(event.target)
            );
            const customerDetails = [{ firstName, lastName, streetName, streetNumber, addition, zipCode, place, country, email, phoneNumber }];

            this.$store.commit("saveCustomerDetails", customerDetails);
            this.$router.push("/winkelwagen/verzending");

        },

    },

    mounted: function () {

        const form = document.querySelector("form");
        const formChilds = document.querySelectorAll("form input");

        setTimeout(function() {
            formChilds.forEach((item) => {
                item.classList.remove("filled");

                if ( item.value ) {
                    item.classList.add("filled");
                } else {
                    item.classList.remove("filled");
                }  
            })
	    }, 300);

        form.addEventListener("input", () => {

            formChilds.forEach((item) => {
                item.classList.remove("filled");

                if ( item.value ) {
                    item.classList.add("filled");
                } else {
                    item.classList.remove("filled");
                }
                
            })
        })
    }  
}
</script>













<style scoped>

.title {
    width: 100%;
    border-bottom: 1px solid var(--clr-1-3);
    margin-bottom: 20px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}




</style>