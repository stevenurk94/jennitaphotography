<template>
    <main>
        <section>

            <div class="StepIndicatorItems">
                <span class="active">Gegevens</span>
                <span>Verzending</span>
                <span>Betaalwijze</span>
                <span>Overzicht</span>
            </div>

            <div class="StepIndicator">
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
            </div>


            <form @submit.prevent="saveCustomerDetails">
                <h1>Gegevens</h1>

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

main {
    padding-top: 150px;
}

form {
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

form > input {
    height: 30px;
    width: 100%;
    margin: 10px 0px;
}










/* StepIndicatorItems */

.StepIndicatorItems {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.StepIndicatorItems span, .StepIndicatorItems a {
    width: 25%;
    text-align: center;
}

.StepIndicatorItems span {
    color: #979797;
}

.StepIndicatorItems .active {
    font-weight: bold;
    color: black;
}

.StepIndicatorItems a {
    text-decoration: underline;
}





/* Step Indicator's */

.StepIndicator {
    counter-reset: step;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.StepIndicator span {
    position: relative;
    width: 25%;
    text-align: center;
}

.StepIndicator span::before {
    content: "";
    counter-increment: step;
    width: 25px;
    height: 25px;
    border: 4px solid #bebebe;
    display: block;
    margin: 0 auto 0 auto;
    border-radius: 50%;
    color: #bebebe;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.StepIndicator span::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: #979797;
    top: 47%;
    bottom: 52%;
    left: -50%;
    z-index: -1;
}

.StepIndicator span:first-child::after {
    content: none;
}



.StepIndicator span.completed::before {
    content: "✓";
    border-color: #3A524D;
    background: #3A524D;
    color: white;
    font-weight: bold;
    font-size: 15px;
}

.StepIndicator span.active::before {
    background: white;
    color: #bebebe;
    animation: bc 1.5s;
    border-color: #3A524D;
    color: #3A524D;

}

.StepIndicator span.active::after {
    background: #3A524D;
    animation: bg 1s;
}

.StepIndicator span.completed::after {
    background: #3A524D;
}



@keyframes bc {
    from { 
        border-color: #bebebe;
    }

    to { 
        border-color: #3A524D;
    }
}



@keyframes bg {
    from { 
        background-color: #979797;
    }

    to { 
        background-color: #3A524D;
    }
}




</style>