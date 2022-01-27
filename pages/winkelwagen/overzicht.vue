<template>
    <main>
        <StepIndicator :items="stepindicator" />
        <section class="div1">

            
            <form @submit.prevent="betalen" class="div1__checkout">
                <h2 class="title">Overzicht</h2>                
                <button type="submit" class="button-1">Bestellen en betalen</button>
            </form>

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
                <div v-if="paymethod == 'ideal'" class="div1__card__paymethod">
                    <img src="~/assets/ideal-logo.svg" alt="">
                    <p>iDEAL</p>
                </div>

                <div v-if="paymethod == 'card'" class="div1__card__paymethod">
                    <img src="~/assets/creditcard-logo.svg" alt="">
                    <p>Creditcard</p>
                </div>
            </div>

            <div class="div1__cart">
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

            <form @submit.prevent="betalen" class="div1__summary">

                <div class="div1__summary__item">
                    <h3>Verzending</h3>
                    <h3>€ {{ shippingLabel }}</h3>

                </div>
                <div class="div1__summary__item">
                    <h3>TOTAALPRIJS</h3>
                    <h3>€ {{ (cartTotal + shippingCosts).toFixed(2).replace(".", ",") }}</h3>
                </div>
                
                <button type="submit" class="button-1">Bestellen en betalen</button>
            </form>



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
}
</script>



<style scoped>

section {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
}

.div1__card {
    width: calc(50% - 20px);
    margin-bottom: 20px;
    padding-bottom: 10px;
}

.div1__card:nth-child(2n + 2) {
    margin-right: 40px;
}

.div1__card > h2, .div1__cart > h2 {
    padding-bottom: 5px;
    font-size: 21px;
}

.div1__cart {
    width: 100%;
    margin: 10px 0px 30px 0px;
}


.div2__card, .div2__summary {
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.div1__card__paymethod {
    display: flex;
    align-items: center;
}

.div1__card__paymethod img {
    height: 25px;
    margin-right: 15px;
    
}



/* ########## TITLE BUTTON ########## */

form.div1__checkout {
    position: relative;
    margin: 15px 0;
}

.div1__checkout button {
    position: absolute;
    right: 0;
    top: -23px;
}


/* ########## SUMMARY ########## */

form.div1__summary {
    background: var(--clr-1-3);
    position: sticky;
    top: 90px;
    padding: 30px;
    width: 55%; 
    right: 0;
    left: 100%;
    border-radius: var(--border-radius);
}

.div1__summary__item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 18px 0 15px;
}

.div1__summary__item:first-child {
    border-bottom: 1px solid var(--clr-1-2);
    padding-top: 3px;
}

.div1__summary button {
    width: 100%;
    margin-top: 10px;
}





/* ########## CART ITEMS ########## */

.items {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
}

.items__card {
    border-bottom: 1px dashed var(--clr-1-2);
    padding: 20px 0px;
    display: flex;
    width: 100%;
}



/* ########## IMAGE ########## */

.items__card__img {
    border: 1px solid var(--clr-1-2);
    border-radius: var(--border-radius);
    display: inherit;
    justify-content: center;
    align-items: center;
    height: 98px;
    width: 80px;
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
    justify-content: center;
}

/* ########## TITLE ########## */

.items__card__info__title {
    margin-bottom: 6px;

}

.items__card__info__title h2 {
    font-family: 'IBM Plex Serif', serif;
    font-size: 19px;
    font-weight: 600;
    padding-bottom: 1px;
}

.items__card__info__title h3 {
    text-transform: uppercase;
    color: var(--clr-3-2);
    font-size: 11px;
}

.items__card__info__options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 4px;
}

.items__card__info__options p {
    font-size: 15px;
}



@media only screen and (max-width: 750px) {
    section.div1 {
        display: block;
        width: 95%;
    }

    form.div1__summary, .div1__card {
        width: 100%;
        margin: 10px 0px;
    }

    form.div1__checkout button {
        position: relative;
        margin: 25px 0px;
        width: 100%;
    }
}


</style>