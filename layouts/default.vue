<template>
  <div>
    <header>
      <Header />
    </header>
    
    <Nuxt />

    <Footer />
  </div>
</template>




<script>

export default {

  computed: {
    cartItemCount () {
      return this.$store.getters.cartItemCount
    },
  },

  mounted: function() {

    if (this.cartItemCount < 100 && this.cartItemCount != 0) {
      document.querySelector(".notification-label").innerHTML = this.cartItemCount;
      document.querySelector(".notification-label").style.display = "flex";
    } else if (this.cartItemCount >= 100) {
      document.querySelector(".notification-label").innerHTML = "99+";
    } else if (this.cartItemCount == 0) {
      document.querySelector(".notification-label").style.display = "none";
    }
  }
}

</script>














<style>

:root {
  --bg: #fff;
  --boxshadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0 / 12%);
}

* {
  text-decoration: none;
  list-style: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;

}

*, *::before, *::after {
  box-sizing: border-box;
}


main {
  padding: 100px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
}



h1 {
  font-family: 'IBM Plex Serif', serif;
  font-size: 40px;
  font-weight: 700;
}

h2 {
  font-family: 'IBM Plex Serif', serif;
  font-size: 30px;
  /* font-size: 20px;
  font-weight: 100;
  line-height: 1.2rem; */
}

h3 {
  font-family: 'IBM Plex Serif', serif;
  font-size: 20px;
  font-weight: 600;
}

p {
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
}



.breadcrumbs, section {
  max-width: 1523px;
  width: 95%;
}



.button-1 {
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  color: white;
  padding: 0.5em 1.25em;


  /* background: linear-gradient(#567670, #3a524d); */

  background-color: #567670;
  background-image: linear-gradient(rgb(0 0 0 / 5%), rgb(0 0 0 / 35%));

  font-family: 'Work Sans', sans-serif;
  font-size: 1.5em;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  transition: all 500ms ease-in-out;
  box-shadow: 1px 1px rgb(0 0 0 / 16%), 0 2px 5px rgb(0 0 0 / 8%);
  /* margin: 10px 0; */
  overflow: hidden;
  font-weight: 500;
  
}

.button-2 {
  cursor: pointer;
  padding: 0.5em 1.25em;
  text-align: center;
  white-space: nowrap;
  color: #567670;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.5em;
  border: 1.5px solid #567670;
  transition: all 450ms ease-in-out;
  margin: 10px 0;
}

.button-2:hover {
  background: #3a524d;
  border: 1.5px solid #3a524d;
 }


</style>