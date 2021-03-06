<template>
    <main>
        <section>
            <h1>Gelukt {{ getField('firstName') }}!</h1>
            <p>Bedankt voor je bestelling, we gaan direct voor je aan de slag.</p>

            <h2>Hoe nu verder?</h2>
            <div class="item">
                <h2 number="1 -">Bevestiging</h2>
                <p>We hebben een bevestiging van je bestelling gestuurd naar <b>{{ getField('email') }}</b>.</p> 
            </div>
            <div class="item">
                <h2 number="2 -">Verzending</h2>
                <p>We gaan je bestelling zo snel mogelijk inpakken en {{ shippingText }}<b>{{ shippingPartner }}</b>.</p>
            </div>
            <div class="item">
                <h2 number="3 -">Bezorging</h2>
                <p>Je artikelen worden bezorgd op <b>{{ getField('streetName') }} {{ getField('streetNumber') }}{{ getField('addition') }}, {{ getField('zipCode') }} {{ getField('place') }}</b>. Houd je deurbel, brievenbus of inbox in de gaten.</p>
            </div>
            <div class="item">
                <h2>Heb je nog vragen?</h2>
                <p>We helpen je graag met al je vragen. Neem daarvoor per mail <a href="mailto:info@jennitaphotography.nl">contact</a> met ons op.</p>
            </div>
        </section>
    </main>
</template>


<script>
export default {
    head () {
        return {
            title: "Bedankt",
        }
    },
    beforeRouteLeave(to, from, next) {
        this.clearStateCustomerDetails();
        next();
    },
    methods: {
        getField ( field ) {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0][field];
            }
        },
        cartTotal () {
            return this.$store.getters.cartTotal;
        },
        clearCart () {
            this.$store.commit("clearCart");
            // console.log("Cart Cleared!");
        },
        clearLocalstorageCustomerDetails () {
            this.$store.commit("clearLocalstorageCustomerDetails");
            // console.log("CustomerDetailsLocalstorage Cleared!");
        },
        clearStateCustomerDetails () {
            this.$store.commit("clearStateCustomerDetails");
            // console.log("CustomerDetailsState Cleared!");
        },
        createDatalayerProducts () {
            let products = [];
            this.$store.getters.cartItems.forEach(item => {
                products.push({
                    name: item.name,
                    id: item.id,
                    price: item.price,
                    category: item.category,
                    quantity: item.quantity
                })
            });
            return products;
        },
        sendingDatalayer () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({ ecommerce: null });
            dataLayer.push({
                event: "purchase",
                ecommerce: {
                    purchase: {
                        actionField: {
                            id: Date.now(),
                            revenue: this.cartTotal() + this.getField('shippingCosts'),
                            shipping: this.getField('shippingCosts'),
                        },
                        products: this.createDatalayerProducts(),
                    }
                }
            })
            // console.log("Datalayer SENDED!!");
            return JSON.stringify(dataLayer);
        },
    },

    computed: {
        shippingText () {
            if (this.getField('shipping') == "Verzending via PostNL") {
                return "verzenden met ";
            } else if (this.getField('shipping') == "Gratis bezorging in Genemuiden en Urk") {
                return "bezorgen";
            }
        },
        shippingPartner () {
            if (this.getField('shipping') == "Verzending via PostNL") {
                return "PostNL";
            } else if (this.getField('shipping') == "Gratis bezorging in Genemuiden en Urk") {
                return "";
            }
        },
    },
    mounted () {
        if (this.$store.getters.cartItems.length) {
            this.sendingDatalayer();
        }
        this.clearLocalstorageCustomerDetails();
        setTimeout(this.clearCart, 50);
    },
}
</script>

<style scoped>

main {
    background: var(--clr-1-3);
}

section {
    left: 0;
    right: 0;
    margin: 90px auto auto auto;
    z-index: 2;
    padding: 40px 60px;
    box-shadow: var(--boxshadow);
    background: white;
    border-radius: var(--border-radius);
    max-width: 800px;
}

section > h1 {
    color: var(--clr-1-1);
    font-size: 38px;
}

section > p {
    margin-bottom: 40px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;
}

section > h2 {
    font-style: italic;
    font-size: 20px;
    font-weight: 600;
}

.item {
    margin: 20px 0;
    border-radius: var(--border-radius);
    background: var(--clr-1-3);
    padding: 15px 18px;
}

.item:nth-child(4) {
    margin-top: 5px;
}

.item h2 {
    font-size: 18px;
    padding-bottom: 5px;
}

.item h2::before {
    content: attr(number);
    margin-right: 7px;
    font-size: 17.5px;
    font-family: inherit;
}

.item:last-child h2::before {
    margin-right: 0;
}

.item p {
    font-size: 15px;
}

.item a {
    width: fit-content;
    text-decoration: underline;
    color: var(--clr-1-1);
}



@media only screen and (max-width: 1200px) {
    section {
        margin-top: calc(3% + 4.6vmax);
        padding: 3.3% 5%;
    }
}

@media only screen and (max-width: 767px) {
    main {
        background: transparent;
    }

    section {
        max-width: auto;
        width: 95%;
        padding: 5% 0 0 0;
        border-radius: 0;
        margin: 0;
        box-shadow: none;
    }

    section h1 {
        font-size: calc(27px + 1vmax);
    }

    section > p {
        font-size: calc(16px + .6vmax);
    }

    section > h2 {
        font-size: 18px;
    }

    .item {
        padding: calc(1% + 8px) calc(1% + 10px);
    }

    .item h2 {
        padding-bottom: 4px;
        font-size: 17px;
    }

    .item h2::before {
        font-size: 16.5px;
    }

    .item p {
        line-height: 1.4;
    }
}
</style>