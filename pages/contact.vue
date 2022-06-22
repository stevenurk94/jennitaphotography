<template>
    <main>
        <section class="hero">
            <h1 class="hero__title accent-center-white">Contact</h1>
            <div class="hero__overlay"></div>

            <div>
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
                        @load="removeBlur"
                        src="~/static/img/jpeg/1024/herfst-6.jpeg" 
                        alt="herfst 6">
                </picture>
            </div>
            

        </section>
        <section class="contact">
            <div class="contact__info">
                <h2 class="contact__info__title accent-left">Contact</h2>
                <p class="contact__info__intro">Heb je vragen of opmerkingen? Dan kun je contact met ons opnemen via onderstaand emailadres of het contactformulier op deze pagina.</p>

                <p><strong>EMAIL</strong></p>
                <a class="underline" href="mailto:info@jennitaphotography.nl"><p>info@jennitaphotography.nl</p></a>
            </div>
            <form class="contact__form">
                <h2 class="contact__form__title">Contactformulier</h2>
                <p class="contact__form__intro">Vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.</p>
                <div class="contact__form__input">
                    <input type="text">
                    <span class="contact__form__input__label">Naam</span>
                </div>
                <div class="contact__form__input">
                    <input type="text">
                    <span class="contact__form__input__label">E-mailadres</span>
                </div>
                <div class="contact__form__input">
                    <input type="text">
                    <span class="contact__form__input__label">Telefoonnummer</span>
                </div>
                <div class="contact__form__input">
                    <textarea></textarea>
                    <span class="contact__form__input__label">Bericht</span>
                </div>
                <button class="button-1" type="submit">Bericht versturen</button>
            </form>
        </section>

    </main>
    
</template>

<script>
export default {
    layout: "home",
}
</script>
<style scoped>

/* ########## HEADER ########## */
.hero {
    width: 100%;
    height: 100%;
    background-size: cover;
    max-width: 100%;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: bottom;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
    clip-path: inset(0);
}

.hero > div {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
}

.hero__title {
    color: white;
    font-size: 80px;
    width: fit-content;
    z-index: 3;
    margin-top: 5%;
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

.hero img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    object-position: bottom;
}



main {
    background: var(--clr-3-3);
}






/* ########## CONTACT ########## */


section span {
    width: 130px;
    height: 2px;
    background-color: rgba(255 255 255 / 70%);
    margin-bottom: 100px;
    border-radius: var(--border-radius);
}

.contact {
    display: flex;
    padding: 100px 0;

}




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

.contact__info a {
    display: flex;
    align-items: center;
    cursor: pointer;
}






/* ########## CONTACT FORM ########## */

.contact__form {
    background: white;
    margin-left: 5%;
    width: 50%;
    padding: 4% 5%;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    height: fit-content;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.contact__form__title {
    margin-bottom: 1%;
}

.contact__form__intro {
    margin-bottom: 7.5%;
}


.contact__form__input {
    margin: 20px 0px;
    position: relative;
    width: 100%;
}

.contact__form button {
    margin-top: 10%;
}

.contact__form__input input, 
.contact__form__input textarea {
    border-radius: var(--border-radius);
    border: 1px solid #999;
    padding: 13px 15px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    transition: all 300ms ease-in-out;
    background: transparent;
}

.contact__form__input textarea {
    resize: vertical;
    min-height: 150px;
}

.contact__form__input__label {
    position: absolute;
    left: 15px;
    top: 15px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    background: white;
    color: #555;
    transition: all 300ms ease-in-out;
    transform-origin: bottom left;
    pointer-events: none;
    height: fit-content;
    width: fit-content;
    background-color: transparent;
}


































/* 
section:last-child {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

section h1 {
    color: white;
    font-size: 80px;
    width: fit-content;
    margin-bottom: 10px;
}

section span {
    width: 130px;
    height: 2px;
    background-color: rgba(255 255 255 / 70%);
    margin-bottom: 100px;
    border-radius: var(--border-radius);
}

.contact {
    display: flex;
    padding: 100px 0;

}

.contact__left {
    width: 50%;
    padding-right: 5%;
}

.contact__left h2, .contact__left p {
    color: white;
    opacity: 80%;
}


.contact__form {
    width: 50%;
    padding: 5%;
    color: white;



    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.contact__form h2, .contact__form p, .contact__form__input__label {
    color: white;
    opacity: 80%;
}

.contact__form__input {
    margin: 10px 0px;
    position: relative;
    width: 100%;
    
}

.contact__form__input input, .contact__form__input textarea {
    border-radius: var(--border-radius);
    border: 1px solid #999;
    padding: 13px 15px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    transition: all 300ms ease-in-out;
    background: transparent;



        background: rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.contact__form__input textarea {
    resize: vertical;
    min-height: 150px;
}

.contact__form__input__label {
    position: absolute;
    left: 15px;
    top: 15px;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    background: white;
    color: #555;
    transition: all 300ms ease-in-out;
    transform-origin: bottom left;
    pointer-events: none;
    height: fit-content;
    width: fit-content;
    background-color: transparent;
    color: white;
}
 */




</style>