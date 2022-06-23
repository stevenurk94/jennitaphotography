<template>
    <section>
        <div class="attributes">
            <input type="radio" id="description" name="attribute" value="description" v-model="menu">
            <label for="description" class="attributes__item">
                <p>Beschrijving</p>
            </label>
            <input type="radio" id="information" name="attribute" value="information" v-model="menu">
            <label for="information" class="attributes__item">
                <p>Extra informatie</p>
            </label>
        </div>



        <div class="data">
            <div class="data__item" v-if="menu == 'description'">
                <h3>Beschrijving</h3>
                <p v-html="product_description"></p>
            </div>
            <div class="data__item" v-if="menu == 'information'">
                <h3>Extra informatie</h3>
                <div class="data__item__info">
                    <div>
                        <p>Envelop</p>
                        <p>Met envelop</p>
                    </div>
                    <div>
                        <p>Uitvoering</p>
                        <p>Wenskaart met foto-opdruk</p>
                    </div>
                    <div>
                        <p>Afmetingen</p>
                        <p>10 x 15 cm</p>
                    </div>
                    <div>
                        <p>Verpakking</p>
                        <p>Verpakt in insteekhoesje</p>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ["product_description"],
    data () {
        return {
            menu: "description",
        }
    }, 
}
</script>

<style scoped>

section {
    display: flex;
    margin-top: 100px;
}

input[type="radio"] {
    display: none;
}

.attributes {
    padding-top: 10px;
    margin-right: 45px;
}

.attributes__item {
    border-bottom: 1px solid var(--clr-1-3);
    display: flex;
    cursor: pointer;
    padding: 0 70px 6px 0;
    margin-bottom: 20px;
}


.attributes__item p {
    width: max-content;
}






.data {
    width: 100%;
    border-radius: var(--border-radius);
    border: 1px solid var(--clr-1-3);
    padding: 30px;
}

.data__item__info {
    width: 100%;
    margin-top: 20px;
}

.data__item__info div {
    border-bottom: 1px solid var(--clr-1-3);
    display: flex;
    margin-bottom: 8px;
    width: 100%;
}

.data__item__info div p:first-child {
    width: 25%;
    min-width: 160px;
    font-weight: 600;
    padding-bottom: 8px;
}


@media only screen and (max-width: 767px) {
    section {
        display: block;
        margin-top: 60px;
    }

    .data {
        margin-top: 40px;
        padding: 15px;
    }

    .data__item__info div p:first-child {
        min-width: 130px;
    }
}








</style>