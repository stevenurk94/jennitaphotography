<template>
    <main>

        <PagepartsStepIndicator :items="stepindicator" />

        <section>
            <form name="checkout" @submit.prevent="saveCustomerDetails($event)">
                <h2 class="title">Gegevens</h2>
                
                <div class="input half">
                    <input 
                        name="firstName" 
                        type="text" 
                        :value="getField('firstName')" 
                        maxlength="20" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    <span class="input__label">Voornaam *</span>
                    <span class="input__error"></span>
                </div>

                <div class="input half">
                    <input 
                        name="lastName" 
                        type="text" 
                        :value="getField('lastName')" 
                        maxlength="20" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    <span class="input__label">Achternaam *</span>
                    <span class="input__error"></span>
                </div>

                <div class="input half">
                    <input 
                        name="streetName" 
                        type="text" 
                        :value="getField('streetName')" 
                        maxlength="150" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    <span class="input__label">Straatnaam *</span>
                    <span class="input__error"></span>
                </div>

                <div class="input quarter">
                    <input 
                        name="streetNumber" 
                        type="number" 
                        :value="getField('streetNumber')" 
                        maxlength="5" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    <span class="input__label">Huisnummer *</span>
                    <span class="input__error"></span>
                </div>

                <div class="input quarter">
                    <input 
                        name="addition" 
                        type="text" 
                        :value="getField('addition')" 
                        maxlength="20" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    <span class="input__label">Toevoeging</span>
                    <span class="input__error"></span>
                </div>

                <div class="input half">
                    <input 
                        name="zipCode" 
                        type="text" 
                        :value="getField('zipCode')" 
                        maxlength="7"
                        oninput="this.value=this.value.replace(/[^\dA-Z]/gi, '').replace(/(.{4})/g, '$1 ').trim().toUpperCase();">
                    <span class="input__label">Postcode *</span>
                    <span class="input__error"></span>
                </div>

                <div class="input half">
                    <input 
                        name="place" 
                        type="text" 
                        :value="getField('place')" 
                        maxlength="150" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    <span class="input__label">Woonplaats *</span>
                    <span class="input__error"></span>
                </div>

                <div class="input">
                    <input 
                        name="email" 
                        type="text" 
                        :value="getField('email')" 
                        maxlength="150" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    <!-- oninput="this.value=this.value.replace(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}*$/,'');" -->
                    <span class="input__label">Emailadres *</span>
                    <span class="input__error"></span>
                </div>

                <div class="input">
                    <input 
                        name="phoneNumber" 
                        type="number" 
                        :value="getField('phoneNumber')" 
                        maxlength="30" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                    <!-- oninput="this.value=this.value.replace(/[^0-9]*$/,'');" -->
                    <span class="input__label">Telefoonnummer</span>
                    <span class="input__error"></span>
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
        },
    },
    methods: {
        async saveCustomerDetails (event) {

            const firstName_input = document.querySelector("form .input input[name='firstName']");
            const lastName_input = document.querySelector("form .input input[name='lastName']");
            const streetName_input = document.querySelector("form .input input[name='streetName']");
            const streetNumber_input = document.querySelector("form .input input[name='streetNumber']");
            const addition_input = document.querySelector("form .input input[name='addition']");
            const zipCode_input = document.querySelector("form .input input[name='zipCode']");
            const place_input = document.querySelector("form .input input[name='place']");
            const email_input = document.querySelector("form .input input[name='email']");
            const phoneNumber_input = document.querySelector("form .input input[name='phoneNumber']");
            const { firstName, lastName, streetName, streetNumber, addition, zipCode, place, email, phoneNumber } = Object.fromEntries(new FormData(event.target));
            const customerDetails = [{ firstName, lastName, streetName, streetNumber, addition, zipCode, place, email, phoneNumber }];

            function setErrorFor(input, message) {
                input.classList.add("error");
                const formControl = input.parentElement;
                const input__error = formControl.querySelector(".input__error");
                input__error.innerText = message;
                input__error.style.display = "block";
            }
            function setSuccessFor(input) {
                input.className = "filled";
                const formControl = input.parentElement;
                const input__error = formControl.querySelector(".input__error");
                input__error.innerText = "";
                input__error.style.display = "none";
            }
            function isReg_1(input) {
                return /^([a-zA-Z0-9-' ])*$/.test(input);
            }
            function isReg_2(input) {
                return /^([0-9])*$/.test(input);
            }
            function isReg_3(input) {
                return /^[1-9][0-9]{3}[\s][A-Za-z]{2}$/.test(input);
            }
            function isEmail(email) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            }
            function checkFirstname () {
                if (customerDetails[0].firstName.trim() == "") {
                    setErrorFor(firstName_input, "");
                    return false;
                } else if (!isReg_1(customerDetails[0].firstName.trim())) {
                    setErrorFor(firstName_input, "Let op! Voer een geldige voornaam in");
                    return false;
                } else {
                    setSuccessFor(firstName_input);
                    return true;
                }
            }
            function checkLastname () {
                if (customerDetails[0].lastName.trim() == "") {
                    setErrorFor(lastName_input, "");
                    return false;
                } else if (!isReg_1(customerDetails[0].lastName.trim())) {
                    setErrorFor(lastName_input, "Let op! Voer een geldige achternaam in");
                    return false;
                } else {
                    setSuccessFor(lastName_input);
                    return true;
                }
            }
            function checkStreetname () {
                if (customerDetails[0].streetName.trim() == "") {
                    setErrorFor(streetName_input, "");
                    return false;
                } else if (!isReg_1(customerDetails[0].streetName.trim())) {
                    setErrorFor(streetName_input, "Let op! Voer een geldige straatnaam in");
                    return false;
                } else {
                    setSuccessFor(streetName_input);
                    return true;
                }
            }
            function checkStreetnumber () {
                if (customerDetails[0].streetNumber.trim() == "") {
                    setErrorFor(streetNumber_input, "");
                    return false;
                } else if (!isReg_2(customerDetails[0].streetNumber.trim())) {
                    setErrorFor(streetNumber_input, "Let op! Voer een geldig huisnummer in");
                    return false;
                } else {
                    setSuccessFor(streetNumber_input);
                    return true;
                }
            }
            function checkAddition () {
                if (!isReg_1(customerDetails[0].addition.trim())) {
                    setErrorFor(addition_input, "");
                    return false;
                } else {
                    setSuccessFor(addition_input);
                    return true;
                }
            }
            function checkZipcode () {
                if (customerDetails[0].zipCode.trim() == "") {
                    setErrorFor(zipCode_input, "");
                    return false;
                } else if (!isReg_3(customerDetails[0].zipCode.trim())) {
                    setErrorFor(zipCode_input, "Let op! Gebruik de volgende notatie: 1234 AA");
                    return false;
                } else {
                    setSuccessFor(zipCode_input);
                    return true;
                }
            }
            function checkPlace () {
                if (customerDetails[0].place.trim() == "") {
                    setErrorFor(place_input, "");
                    return false;
                } else if (!isReg_1(customerDetails[0].place.trim())) {
                    setErrorFor(place_input, "Let op! Voer een geldige plaatsnaam in");
                    return false;
                } else {
                    setSuccessFor(place_input);
                    return true;
                }
            }
            function checkEmail () {
                if (customerDetails[0].email.trim() == "") {
                    setErrorFor(email_input, "");
                    return false;
                } else if (!isEmail(customerDetails[0].email.trim())) {
                    setErrorFor(email_input, "Let op! Gebruik een geldig emailadres");
                    return false;
                } else {
                    setSuccessFor(email_input);
                    return true;
                }
            }
            function checkPhonenumber () {
                if (!isReg_2(customerDetails[0].phoneNumber.trim())) {
                    setErrorFor(phoneNumber_input, "Let op! Gebruik een geldig telefoonnummer");
                    return false;
                } else {
                    setSuccessFor(phoneNumber_input);
                    return true;
                }
            }
            function validateForm() {
                checkFirstname();
                checkLastname();
                checkStreetname();
                checkStreetnumber();
                checkAddition();
                checkZipcode();
                checkPlace();
                checkEmail();
                checkPhonenumber();
                if (!checkFirstname() || !checkLastname() || !checkStreetname() || !checkStreetnumber() || !checkAddition() || !checkZipcode() || !checkPlace() || !checkEmail() || !checkPhonenumber()) {
                    return false;
                } else {
                    return true;
                }
            }
            validateForm();
            if (!validateForm()) {
                event.preventDefault();
            } else {
                this.$store.commit("saveCustomerDetails", customerDetails);
                this.$router.push("/winkelwagen/verzending/");
            }
        },

        getField ( field ) {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0][field];
            }
        },

        pageAuthentication () {
            if (!this.$store.state.cart.length) {
                this.$router.push("/kaarten/");
            }
        },
    },
    mounted () {
        this.pageAuthentication();
        
        const form = document.querySelector("form");
        const formChilds = document.querySelectorAll("form input");

        function filled () {
            formChilds.forEach((item) => {
                item.classList.remove("filled");

                if ( item.value ) {
                    item.classList.add("filled");
                } else {
                    item.classList.remove("filled");
                }  
            })
        }
        setTimeout(function() {
            filled();
	    }, 300);

        form.addEventListener("input", () => {
            filled();
        });

    }  
}
</script>


<style scoped>
.input__error {
    display: none;
}
</style>




