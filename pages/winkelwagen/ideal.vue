<template>
    
    <main>
        <section>
            
            <form>

                <div class="form-row">
                    <div id="ideal-bank-element"></div>
                </div>
                <div id="error-message" role="alert"></div>


                <button class="button-1" type="submit">Afrekenen</button>
                

            </form>

        </section>
    </main>
</template>


<script>

const options = {
    style: {
        base: {
            padding: '15px 12px',
            color: '#32325d',
            fontSize: '16px',
            '::placeholder': {
                    color: '#aab7c4'
                },
        },
    },
}


export default {
    
    head () {
        return {
            script: [
                {
                    src: "https://js.stripe.com/v3/",
                }
            ]
        }
    },

    mounted: function () {


        const stripe = Stripe(process.env.VITE_STRIPE_KEY);
        const elements = stripe.elements();
        const idealBank = elements.create('idealBank', options);
        idealBank.mount("#ideal-bank-element");

        const form = document.querySelector("form");
        
        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            
            const BD = JSON.parse(localStorage.getItem("billingDetails"))[0];

            const billingDetails = {
                name: BD.firstName + " " + BD.lastName,
                email: BD.email,
                address: {
                    // country: "Nederland",
                    city: BD.place,
                    line1: BD.streetName + " " + BD.streetNumber + BD.addition,
                    postal_code: BD.zipCode,
                    
                },
                phone: BD.phoneNumber,
            };

            var it = JSON.parse(localStorage.getItem("cart"));

            try {

                const response = await fetch("http://localhost:4242/stripe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        items: it.map(item => ({ "id" : item.id, "quantity" : item.quantity })),
                        shipping: BD.shipping,
                    }),
                });


                const { secret } = await response.json();
                
                stripe.confirmIdealPayment(secret, {
                    payment_method: {
                        ideal: idealBank,
                        billing_details: billingDetails,
                    },

                    return_url: "http://localhost:3000/winkelwagen/overzicht",
                });

                

            } catch (error) {
                console.log(error)
            }

        });
    },

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

</style>