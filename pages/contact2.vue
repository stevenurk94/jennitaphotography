<template>
    <main>
        <section class="hero">
            
            <div class="hero__overlay"></div>
            <picture>
                <source
                    type="image/webp"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/static/img/webp/320/herfst-6.webp 320w,
                        ~/static/img/webp/640/herfst-6.webp 640w,
                        ~/static/img/webp/768/herfst-6.webp 768w,
                        ~/static/img/webp/1024/herfst-6.webp 1024w,
                        ~/static/img/webp/1600/herfst-6.webp 1600w">
                <source
                    type="image/jpeg"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/static/img/jpeg/320/herfst-6.jpeg 320w,
                        ~/static/img/jpeg/640/herfst-6.jpeg 640w,
                        ~/static/img/jpeg/768/herfst-6.jpeg 768w,
                        ~/static/img/jpeg/1024/herfst-6.jpeg 1024w,
                        ~/static/img/jpeg/1600/herfst-6.jpeg 1600w">
                <img 
                    class="blur sliderImage"
                    loading="lazy"
                    src="~/static/img/jpeg/1024/herfst-6.jpeg" 
                    alt="herfst 6">
            </picture>

            <div class="hero__title">
                <h1 class="accent-center-white">Contact</h1>
            </div>

            

            

            <div class="contact">
                <div class="contact__info">
                    <h2 class="contact__info__title accent-left">Contact</h2>
                    <p class="contact__info__intro">Heb je vragen of opmerkingen? Dan kun je contact met ons opnemen via onderstaand emailadres of het contactformulier op deze pagina.</p>

                    <p class="contact__info__label"><strong>EMAIL</strong></p>
                    <a class="underline-white" href="mailto:info@jennitaphotography.nl"><p>info@jennitaphotography.nl</p></a>

                </div>


                <form class="contact__form" @submit.prevent="test($event)">
                    <h2 class="contact__form__title">Contactformulier</h2>
                    <p class="contact__form__intro">Vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.</p>
                    <div class="contact__form__wrap">
                        <input class="contact__form__wrap__input" name="name" type="text">
                        <span class="contact__form__wrap__label">Naam *</span>
                    </div>
                    <div class="contact__form__wrap">
                        <input 
                            class="contact__form__wrap__input"
                            name="emailadress" 
                            type="text" 
                            maxlength="150" 
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                        <span class="contact__form__wrap__label">E-mailadres *</span>
                    </div>
                    <div class="contact__form__wrap">
                        <input class="contact__form__wrap__input" name="phonenumber" type="text">
                        <span class="contact__form__wrap__label">Telefoonnummer</span>
                    </div>
                    <div class="contact__form__wrap">
                        <textarea class="contact__form__wrap__textarea" name="message"></textarea>
                        <span class="contact__form__wrap__label">Bericht</span>
                    </div>
                    <button class="button-1" type="submit">Bericht versturen</button>
                </form>
            </div>
            

        </section>


    </main>
    
</template>





<script>
export default {
    layout: "home",
    methods: {
        async test () {


            // const { name, emailadress, phonenumber, message } = Object.fromEntries(new FormData(event.target));



            // await fetch("https://jennitaphotography.nl/server/test", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         items: this.$store.getters.cartItems.map(item => ({ "id" : item.id, "quantity" : item.quantity })),
            //         form: [{ 
            //             name: name,
            //             emailadress: emailadress,
            //             phonenumber: phonenumber,
            //             message: message,
            //         }]
            //     }),
            // })

            // .then(response => {           
            //     if (response.ok) return response.json()
            //     return response.json().then(json => Promise.reject(json))
            // })

            // .then(({ url, error }) => {

            //     if(error) {
            //         const errors = error;
            //         errors.forEach(error => {
            //             if (error.message != true) {
            //                 this.errors.push(error);
            //                 this.loading = false;
            //             }
            //         });
            //     } else {
            //         window.location = url;
            //         this.loading = false;
            //     }
            // }) 

            // .catch(e => {
            //     console.log("Error catch 1: ", e);
            //     console.log("Error catch 2: ", e.error);
            //     console.log("Error catch 3: ", e.message);
            // })
        }
    },
    mounted () {
        // const form = document.querySelector("form");
        // const formChilds = document.querySelectorAll("form input");

        // function filled () {
        //     formChilds.forEach((item) => {
        //         item.classList.remove("filled");

        //         if ( item.value ) {
        //             item.classList.add("filled");
        //         } else {
        //             item.classList.remove("filled");
        //         }  
        //     })
        // }
        // setTimeout(function() {
        //     filled();
	    // }, 300);

        // form.addEventListener("input", () => {
        //     filled();
        // });
    }
}
</script>
<style scoped>


/* ########## HEADER ########## */
.hero {
    width: 100%;
    height: 100%;
    background-size: cover;
    max-width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: bottom;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
}

.hero img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}


.hero__overlay {
    background: linear-gradient( rgba(0 0 0 / 70%) 100%, rgba(0 0 0 / 70%) 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
}


.hero__title {
    z-index: 3;
    margin: 15% 0 7% 0;
    width: fit-content;
    max-width: var(--website-width);
}

.hero__title h1 {
    color: white;
    font-size: 80px;
    width: fit-content;
}





/* ########## CONTACT ########## */


.contact {
    z-index: 3;
    display: flex;
    padding: 3.5% 4.5%;
    margin-bottom: 7%;
    max-width: var(--website-width);
    height: fit-content;

    background: rgba(255, 255, 255, 0.80);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    /* backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px); */
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
}

/* .contact h2, .contact strong {
    color: rgba(255 255 255 / 100%);
} */

/* .contact p {
    color: rgba(255 255 255 / 90%);
} */


/* ########## CONTACT INFO ########## */

.contact__info {
    width: 50%;
    padding-right: 5%;
}

.contact__info__title {
    margin-bottom: 7%;
}

.contact__info__intro {
    margin-bottom: 40px;
}

.contact__info__label {
    letter-spacing: 1.2px;
}

.contact__info a {
    display: flex;
    align-items: center;
    cursor: pointer;
}








/* ########## CONTACT FORM ########## */

.contact__form {
    margin-left: 5%;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
}


/* ### TITLE ### */
.contact__form__title {
    margin-bottom: 1%;
}


/* ### INTRO ### */
.contact__form__intro {
    margin-bottom: 7.5%;
}


/* ### FORM INPUT LABEL ### */
.contact__form__wrap__label {
    position: absolute;
    left: 15px;
    top: 15px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    /* color: rgba(255 255 255 / 70%); */
    transition: all 300ms ease-in-out;
    transform-origin: bottom left;
    pointer-events: none;
    background: transparent;
}





/* ### FORM WRAP ### */
.contact__form__wrap {
    margin: 15px 0px;
    position: relative;
    width: 100%;
}


/* ### FORM WRAP INPUT ### */
.contact__form__wrap input, 
.contact__form__wrap textarea {
    /* border-radius: var(--border-radius); */
    /* border: 1px solid #999; */
    padding: 13px 15px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: transparent;
    /* color: white; */
    border: none;
    border-bottom: 1px solid var(--clr-1-3);
}

.contact__form__wrap__textarea {
    resize: vertical;
    min-height: 150px;
}


/* ### FORM INPUT ### */
.contact__form__wrap__input:focus ~ .contact__form__wrap__label,
.contact__form__wrap__textarea:focus ~ .contact__form__wrap__label {
    transform: scale(.75) translate(1px, -36px);
}


/* ### BUTTON ### */
.contact__form button {
    margin-top: 10%;
}











</style>