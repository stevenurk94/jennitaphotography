<template>

<main>
  <section class="home">
    <div>
      <h1>Hier komt dan een leuk tekstje te staan</h1>
      <h2>En dan nog een ander leuk klein tekstje eronder</h2>
    </div>
    <div>
      <NuxtLink class="button" to="/">Direct bestellen</NuxtLink>
    </div>
  </section>
  <section class="test"></section>
    
</main>


</template>


<style scoped>



h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  text-transform: uppercase;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 300;
}

.button {
  cursor: pointer;
  padding: 0.5em 1.25em;
  text-align: center;
  white-space: nowrap;
  color: white;
  background: #567670;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  text-decoration: none;
  border-radius: 4px;
}






.home {
  background: linear-gradient(
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
    url("~/static/img/image00006.jpeg");
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
}


.test {
  height: 800px;
  background: black;
}



</style>















<script>
export default {}
</script>
