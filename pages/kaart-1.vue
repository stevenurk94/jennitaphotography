<template>
<main>
    


    <section class="product">
        <img src="~/static/img/image00001.jpeg" alt="">

        <div class="product_text">
            <h1>Fotokaart 1</h1>
            <h2>Omschrijving</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>€ 0,90 p/st.</p>
        </div>

        <div class="order_box">
            <div>
                <input name="amount" type="number" min="1" max="10000" value="1">
            </div>
            <NuxtLink class="button-1" to="/kaarten">In winkelwagen</NuxtLink>
            
        </div>


    </section>


</main>
</template>


<style scoped>



.product {
    display: flex;
    align-items: center;
    width: 95%;
    flex-direction: column;
    margin-top: 150px;

}

.product img {
    width: 100%;
}

.product_text {
    padding: 25px 0;
}

.order_box {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.order_box div {
    width: 25%;
}

.order_box div input {
    width: 100%;
    height: 65px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    border-radius: 4px;
    padding: 0.5em 1em;
    border: 1px solid black;
    cursor: text;
    text-align: center;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


.order_box a {
    width: 70%;
}

</style>