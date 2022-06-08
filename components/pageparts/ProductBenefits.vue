<template>

    <div class="benefits">
        <div class="benefits__row">
            <span><IconsCheckmark /></span>
            <p>Veilig betalen met iDEAL</p>
        </div>
        <div class="benefits__row">
            <span><IconsCheckmark /></span>
            <p>Verzending door PostNL</p>
        </div>
        <div class="benefits__row">
            <span><IconsCheckmark /></span>
            <p>Met jouw aankoop steun je 'Kom over en help'</p>
        </div>
    </div>
    
</template>

<style scoped>

.benefits {
    margin-top: 70px;
    background-color: var(--clr-3-3);
    border-radius: var(--border-radius);
    padding: 18px 23px;
    width: fit-content;
}

.benefits__row {
    display: flex;
    align-items: center;
}

.benefits__row:nth-child(2) {
    margin: 10px 0;
}

.benefits__row span {
    min-width: 18px;
    height: 18px;
    background-color: var(--clr-1-1);
    border-radius: 100%;
    margin-right: 27px;
    display: flex;
    align-content: center;
    padding: 3px;
} 

.benefits__row span svg, 
.benefits__row span svg path {
    fill: white;
}


@media only screen and (max-width: 767px) {
    .benefits {
        width: 100%;
        padding: 16px 18px;
    }

    .benefits__row span {
        margin-right: 25px;
    }
}
</style>