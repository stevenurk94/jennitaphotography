<template>
    <section>

        <div class="StepIndicatorItems">
            <div class="item" v-for="(item, index) in items" :key="index">
                <NuxtLink v-if="item.url" :to="item.url">{{ item.label }}</NuxtLink>
                <p v-else-if="item.page" class="active">{{ item.label }}</p>
                <p v-else>{{ item.label }}</p>
            </div>
        </div>
        

        <div class="StepIndicator">
            <div class="step" v-for="(item, index) in items" :key="index" :class="item.url ? 'completed' : '' || item.page ? 'active' : ''">
                <span v-if="item.url" class="completed"></span>
                <span v-else-if="item.page" class="active"></span>
                <span v-else></span>
            </div>
        </div>

    </section>
</template>


<script>
export default {


    props: {
        items: {
            type: Array,
            required: true,
        }
    }

}
</script>

<style scoped>

/* StepIndicatorItems */

.StepIndicatorItems {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
}

.StepIndicatorItems a {
    color: #3A524D;
}

.StepIndicatorItems .item, .StepIndicatorItems a {
    width: 25%;
    text-align: center;
}



.StepIndicatorItems .item {
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

.StepIndicator .step {
    width: 25%;
    position: relative;
}

.StepIndicator .step span {
    position: relative;
    width: 100%;
    text-align: center;
}

.StepIndicator .step span::before {
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

.StepIndicator .step span.completed::before {
    content: "✓";/* ✓ */
    border-color: #3A524D;
    background: #3A524D;
    color: white;
    font-weight: bold;
    font-size: 15px;
}

.StepIndicator .step span.active::before {
    background: white;
    color: #bebebe;
    animation: bc 1.5s;
    border-color: #3A524D;
    color: #3A524D;
}



.StepIndicator .step::after {
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

.StepIndicator .step:first-child::after {
    content: none;
}

.StepIndicator .step.active::after {
    background: #3A524D;
    animation: bg 1s;
}

.StepIndicator .step.completed::after {
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