<template>

<main>
  <HomeSlider />
  <section class="home">
    <div>
      <h1>Steun het goede doel:<br>Kom over en help</h1>
      <NuxtLink class="button-1" to="/kaarten/">Direct bestellen</NuxtLink>
    </div>
  </section>

  <Intro />
  <!-- <CardsCollage /> -->
    
</main>


</template>


<style scoped>

.home {
  background: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 50%));
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 100%;
  display: flex;
  z-index: 1;
}

.home div {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 90%;
  background: rgba(255, 255, 255, 0.158);
  padding: 50px;
  border-radius: var(--border-radius);
  backdrop-filter: blur(3px);
}

.home div h1 {
  color: white;
  font-size: 50px;
  margin-bottom: 50px;
  line-height: 1.2;
}

</style>



<script>
export default {
  layout: "home"
}
</script>