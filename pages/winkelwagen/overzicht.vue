<template>
    <main>
        <PagepartsStepIndicator :items="stepindicator" />

        

        <section class="overview">
            <div class="overview__errors" v-if="errors.length">
                <p v-for="error in errors" :key="error.id" class="message orange">{{ error.message }}<IconsCross @click="closeError"/></p>
            </div>
            
            <form @submit.prevent="betalen" class="overview__checkout">
                <h2 class="title">Overzicht</h2>                
                <button type="submit" class="button-1" :class="loading ? 'disabled' : ''">Bestellen en betalen<IconsButtonLoading v-if="loading" /></button>
            </form>

            <div class="overview__card">

                <div class="overview__card__title">
                    <h2>Bezorgadres</h2>
                    <NuxtLink to="/winkelwagen/gegevens">
                        <IconsPen />
                    </NuxtLink>
                </div>
                


                <div>
                    <p>{{ getField('firstName') }} {{ getField('lastName') }}</p>
                    <p>{{ getField('streetName') }} {{ getField('streetNumber') }}</p>
                    <p>{{ getField('zipCode') }} {{ getField('place') }}</p>
                </div>
            </div>

            <div class="overview__card">
                <div class="overview__card__title">
                    <h2>Contactgegevens</h2>
                    <NuxtLink to="/winkelwagen/gegevens">
                        <IconsPen />
                    </NuxtLink>
                </div>
                
                <div>
                    <p>{{ getField('email') }}</p>
                    <p>{{ getField('phoneNumber') }}</p>
                </div>
            </div>

            
            <div class="overview__card">
                <div class="overview__card__title">
                    <h2>Verzending</h2>
                    <NuxtLink to="/winkelwagen/verzending">
                        <IconsPen />
                    </NuxtLink>
                </div>
                
                <p>{{ getField('shipping') }}</p>
            </div>

            <div class="overview__card">
                <div class="overview__card__title">
                    <h2>Betaalwijze</h2>
                    <NuxtLink to="/winkelwagen/betaalwijze">
                        <IconsPen />
                    </NuxtLink>
                </div>
                
                <div v-if="getField('paymethod') == 'ideal'" class="overview__card__paymethod">
                    <img src="~/assets/ideal-logo.svg" alt="ideal">
                    <p>iDEAL</p>
                </div>

                <div v-if="getField('paymethod') == 'card'" class="overview__card__paymethod">
                    <img src="~/assets/creditcard-logo.svg" alt="creditcard">
                    <p>Creditcard</p>
                </div>
            </div>


            <div class="overview__cart">
                <h2>Winkelwagen</h2>
                <div class="overview__cart__items">
                    <div class="overview__cart__items__card" v-for="product in products" :key="product.id" >
                        <div class="overview__cart__items__card__img">
                            <picture :class="product.position">
                                <source
                                    type="image/webp"
                                    sizes="(min-width: 260px) 160px, 320px"
                                    :srcset="
                                        require(`~/static/img${product.image.webp._160}`) + ' 160w, ' +
                                        require(`~/static/img${product.image.webp._320}`) + ' 320w'">
                                <source
                                    type="image/jpeg"
                                    sizes="(min-width: 260px) 160px, 320px"
                                    :srcset="
                                        require(`~/static/img${product.image.jpeg._160}`) + ' 160w, ' +
                                        require(`~/static/img${product.image.jpeg._320}`) + ' 320w'">
                                <img :src="require(`~/static/img${product.image.jpeg._160}`)" :alt="product.name.toLowerCase()">
                            </picture>

                        </div>
                        <div class="overview__cart__items__card__info">
                            <div class="overview__cart__items__card__info__title">
                                <h2>{{ product.name }}</h2>
                                <h3>{{ product.category }}</h3>
                            </div>
                            <div class="overview__cart__items__card__info__options">
                                <p>Aantal: {{ product.quantity }}</p>
                                <p><strong>€ {{ (product.price * product.quantity).toFixed(2).replace(".", ",") }}</strong></p>
                            </div>                      
                        </div>
                    </div>
                </div>

            </div>

            <form @submit.prevent="betalen" class="overview__summary">

                <div class="overview__summary__item">
                    <h3>Verzending</h3>
                    <h3>€ {{ getField('shippingLabel') }}</h3>

                </div>
                <div class="overview__summary__item">
                    <h3>TOTAALPRIJS</h3>
                    <h3>€ {{ (cartTotal + getField('shippingCosts')).toFixed(2).replace(".", ",") }}</h3>
                </div>
                
                <button type="submit" class="button-1" :class="loading ? 'disabled' : ''">Bestellen en betalen<IconsButtonLoading v-if="loading" /></button>
                <p class="overview__summary__message">Niet gelukt met uw bestelling? Neem dan <a href="mailto:info@jennitaphotography.nl">contact</a> met ons op.</p>

            </form>


        </section>
    </main>
</template>



<script>

export default {
    head () {
        return {
            title: "Overzicht"
        }
    },
    data () {
        return {
            errors: [],
            loading: false,
        }
    },

    methods: {

        async betalen () {
            this.loading = true;

            await fetch("https://jennitaphotography.nl/server/create-checkout-session", {
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

            .then(({ url, error }) => {

                if(error) {
                    const errors = error;
                    errors.forEach(error => {
                        if (error.message != true) {
                            this.errors.push(error);
                            this.loading = false;
                        }
                    });
                } else {
                    window.location = url;
                    this.loading = false;
                }
            }) 

            .catch(e => {
                console.log("Error catch 1: ", e);
                console.log("Error catch 2: ", e.error);
                console.log("Error catch 3: ", e.message);
            })

        },

        getField ( field ) {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0][field];
            }
        },
        closeError () {
            event.target.parentNode.remove();
        },
        pageAuthentication () {
            if (!this.$store.state.cart.length) {
                this.$router.push("/kaarten/");
            } else {
                if (this.$store.state.formDetails[0]) {
                    if (!this.$store.state.formDetails[0].shipping) {
                        this.$router.push("/winkelwagen/verzending/")
                    }
                    else if (!this.$store.state.formDetails[0].paymethod) {
                        this.$router.push("/winkelwagen/betaalwijze/")
                    } 
                } else {
                    this.$router.push("/winkelwagen/gegevens/")
                }
            }
        },
    }, 

    mounted: function () {
        this.pageAuthentication();
    },

    computed: {
        stepindicator() {
            return [
                {
                    label: "Gegevens",
                    url: "/winkelwagen/gegevens/"
                },
                {
                    label: "Verzending",
                    url: "/winkelwagen/verzending/"
                },
                {
                    label: "Betaalwijze",
                    url: "/winkelwagen/betaalwijze/"
                },
                {
                    label: "Overzicht",
                    page: true
                }
            ]
        },
        products () {
            return this.$store.getters.cartItems;
        },
        cartTotal () {
            return this.$store.getters.cartTotal;
        },
    },




}
</script>



<style scoped>

section {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 20px;
    width: 95%;
}

.overview__errors {
    width: 100%;
}
.overview__errors p {
    width: 100%;
    padding: 7px 15px;
    margin: 5px 0 35px 0;
    position: relative;
}

.overview__errors p.message.orange svg {
    position: absolute;
    right: 15px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    fill: var(--clr-2-1);
    opacity: 50%;
    transition: all 300ms ease-in-out;
    top: 0;
    bottom: 0;
    display: flex;
    margin: auto 0;
}

.overview__errors p.message.orange svg:hover {
    opacity: 100%;
}

.overview__card {
    width: calc(50% - 20px);
    margin-bottom: 20px;
    padding-bottom: 10px;
}

.overview__card:nth-child(2n + 2) {
    margin-right: 40px;
}

.overview__card__title {
    display: flex;
}

.overview__card__title h2 {
    padding-bottom: 5px;
    font-size: 19px;
    margin-right: 6px;
}

.overview__card__title a {
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    padding: 4px;
}


.overview__card__title a svg {
    fill: var(--clr-1-2);
    height: 12px;
    width: 12px;
}

.overview__cart > h2 {
    padding-bottom: 0;
    font-size: 19px;
}

.overview__card p {
    font-size: 16px;
}



.overview__cart {
    width: 100%;
    margin: 10px 0px 30px 0px;
}


.overview__card__paymethod {
    display: flex;
    align-items: center;
}

.overview__card__paymethod img {
    height: 25px;
    margin-right: 15px;
    
}



/* ########## TITLE BUTTON ########## */

form.overview__checkout {
    position: relative;
    margin: 15px 0;
}

.overview__checkout button {
    position: absolute;
    right: 0;
    top: -26px;
}

/* ########## CART ITEMS ########## */

.overview__cart__items {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
}

.overview__cart__items__card {
    border-bottom: 1px dashed var(--clr-1-2);
    padding: 20px 0px;
    display: flex;
    width: 100%;
}



/* ########## IMAGE ########## */

.overview__cart__items__card__img {
    background: var(--clr-3-3);
    border-radius: var(--border-radius);
    display: inherit;
    justify-content: center;
    align-items: center;
    height: 98px;
    min-height: 98px;
    width: 80px;
    min-width: 80px;
    margin-right: calc(1% + 10px);
    padding: 4px;
    transition: all 300ms ease-in-out;
}

.overview__cart__items__card__img picture {
    height: 100%;
    width: 100%;
}

.overview__cart__items__card__img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.overview__cart__items__card__img picture.lying img {
    object-fit: contain;
}


.overview__cart__items__card__info {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

/* ########## TITLE ########## */

.overview__cart__items__card__info__title {
    margin-bottom: 6px;
}

.overview__cart__items__card__info__title h2 {
    font-size: 17px;
    padding-bottom: 1px;
    font-weight: 600;
}

.overview__cart__items__card__info__title h3 {
    text-transform: uppercase;
    color: var(--clr-3-2);
    font-size: 10px;
    letter-spacing: .7px;
}

.overview__cart__items__card__info__options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 4px;
}

.overview__cart__items__card__info__options p {
    font-size: 15px;
}



/* ########## SUMMARY ########## */

form.overview__summary {
    background: var(--clr-1-3);
    position: sticky;
    top: 90px;
    padding: 30px;
    width: 55%; 
    right: 0;
    left: 100%;
    border-radius: var(--border-radius);
}

.overview__summary h3 {
    font-size: 19px;
}

.overview__summary__item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 18px 0 15px;
}

.overview__summary__item:first-child {
    border-bottom: 1px solid var(--clr-1-3);
    padding-top: 3px;
}

.overview__summary button {
    width: 100%;
    margin-top: 10px;
}

.overview__summary__message {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform: translateY(125%);
    padding: 0 20px;
    font-size: 11px;
    position: absolute;
}

.overview__summary__message a {
    text-decoration: underline;
    font-size: 11px;
}


@media only screen and (max-width: 750px) {
    section.overview {
        display: block;
        margin-top: 0;
    }
    form.overview__checkout {
        margin: 0;
    }
    form.overview__checkout button {
        position: relative;
        margin: 25px 0 0 0;
        width: 100%;
    }
    form.overview__summary, .overview__card {
        width: 100%;
        margin: 10px 0px;
    }
    .overview__card__title h2, .overview__cart > h2 {
        font-size: 18px;
    }
    .overview__card p {
        font-size: 15px;
    }
    .overview__cart__items__card__info__title h2 {
        font-size: 15.5px;
    }
    .overview__cart__items__card__info__title h3 {
        font-size: 9px;
    }
    form.overview__summary {
        padding: 20px;
    }
}


</style>