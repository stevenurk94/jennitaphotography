<template>
    <main>

        <StepIndicator :items="stepindicator" />
        <section>
            <form @submit.prevent="betalen">

                <h2>Overzicht</h2>
                <h2>Gegevens</h2>
                <h2>Verzending</h2>
                <h2>Betaalwijze</h2>
                <h2>Winkelwagen</h2>
                <h2>Verzendkosten</h2>
                <h2>Totaalbedrag</h2>
                <button type="submit" class="button-1">Afrekenen</button>

            </form>
        </section>
    </main>
</template>



<script>
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
        }
    }
}
</script>


<style scoped>


form {
    width: 500px;
    display: flex;
    flex-direction: column;
    right: 0;
    left: 0;
    margin: auto;
}

form > input {
    height: 30px;
    width: 100%;
    margin: 10px 0px;
}




</style>