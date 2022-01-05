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
  

  --clr-1-1: #3A524D;
  --clr-1-2: #3A524D65; /* #3A524D62 & #3a524DB4*/
  --clr-1-3: #3A524D3D;
  --clr-1-4: #3A524D15;

  --clr-bg: #F8FBFE;
  


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
}

h3 {
  font-family: 'IBM Plex Serif', serif;
  font-size: 20px;
  font-weight: 600;
}

p {
  font-family: 'Work Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
}

a {
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: black;
}


section, .breadcrumbs, .StepIndicator {
  max-width: 1523px;
  width: 95%;
}









.button-1 {
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  outline: none;
  min-height: 40px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden; 
  transition: all 500ms ease-in-out;
  text-transform: uppercase;

  border: none;
  color: white;
  background: var(--clr-1-1);
  padding: 15px 33px;
}

.button-2 {
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  outline: none;
  min-height: 40px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden; 
  transition: all 500ms ease-in-out;
  text-transform: uppercase;

  border: 1px solid var(--clr-1-1);
  color: var(--clr-1-1);
  background: #3a524d15;
  padding: 13px 33px;
}

.button-2:hover {
  background: #3a524d67;
}




/* GENERAL CSS SETTINGS */

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


</style>