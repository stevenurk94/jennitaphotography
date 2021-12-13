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
  <section class="section">
    <Intro />

  </section>
    
</main>


</template>


<style scoped>








.home {
  background: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 50%)), url("~/static/img/kaart0014.jpeg");
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





</style>



<script>
export default {

  layout: "home"
  
}
</script>