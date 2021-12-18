<template>
    <main>

        <StepIndicator :items="stepindicator" />
        <section>
            <form @submit.prevent="saveCustomerDetails">
                <h2>Gegevens</h2>
                <input placeholder="voornaam" name="firstName" type="text" :value="firstName">
                <input placeholder="achternaam" name="lastName" type="text" :value="lastName">
                <input placeholder="straatnaam" name="streetName" type="text" :value="streetName">
                <input placeholder="huisnummer" name="streetNumber" type="number" :value="streetNumber">
                <input placeholder="toevoeging" name="addition" type="text" :value="addition">
                <input placeholder="postcode" name="zipCode" type="text" :value="zipCode">
                <input placeholder="woonplaats" name="place" type="text" :value="place">
                <input placeholder="Land" name="country" value="Nederland (neem voor verzending naar buitenland via mail contact op)" type="text" readonly>
                <label for="country"></label>
                <input placeholder="emailadres" name="email" type="text" :value="email">
                <input placeholder="telefoonnummer" name="phoneNumber" type="text" :value="phoneNumber">

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

</style>