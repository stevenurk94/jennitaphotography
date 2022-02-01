<template>
    <section>
        <div class="wrapper">
            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">

            <div class="wrapper__slide first">
                <img src="~/assets/img/kaart0018.jpeg" alt="">
                
            </div>
            <div class="wrapper__slide">
                <img src="~/assets/img/kaart0019.jpeg" alt="">

            </div>
            <div class="wrapper__slide">
                <img src="~/assets/img/kaart0016.jpeg" alt="">

            </div>
            <div class="wrapper__slide">
                <img src="~/assets/img/kaart0014.jpeg" alt="">

            </div>

            <div class="nav-auto">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="nav-manual">
                <label for="radio1"></label>
                <label for="radio2"></label>
                <label for="radio3"></label>
                <label for="radio4"></label>
            </div>
        </div>
    </section>
</template>


<style scoped>

section {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
}

.wrapper {
    width: 500%;
    display: flex;
    height: 100%;
}

input[type="radio"] {
    display: none;
}


/* ########## SLIDES ########## */

.wrapper__slide {
    width: 20%;
    /* height: 200%; */
    transition: 2s;
}

.wrapper__slide img {
    /* width: 800px;
    height: 500px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
}


/* ########### NAVIGATION MANUAL ########## */

.nav-manual {
    position: absolute;
    width: fit-content;
    display: flex;
    margin: auto auto 3.5% auto;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
}

.nav-manual label {
    border: 1.5px solid rgba(255 255 255 / 90%);
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s ease-in-out;
}

.nav-manual label:not(:last-child) {
    margin-right: 40px;
}

.nav-manual label:hover {
    background: rgba(255 255 255 / 90%);
}

#radio1:checked ~ .first {
    margin-left: 0;
}

#radio2:checked ~ .first {
    margin-left: -20%;
}

#radio3:checked ~ .first {
    margin-left: -40%;
}

#radio4:checked ~ .first {
    margin-left: -60%;
}



/* ############ NAVIGATION AUTO ########### */

.nav-auto {
    position: absolute;
    display: flex;
    width: fit-content;
    margin: auto auto 3.5% auto;
    left: 0;
    right: 0;
    bottom: 0;
}

.nav-auto div {
    border: 1.5px solid rgba(255 255 255 / 90%);
    padding: 5px;
    border-radius: 10px;
    transition: 1s ease-in-out;
}

.nav-auto div:not(:last-child) {
    margin-right: 40px;
}

#radio1:checked ~ .nav-auto div:nth-child(1),
#radio2:checked ~ .nav-auto div:nth-child(2),
#radio3:checked ~ .nav-auto div:nth-child(3),
#radio4:checked ~ .nav-auto div:nth-child(4) {
    background: rgba(255 255 255 / 90%);
}


</style>



<script>
export default {
    
    mounted: function () {

        let counter = 1;

        setInterval(function () {
            document.getElementById("radio" + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 7000);
    }
}
</script>