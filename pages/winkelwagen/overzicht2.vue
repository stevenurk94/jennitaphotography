<template>
    <main>
        <StepIndicator :items="stepindicator" />
        <section>

            <div class="div1">
                <div class="div1__card">
                    <h2>Bezorgadres</h2>
                    <div>
                        <p>{{ firstName }} {{ lastName }}</p>
                        <p>{{ streetName }} {{ streetNumber }}</p>
                        <p>{{ zipCode }} {{ place }}</p>
                    </div>
                </div>

                <div class="div1__card">
                    <h2>Contactgegevens</h2>
                    <div>
                        <p>{{ email }}</p>
                        <p>{{ phoneNumber }}</p>
                    </div>
                </div>

                
                <div class="div1__card">
                    <h2>Verzending</h2>
                    <p>{{ shipping }}</p>
                </div>

                <div class="div1__card">
                    <h2>Betaalwijze</h2>
                    <div v-if="paymethod == 'ideal'" class="div2__card__paymethod">
                        <img src="~/assets/ideal-logo.svg" alt="">
                        <p>iDEAL</p>
                    </div>

                    <div v-if="paymethod == 'card'" class="div2__card__paymethod">
                        <img src="~/assets/creditcard-logo.svg" alt="">
                        <p>Creditcard</p>
                    </div>
                </div>

                <form @submit.prevent="betalen" class="div1__summary">

                    <div class="div1__summary__item">
                        <h3>Subtotaal</h3>
                        <h3>€ {{ cartTotal.toFixed(2).replace(".", ",") }}</h3>
                    </div>
                    <div class="div1__summary__item">
                        <h3>Verzending</h3>
                        <h3>€ {{ shippingLabel }}</h3>

                    </div>
                    <div class="div1__summary__item">
                        <h3>TOTAALPRIJS</h3>
                        <h3>€ {{ (cartTotal + shippingCosts).toFixed(2).replace(".", ",") }}</h3>
                    </div>
                    
                    <button type="submit" class="button-1">Afrekenen</button>
                </form>


            </div>
            <div class="div2">

                <div class="div2__cart">
                    <h2>Winkelwagen</h2>
                    <div class="items">
                        <div class="items__card" v-for="product in orderedproducts" :key="product.id" >
                            <div class="items__card__img">
                                <img :src="require(`~/assets/img${product.image2}`)" alt="">
                            </div>
                            <div class="items__card__info">
                                <div class="items__card__info__title">
                                    <h2>{{ product.name }}</h2>
                                    <h3>{{ product.category }}</h3>
                                </div>
                                <div class="items__card__info__options">
                                    <p>Aantal: {{ product.quantity }}</p>
                                    <p><strong>€ {{ (product.price * product.quantity).toFixed(2).replace(".", ",") }}</strong></p>
                                </div>                      
                            </div>
                        </div>
                    </div>

                </div>



            </div>

        </section>
    </main>
</template>



<script>

import _ from "lodash";


export default {

    methods: {

        async betalen () {

            await fetch("http://localhost:4242/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: this.$store.getters.cartItems.map(item => ({ "id" : item.id, "quantity" : item.quantity })),
                    customerdetails: this.$store.getters.customerDetails
                }),
            })

            .then(response => {
                if (response.ok) return response.json()
                return response.json().then(json => Promise.reject(json))
            })

            .then(({ url }) => {
                window.location = url
            }) 

            .catch(e => {
                console.log(e.error)
            })
        }
    }, 

    computed: {
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
                    url: "/winkelwagen/betaalwijze"
                },
                {
                    label: "Overzicht",
                    page: true
                }
            ]
        },

        products () {
            return this.$store.getters.cartItems
        },
        orderedproducts: function () {
            return _.orderBy(this.products, ["id"])
        },
        cartTotal () {
            return this.$store.getters.cartTotal
        },
        firstName () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].firstName;
            }
        },
        lastName () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].lastName;
            }
        },
        streetName () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].streetName;
            }
        },
        streetNumber () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].streetNumber;
            }
        },
        zipCode () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].zipCode;
            }
        },
        place () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].place;
            }
        },
        email () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].email;
            }
        },
        phoneNumber () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].phoneNumber;
            }
        },
        shipping () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].shipping;
            }
        },
        paymethod () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].paymethod;
            }
        },
        shippingCosts () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].shippingCosts;
            }
        },
        shippingLabel () {
            if (this.$store.getters.customerDetails[0]) {
                return this.$store.getters.customerDetails[0].shippingLabel
            }
        }
    },

    mounted: function () {
        const test = 5;
        console.log(test)

        console.log(test.toString(35),",00")
    }
}
</script>



<style scoped>

section {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
}

.div1 {
    width: 52%;
    margin-right: 45px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.div1__card {
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 10px;
}

.div1__card h2, .div2__cart > h2 {
    border-bottom: 1px solid #3a524db4;
    margin-bottom: 10px;
    padding-bottom: 8px;
}

.div2__cart {
    width: 100%;
}





.div2 {
    width: 45%;
}


.div2__card, .div2__summary {
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.div2__card__paymethod {
    display: flex;
    align-items: center;
}

.div2__card__paymethod img {
    height: 25px;
    margin-right: 15px;
    
}

.div2__card:not(form) > h2 {
    border-bottom: 1px solid #3a524db4;
    margin-bottom: 10px;
    padding-bottom: 8px ;
}



/* ########## SUMMARY ########## */

form.div1__summary {
    background: #3a524d65;
    position: sticky;
    top: 90px;
    padding: 15px;
}

.div1__summary__item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 7px;
    border-bottom: 1px solid #3a524db4;
}

.div1__summary button {
    margin-top: 25px;
    width: 100%;
}



.items {
    width: 100%;
}

.items__card {
    border-bottom: 1px dashed #3a524db4;
    padding: 30px 0px;
    display: flex;
}


/* ########## IMAGE ########## */

.items__card__img {
    border: 1px solid #3a524db4;
    border-radius: 5px;
    display: inherit;
    justify-content: center;
    align-items: center;
    height: 125px;
    width: 120px;
    /* width: 110px;
    height: 110px; */
    margin-right: 25px;
    padding: 5px;
    transition: all 300ms ease-in-out;
}

.items__card__img img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}


.items__card__info {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* ########## TITLE ########## */

.items__card__info__title h2 {
    font-family: 'IBM Plex Serif', serif;
    font-size: 25px;
    font-weight: 600;
}

.items__card__info__title h3 {
    text-transform: uppercase;
    color: #3A524D;
    font-size: 17px;
}

.items__card__info__options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 25px;
}





@media only screen and (max-width: 830px) {
    section {
        display: block;
        width: 95%;
    }

    .div1, .div2 {
        width: 100%;
        margin: 0;
    }
}


</style>