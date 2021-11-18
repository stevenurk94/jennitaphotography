<template>

<main>
  <section class="home">
    <div>
      <h1>Steun het goede doel:<br>Kom over en help</h1>
    </div>
    <div>
      <NuxtLink class="button-1" to="/kaarten/">Direct bestellen</NuxtLink>
    </div>

  </section>
  <section class="section-1">
    <div>
      <!-- <div class="versiering_top"></div> -->
      <h1>Foto's downloaden</h1>
      <h2>Download hier de collectie van 20 foto's voor het goede doel: Kom over en help.</h2>
      <NuxtLink class="button-2" to="/">Direct downloaden</NuxtLink>

      <!-- <div class="versiering_bottom"></div> -->
    </div>

    <div class="img_collection">
      <img class="img_standing" src="~/static/img/image00001.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00002.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00003.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00004.jpeg" alt="">
      <img class="img_laying" src="~/static/img/image00013.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00005.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00006.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00007.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00008.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00009.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00010.jpeg" alt="">
      <img class="img_laying" src="~/static/img/image00011.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00012.jpeg" alt="">
      <img class="img_standing" src="~/static/img/image00014.jpeg" alt="">
    </div>
  </section>
    
</main>


</template>


<style scoped>








.home {
  background: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 50%)), url("~/static/img/image00031.jpeg");
  /* background: linear-gradient(
    to top, black 
    0%, rgba(0, 0, 0, 0.738) 
    19%, rgba(0, 0, 0, 0.541) 
    34%, rgba(0, 0, 0, 0.382) 
    47%, rgba(0, 0, 0, 0.278) 
    56.5%, rgba(0, 0, 0, 0.194) 
    65%, rgba(0, 0, 0, 0.126) 
    73%, rgba(0, 0, 0, 0.075) 
    80.2%, rgba(0, 0, 0, 0.042) 
    86.1%, rgba(0, 0, 0, 0.021) 
    91%, rgba(0, 0, 0, 0.008) 
    95.2%, rgba(0, 0, 0, 0.002) 
    98.2%, transparent 100%), 
    url("~/static/img/image00013.jpeg"); */

    /* background: linear-gradient(
    to top, rgb(58, 82, 77, 100%) 
    0%, rgba(58, 82, 77, 0.738) 
    19%, rgba(58, 82, 77, 0.541) 
    34%, rgba(58, 82, 77, 0.382) 
    47%, rgba(58, 82, 77, 0.278) 
    56.5%, rgba(58, 82, 77, 0.194) 
    65%, rgba(58, 82, 77, 0.126) 
    73%, rgba(58, 82, 77, 0.075) 
    80.2%, rgba(58, 82, 77, 0.042) 
    86.1%, rgba(58, 82, 77, 0.021) 
    91%, rgba(58, 82, 77, 0.008) 
    95.2%, rgba(58, 82, 77, 0.002) 
    98.2%, transparent 100%), 
    url("~/static/img/image00006.jpeg"); */

  /* background: url("~/static/img/image00006.jpeg"); */
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
}

.home div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 90%;
  width: 90%;
}







/* ############# SECTION 1 ########## */

.section-1 {
  background: white;
  /* background-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 0%)); */
  /* background-image: linear-gradient(rgb(58 82 77 / 100%), rgb(58 82 77 / 0%)); */
  padding: 200px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.section-1 > div:first-child {
  text-align: center;
  width: fit-content;
  padding: 75px;
  /* border-bottom: 1px solid rgb(0 0 0 / 50%); */
  position: relative;
}

.section-1 .versiering_top {
  position: absolute;
  border-style: solid solid none;
  border-width: 1px;
  border-color: black;
  top: 0;
  right: 0;
  left: 0;
  bottom: auto;
  margin: auto;
  width: 90%;
  height: 90%;
  height: 20%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.section-1 .versiering_bottom {
  position: absolute;
  border-style: none solid solid;
  border-width: 1px;
  border-color: black;
  top: auto;
  right: 0;
  left: 0;
  bottom: 0;
  width: 90%;
  height: 90%;
  height: 20%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: auto;
}


.section-1 .img_collection {
  display: flex;
  flex-wrap: wrap;
  max-width: 95%;
  padding: 100px 0;
  justify-content: space-between;
}

/* .section-1 div .img_half {
  padding: 5px 5px;
  max-width: 47%;
  min-height: 250px;
  max-height: 250px;
  vertical-align: middle;

} */

.section-1 div .img_standing {
  border-radius: 5px;
  object-fit: cover;
  width: calc(50% - 10px);
  min-height: 250px;
  max-height: 250px;
  margin: 5px;
  vertical-align: middle;
}

.section-1 div .img_laying {
  border-radius: 5px;
  object-fit: cover;
  min-width: calc(100% - 10px);
  min-height: 250px;
  max-height: 250px;
  margin: 5px;
}

















</style>



<script>
export default {

  layout: "home"
  
}
</script>