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

            <!-- <div class="summary">
                <h2>Winkelwagen</h2>
                <button class="button-1">Doorgaan</button>

            </div> -->

        </section>






        <!-- <section>
            <div class="container">
                <div class="card">
                    <form class="card-form">
                        <div class="input">
                            <input type="text" class="input-field" required/>
                            <label class="input-label">Full name</label>
                        </div>
                                    <div class="input">
                            <input type="text" class="input-field" required/>
                            <label class="input-label">Email</label>
                        </div>
                                    <div class="input">
                            <input type="password" class="input-field" required/>
                            <label class="input-label">Password</label>
                        </div>
                        <div class="action">
                            <button class="action-button">Get started</button>
                        </div>
                    </form>
                    <div class="card-info">
                        <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
                    </div>
                </div>
            </div>

        </section> -->
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













<style>

/* main {
    background: #f0f2f5;
    background: #f8fbfe;
    z-index: -999;
} */

.title {
    width: 100%;
    border-bottom: 1px solid #3a524d4f;
    margin-bottom: 20px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;   
}

form {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    left: 0;
    right: 0;
    margin: auto;
}

form .input {
    margin: 10px 0px;
    position: relative;
    width: 100%;
}

form .input.half {
    width: calc(50% - 10px);
}

form .input.quarter {
    width: calc(25% - 10px);
}

form .input:nth-child(2), form .input:nth-child(4), form .input:nth-child(7) {
    margin-right: 20px;
}

form .input:nth-child(5) {
    margin-right: 10px;
}

form .input:nth-child(11) {
    margin-bottom: 40px;
}


form .input input {
    border-radius: 5px;
    border: 1px solid #999;
    padding: 13px 15px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    width: 100%;
    transition: all 300ms ease-in-out;
}


form .input span {
    position: absolute;
    left: 15px;
    top: 15px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    background: white;
    color: #555;
    transition: all 300ms ease-in-out;
    transform-origin: bottom left;
    pointer-events: none;
}


form .input input:hover, form .input input:focus, form .input input.filled {
    border: 1.1px solid #3A524D;
}

form .input input:focus ~ span, form .input input.filled ~ span {
    transform: scale(.75) translate(-3px, -36px);
    padding: 2px 5px;
    color: #3A524D;
    border-radius: 10px;
}



@media only screen and (max-width: 700px) {
    form .input.half, form .input.quarter {
        width: 100%;
        margin-right: 0;
    }
}



/* RADIO BUTTONS */


form input[type="radio"] {
    display: none;
}

form .radio {
    cursor: pointer;
    padding: 13px 15px;
    width: 100%;
    margin: 10px 0px;
    border: 1.4px solid #999;
    border-radius: 5px;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 300ms ease-in-out;
}

form .radio__button {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 1.5px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
}


form .radio__button::before {
    content: "";
    width: 11px;
    height: 11px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
}

form input[type="radio"]:checked + .radio .radio__button::before {
    background: #3A524D;
}

form input[type="radio"]:checked + .radio {
    border: 1.4px solid #3A524D;
}

.radio__text {
    margin-left: 25px;
    font-size: 15px;
}

.radio__img {
    height: 20px;
    position: absolute;
    right: 15px;
}

.radio__img.creditcard {
    right: 18.5px;
}



/* 
.summary {
    width: 33%;
    border-radius: 5px;
    padding: 30px;
    height: fit-content;
    border: 1px solid #3a524db4;
} */

</style>