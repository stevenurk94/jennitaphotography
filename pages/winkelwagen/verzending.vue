<template>
    <main>
        <section>

            <div class="StepIndicatorItems">
                <NuxtLink to="/winkelwagen/gegevens">Gegevens</NuxtLink>
                <span class="active">Verzending</span>
                <span>Betaalwijze</span>
                <span>Overzicht</span>
            </div>

            <div class="StepIndicator">
                <span class="completed"></span>
                <span class="active"></span>
                <span></span>
                <span></span>
            </div>

            <form>
                <h1>Verzending</h1>
                <div class="shipping">
                    <input type="radio" id="shipping" name="shipping" checked value="Verzending via PostNL">
                    <label for="shipping">Verzending via PostNL</label>
                </div>
                <div class="shipping">
                    <input type="radio" id="shippingFree" name="shipping" value="Gratis bezorging in Genemuiden en Urk">
                    <label for="shippingFree">Gratis bezorging in Genemuiden en Urk</label>
                </div>

                <NuxtLink class="button-1" to="/winkelwagen/betaalwijze">Doorgaan</NuxtLink>
            </form>

            
            
        </section>
    </main>
</template>


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

.shipping {
    display: flex;
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

.StepIndicator span.completed:nth-child(1)::before {
    animation: bg 300ms, c 300ms;
}

.StepIndicator span.active::after {
    background: #3A524D;
    animation: bg 1s;
    
}

.StepIndicator span.completed::after {
    background: #3A524D;
}



.StepIndicator span.completed:nth-child(2)::after {
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