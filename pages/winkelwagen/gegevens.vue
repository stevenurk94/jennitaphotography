<template>
    <main>
        <section>

            <div class="StepIndicatorItems">
                <span class="active">Gegevens</span>
                <span>Verzending</span>
                <span>Betaalwijze</span>
                <span>Overzicht</span>
            </div>

            <div class="StepIndicator">
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <form>
                
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

                <NuxtLink class="button-1" to="/winkelwagen/verzending">Doorgaan</NuxtLink>

            </form>

            

        </section>
    </main>
</template>

<script>
export default {
    data () {
        return {
            totalSteps: 5,
        }
        
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

form > input {
    height: 30px;
    width: 100%;
    margin: 10px 0px;
}











.StepIndicatorItems {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.StepIndicatorItems span, .StepIndicatorItems a {
    width: 25%;
    text-align: center;
}

.StepIndicatorItems .active {
    font-weight: bold;
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

.StepIndicator span.active::after {
    background: #3A524D;
    animation: bg 1s;
}

.StepIndicator span.completed::after {
    background: #3A524D;
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