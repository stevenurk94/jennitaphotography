<template>
    <main>
       

        <form @submit.prevent="betalen">

            <h1>Gegevens</h1>

            <input placeholder="voornaam" name="firstName" type="text">
            <input placeholder="achternaam" name="lastName" type="text">
            
            <input placeholder="straatnaam" name="streetName" type="text">
            <input placeholder="huisnummer" name="streetNumber" type="number">
            <input placeholder="toevoeging" name="addition" type="text">
            <input placeholder="postcode" name="zipCode" type="text">
            <input placeholder="woonplaats" name="place" type="text">
            <input placeholder="Land" value="Nederland (neem voor verzending naar buitenland via mail contact op)" type="text" readonly>
            <label for="country"></label>
            <input placeholder="emailadres" name="email" type="text">
            <input placeholder="telefoonnummer" name="phoneNumber" type="text">



            <h1>Verzending</h1>
            <div class="shipping">
                <input type="radio" id="shipping" name="shipping" checked value="Verzending via PostNL">
                <label for="shipping">Verzending via PostNL</label>
            </div>
            <div class="shipping">
                <input type="radio" id="shippingFree" name="shipping" value="Gratis bezorging in Genemuiden en Urk">
                <label for="shippingFree">Gratis bezorging in Genemuiden en Urk</label>
            </div>


            <h1>Betaalwijze</h1>
            <div class="paymethod">
                <input type="radio" id="ideal" name="paymendMethod" checked value="ideal">
                <label for="ideal">Ideal</label>

            </div>


            <h1>Overzicht</h1>
            <h2>Gegevens</h2>
            <h2>Verzending</h2>
            <h2>Betaalwijze</h2>
            <h2>Winkelwagen</h2>
            <h2>Verzendkosten</h2>
            <h2>Totaalbedrag</h2>
            <button type="submit" class="button-1">Betalen</button>




        </form>

    </main>




</template>

<script>
export default {


    methods: {

        async betalen () {


            const { firstName, lastName, shipping, paymendMethod } = Object.fromEntries(
                new FormData(event.target)
            );

            const billingDetails = { firstName, lastName, shipping, paymendMethod };

 

            console.log(billingDetails)


            // await fetch("http://localhost:5001/jennitaphotography/europe-west1/expressApi/create-checkout-session", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         items: this.$store.getters.cartItems.map(item => ({ "id" : item.id, "quantity" : item.quantity }))
            //     }),
            // })

            // .then(response => {
            //     if (response.ok) return response.json()
            //     return response.json().then(json => Promise.reject(json))
            // })

            // .then(({ url }) => {
            //     window.location = url
            // }) 

            // .catch(e => {
            //     console.log(e.error)
            // })
        }

      

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
}

form > input {
    height: 30px;
    width: 100%;
    margin: 10px 0px;
}

.shipping {
    display: flex;
}



</style>