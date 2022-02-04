<template>
    <div class="StepIndicator">

        <div class="StepIndicator__items">
            <div class="item" v-for="(item, index) in items" :key="index" :class="item.url ? 'completed' : '' || item.page ? 'active' : ''">
                <NuxtLink v-if="item.url" :to="item.url">{{ item.label }}</NuxtLink>
                <p v-else-if="item.page" class="active">{{ item.label }}</p>
                <p v-else>{{ item.label }}</p>                
            </div>            
        </div>   

        <div class="StepIndicator__steps">
            <div class="step" v-for="(item, index) in items" :key="index" :class="item.url ? 'completed' : '' || item.page ? 'active' : ''">
                <span v-if="item.url" class="completed">
                    <span><Checkmark /></span>
                </span>
                <span v-else-if="item.page" class="active">
                    <span></span>
                </span>
                <span v-else>
                    <span></span>
                </span>
            </div>
        </div>

    </div>
</template>


<script>
export default {


    props: {
        items: {
            type: Array,
            required: true,
        }
    },

    mounted: function () {
        
        const S1 = document.querySelector(".step:nth-of-type(1)");
        const S2 = document.querySelector(".step:nth-of-type(2)");
        const S3 = document.querySelector(".step:nth-of-type(3)");
        const S4 = document.querySelector(".step:nth-of-type(4)");

        const width1 = document.querySelector(".item:nth-of-type(1)").offsetWidth;
        S1.style.setProperty("--step-width", width1 + "px");

        const width2 = document.querySelector(".item:nth-of-type(2)").offsetWidth;
        S2.style.setProperty("--step-width", width2 + "px");

        const width3 = document.querySelector(".item:nth-of-type(3)").offsetWidth;
        S3.style.setProperty("--step-width", width3 + "px");

        const width4 = document.querySelector(".item:nth-of-type(4)").offsetWidth;
        S4.style.setProperty("--step-width", width4 + "px");

        const D12 = S2.offsetLeft - S1.offsetLeft;
        const D23 = S3.offsetLeft - S2.offsetLeft;
        const D34 = S4.offsetLeft - S3.offsetLeft;

        S2.style.setProperty("--step-width-after", D12 + "px");
        S4.style.setProperty("--step-width-after", D34 + "px");
        S3.style.setProperty("--step-width-after", D23 + "px");


        window.addEventListener("resize", () => {

            const D12 = S2.offsetLeft - S1.offsetLeft;
            const D23 = S3.offsetLeft - S2.offsetLeft;
            const D34 = S4.offsetLeft - S3.offsetLeft;

            S2.style.setProperty("--step-width-after", D12 + "px");
            S3.style.setProperty("--step-width-after", D23 + "px");
            S4.style.setProperty("--step-width-after", D34 + "px");

        });

    }

}
</script>



<style scoped>

.StepIndicator {
    margin-top: 17px;
}

/* StepIndicatorItems */


.StepIndicator__items {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto 0px auto;
}

.StepIndicator__items a {
    color: var(--clr-1-1);
    text-decoration: underline;
    /* font-size: 16px; */
}

.StepIndicator__items .item p {
    text-align: center;
    color: #979797;
    position: relative;
    /* font-size: 16px; */
}


.StepIndicator__items .item.active p {
    font-weight: bold;
    color: black;
    /* font-size: 16.5px; */

}






/* StepIndicatorSteps */

.StepIndicator__steps {
    counter-reset: step;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
    right: 0;
    left: 0;
    margin: 0px auto 50px auto;
}

.step {
    /* width: 25%; */
    width: var(--step-width);
    position: relative;
}

.step > span {
    position: relative;
    width: 100%;
    text-align: center;
}





.step > span > span {
    counter-increment: step;
    width: 20px;
    height: 20px;
    border: 2.5px solid #bebebe;
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

.step > span > span svg {
    fill: white;
}

.step > span.completed > span {
    border-color: var(--clr-1-1);
    background: var(--clr-1-1);
    color: white;
    font-weight: bold;
    padding-top: 1.5px;
}

.step > span.completed > span svg {
    margin: 1px 2px 2px 2px;

    
}


.step > span.active > span {
    background: white;
    color: #bebebe;
    animation: bc 1.5s;
    border-color: var(--clr-1-1);
    color: var(--clr-1-1);
}








.step::after {
    content: "";
    position: absolute;
    width: var(--step-width-after);
    left: calc(50% - var(--step-width-after));
    /* width: 25%; */
    /* left: -50%; */
    height: 2.6px;
    background: #bebebe;
    top: 48%;
    bottom: 51%;
    z-index: -1;
}

.step:first-child::after {
    content: none;
}

.step.active::after {
    background: var(--clr-1-1);
    animation: bg 1s;
}

.step.completed::after {
    background: var(--clr-1-1);
}


@keyframes bc {
    from { 
        border-color: #bebebe;
    }

    to { 
        border-color: var(--clr-1-1);
    }
}



@keyframes bg {
    from { 
        background-color: #979797;
    }

    to { 
        background-color: var(--clr-1-1);
    }
}





</style>