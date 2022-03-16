<template>
    <main>

        <PagepartsStepIndicator :items="stepindicator" />

        <section>
            <form @submit.prevent="saveCustomerDetails">
                <h2 class="title">Gegevens</h2>
                
                <div class="input half">
                    <input name="firstName" type="text" :value="firstName">
                    <!-- oninput="this.value=this.value.replace(/[^a-zA-Z-]*$/,'');" -->
                    <span class="input__label">Voornaam *</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input half">
                    <input name="lastName" type="text" :value="lastName">
                    <!-- oninput="this.value=this.value.replace(/[^a-zA-Z-]*$/,'');" -->
                    <span class="input__label">Achternaam *</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input half">
                    <input name="streetName" type="text" :value="streetName">
                    <!-- oninput="this.value=this.value.replace(/[^a-zA-Z-]*$/,'');" -->
                    <span class="input__label">Straatnaam *</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input quarter">
                    <input name="streetNumber" type="number" :value="streetNumber" oninput="this.value=this.value.replace(/[^0-9]{2,5}*$/,'');">
                    <!-- oninput="this.value=this.value.replace(/[^0-9]*$/,'');" -->
                    <span class="input__label">Huisnummer *</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input quarter">
                    <input name="addition" type="text" :value="addition">
                    <!-- oninput="this.value=this.value.replace(/[^a-zA-Z0-9- ]*$/,'');" -->
                    <span class="input__label">Toevoeging</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input half">
                    <input name="zipCode" type="text" :value="zipCode" >
                    <!-- oninput="this.value=this.value.replace(/[^a-zA-Z0-9- ]*$/,'');" -->
                    <span class="input__label">Postcode *</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input half">
                    <input name="place" type="text" :value="place">
                    <!-- oninput="this.value=this.value.replace(/[^a-zA-Z-]*$/,'');" -->
                    <span class="input__label">Woonplaats *</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input">
                    <input name="country" value="Nederland" type="text" readonly class="filled">
                    <!-- oninput="this.value=this.value.replace(/[^a-zA-Z-]*$/,'');" -->
                    <span class="input__label">Land</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input">
                    <input name="email" type="text" :value="email" >
                    <!-- oninput="this.value=this.value.replace(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}*$/,'');" -->
                    <span class="input__label">E-mailadres *</span>
                    <span class="input__error">Error</span>
                </div>

                <div class="input">
                    <input name="phoneNumber" type="text" :value="phoneNumber">
                    <!-- oninput="this.value=this.value.replace(/[^0-9]*$/,'');" -->
                    <span class="input__label">Telefoonnummer</span>
                    <span class="input__error">Error</span>
                </div>              
                <button class="button-1" type="submit">Doorgaan</button>
            </form>

        </section>

    </main>
</template>

<script>

export default {
    head () {
        return {
            title: "Gegevens"
        }
    },
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

        async setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector(".input__error");
            formControl.className = 'form-control error';
            small.innerText = message;
        },
        async saveCustomerDetails () {

            const { 
                firstName, lastName, streetName, streetNumber, addition, zipCode, place, country, email, phoneNumber } = Object.fromEntries(
                new FormData(event.target)
            );
            const customerDetails = [{ firstName, lastName, streetName, streetNumber, addition, zipCode, place, country, email, phoneNumber }];


            if (customerDetails[0].firstName == "") {
                setErrorFor(customerDetails[0].firstName, "Voornaam kan niet leeg zijn");
            } 
            if (customerDetails[0].lastName == "") {
                setErrorFor(customerDetails[0].lastName, "Achternaam kan niet leeg zijn");
            } 
            if (customerDetails[0].streetName == "") {
                setErrorFor(customerDetails[0].streetName, "Straatnaam kan niet leeg zijn");
            } 
            if (customerDetails[0].streetNumber == "") {
                setErrorFor(customerDetails[0].streetNumber, "streetNumber kan niet leeg zijn");
            } 
            if (customerDetails[0].addition == "") {
                setErrorFor(customerDetails[0].addition, "addition kan niet leeg zijn");
            } 
            if (customerDetails[0].zipCode == "") {
                setErrorFor(customerDetails[0].zipCode, "zipCode kan niet leeg zijn");
            } 
            if (customerDetails[0].place == "") {
                setErrorFor(customerDetails[0].place, "place kan niet leeg zijn");
            } 
            if (customerDetails[0].email == "") {
                setErrorFor(customerDetails[0].email, "email kan niet leeg zijn");
            } 
            if (customerDetails[0].phoneNumber == "") {
                setErrorFor(customerDetails[0].phoneNumber, "phoneNumber kan niet leeg zijn");
            }
            

            else {
                this.$store.commit("saveCustomerDetails", customerDetails);
                this.$router.push("/winkelwagen/verzending");
            }







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




