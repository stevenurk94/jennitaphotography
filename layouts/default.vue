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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}



h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  text-transform: uppercase;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 100;
  line-height: 1.2rem;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.2rem;
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

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  text-decoration: none;
  border-radius: 4px;
  transition: all 500ms ease-in-out;
  box-shadow: 1px 1px rgb(0 0 0 / 16%), 0 2px 5px rgb(0 0 0 / 8%);
  margin: 10px 0;
  
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