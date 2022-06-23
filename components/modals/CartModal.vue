<template>
    <transition name="fade">
        <div class="modal-overlay" v-show="showModal" @click="$emit('closeModal')">
            <div class="modal" @click.stop>
                <div class="modal__header">
                    <span>
                        <IconsCheckmark />
                    </span>
                    <p>Toegevoegd aan je winkelwagen</p>
                </div>                  
                <span class="modal__close" @click="$emit('closeModal')">
                    <IconsCross />
                </span>
                <div class="modal__product">
                    <div class="modal__product__img" :class="PhotoCard.position">
                        <img loading="lazy" :src="require(`~/static/img${PhotoCard.image.jpeg._320}`)" :alt="PhotoCard.name.toLowerCase()">
                    </div>
                    
                    <div class="modal__product__info">
                        <h2>{{ PhotoCard.name }}</h2>
                        <h3>{{ PhotoCard.category }}</h3>
                        <p>Aantal: {{ PhotoCard.quantity }}</p>
                        <p>€ {{ (PhotoCard.price * PhotoCard.quantity).toFixed(2).replace(".", ",") }}</p>
                    </div>
                </div>
                <div class="modal__buttons">
                    <NuxtLink class="button-1" to="/winkelwagen/">Naar winkelwagen</NuxtLink>
                    <button class="button-2" @click="$emit('closeModal')">Verder winkelen</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ["showModal", "PhotoCard"],
}
</script>


<style scoped>



/* ########## MODAL ########## */

.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    transition: all 3s ease-in-out;
}

.modal {
    max-width: 600px;
    background-color: white;
    width: 90%;    
    border-radius: var(--border-radius);
    padding: 20px 20px;
    position: relative;
    overflow: hidden;
    
}

.modal__header {
    display: flex;
    border-bottom: 1px solid var(--clr-1-3);
}

.modal__header span {
    border-radius: 50%;
    width: 23px;
    height: 23px;
    margin-right: 7px;
    border: 2.5px solid var(--clr-1-1);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal__header span svg {
    fill: var(--clr-1-1);
    margin: 4px 3.3px 3px 3px;
}

.modal__header p {
    margin: 0 30px 15px 0;
    color: var(--clr-1-1);
    line-height: 1.2;
    font-size: 19.5px;
    font-weight: 700;
    padding-bottom: 0;
}

.modal__close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 14px;
    height: 14px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3a524dbe;
    font-weight: 600;
}

.modal__close svg {
    fill: var(--clr-1-1);
}






.modal__product {
    display: flex;
    margin: 25px 0;
}

.modal__product__img {
    border-radius: var(--border-radius);
    background: var(--clr-3-3);
    padding: 5px;
    width: 100px;
    display: flex;
    justify-content: center;
    margin: 0 25px 0 0;
    margin-right: 5%;
}

.modal__product__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal__product__img.lying img {
    object-fit: contain;
}

.modal__product__info {
    width: 50%;
    padding-top: 3px;
}

.modal__product__info h2 {
    padding-bottom: 5px;
    font-size: 23px;
}

.modal__product__info h3 {
    text-transform: uppercase;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--clr-1-1);
}

.modal__product__info p {
    font-size: 16px;
}

.modal__buttons {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--clr-1-3);
    padding-top: 21px;
}

.modal__buttons a {
    margin-right: 18px;
}

.modal__buttons a, .modal__buttons button {   
    width: calc(50% - 10px);
    height: 100%;
}

.modal__buttons .button-1 {
    border: 1px solid var(--clr-2-1);

}

.modal__buttons .button-2 {
    border: 1.5px solid var(--clr-1-1);
}



@media only screen and (max-width: 767px) {

    .modal__header span {
        max-width: 23px;
        max-height: 23px;
        min-width: 23px;
        min-height: 23px;
    }

    .modal__buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal__buttons a {
        margin: 0px 0px 10px 0px;
    }

    .modal__buttons a, .modal__buttons button {   
        width: 100%;
    }
}




.fade-enter-active, .fade-leave-active {
    transition: all 300ms ease-in-out;
}


.fade-enter, .fade-leave-to {
    opacity: 0;
}





</style>