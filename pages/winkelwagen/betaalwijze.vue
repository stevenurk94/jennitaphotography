<template>
    <main>
        <section>

            <div class="StepIndicatorItems">
                <NuxtLink to="/winkelwagen/gegevens">Gegevens</NuxtLink>
                <NuxtLink to="/winkelwagen/verzending">Verzending</NuxtLink>
                <span class="active">Betaalwijze</span>
                <span>Overzicht</span>
            </div>

            <div class="StepIndicator">
                <span class="completed"></span>
                <span class="completed"></span>
                <span class="active"></span>
                <span></span>
            </div>

            <form @submit.prevent="savePaymethod">

                <h1>Betaalwijze</h1>
                <div class="paymethod">
                    <input type="radio" id="ideal" name="paymethod" :checked="paymethod == null || paymethod == 'ideal'" value="ideal">
                    <label for="ideal">Ideal</label>
                </div>
                <div class="paymethod">
                    <input type="radio" id="card" name="paymethod" :checked="paymethod == 'card'" value="card">
                    <label for="card">Creditcard</label>
                </div>

                <button class="button-1" type="submit">Doorgaan</button>

            </form>

            
        </section>
    </main>
</template>

<script>

export default {

    computed: {
        paymethod () {
            if (this.$store.getters.formDetails[0]) {
                return this.$store.getters.formDetails[0]["paymethod"];
            }
        },

    },
    
    
    methods: {

        async savePaymethod () {

            const { paymethod } = Object.fromEntries(
                new FormData(event.target)
            );

            this.$store.commit("savePaymethod", paymethod);
            this.$router.push("/winkelwagen/overzicht");
        },
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
    margin-bottom: 50px;
}

form > input {
    height: 30px;
    width: 100%;
    margin: 10px 0px;
}

.shipping {
    display: flex;
}












/* StepIndicatorItems */

.StepIndicatorItems {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.StepIndicatorItems span, .StepIndicatorItems a {
    width: 25%;
    text-align: center;
}

.StepIndicatorItems span {
    color: #979797;
}

.StepIndicatorItems .active {
    font-weight: bold;
    color: black;
}

.StepIndicatorItems a {
    text-decoration: underline;
}





/* Step Indicator's */

.StepIndicator {
    counter-reset: step;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.StepIndicator span {
    position: relative;
    width: 25%;
    text-align: center;
}

.StepIndicator span::before {
    content: "";
    counter-increment: step;
    width: 25px;
    height: 25px;
    border: 4px solid #bebebe;
    display: block;
    margin: 0 auto 0 auto;
    line-height: 27px;
    border-radius: 50%;
    color: #bebebe;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.StepIndicator span::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: #979797;
    top: 47%;
    bottom: 52%;
    left: -50%;
    z-index: -1;
}

.StepIndicator span:first-child::after {
    content: none;
}

.StepIndicator span.completed::before {
    content: "✓";
    border-color: #3A524D;
    background: #3A524D;
    color: white;
    font-weight: bold;
    font-size: 15px;
}

.StepIndicator span.active::before {
    background: white;
    color: #bebebe;
    animation: bc 1.5s;
    border-color: #3A524D;
    color: #3A524D;
}

.StepIndicator span.completed:nth-child(2)::before {
    animation: bg 300ms, c 300ms;
}

.StepIndicator span.active::after {
    background: #3A524D;
    animation: bg 1s;
}

.StepIndicator span.completed::after {
    background: #3A524D;
}



.StepIndicator span.completed:nth-child(3)::after {
    animation: bg 1s;
}



@keyframes c {
    from {
        color: #3A524D;
    }


    to { 
        color: white;
    }
}

@keyframes bc {
    from { 
        border-color: #bebebe;
    }

    to { 
        border-color: #3A524D;
    }
}



@keyframes bg {
    from { 
        background-color: #979797;
    }

    to { 
        background-color: #3A524D;
    }
}



</style>