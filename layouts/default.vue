<template>
  <div>
    <header>
      <Header />
    </header>
    
    <Nuxt />

    <Footer />
  </div>
</template>


<style>

:root {
  
  --clr-1-1: #3A524D;
  --clr-1-2: #3A524D65; /* #3A524D62 & #3a524DB4*/
  --clr-1-3: #3A524D3D;
  --clr-1-4: #3A524D15;

  --clr-2-1: #C8764E;
  --clr-2-2: #E8A68E; /*#bd570f */
  --clr-2-3: #cf947e4f;

  --clr-3-1: #333;
  --clr-3-2: #999;

  --clr-bg: #fbfbfb;
  --border-radius: 5px;
  --website-width: 1286px;
  


  --boxshadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0 / 12%);
  


}

* {
  text-decoration: none;
  list-style: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

*, ::before, ::after {
  box-sizing: border-box;
}


main {
  padding: 100px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
}



/* ########### FONTS ############ */

h1, h2, h3, h4, h5, h6 {
  font-family: 'IBM Plex Serif', serif;
  color: var(--clr-3-1);
}

p, a {
  font-family: 'Work Sans', sans-serif;
  color: var(--clr-3-1);
}

p {
  line-height: 1.7;
  font-size: 17px;
  font-weight: 400;
}


h1 {
  font-size: calc(23px + 0.6vmax);
  font-weight: 800;
}

h2 {
  font-size: 26px;
  padding-bottom: 8px;
  font-weight: 700;
}

h3 {
  font-size: 23px;
  font-weight: 600;
  padding-bottom: 8px;
}


/*

WAAR WORDT WAT GEBRUIKT?

H1: 
-- Homepage: titel
-- Winkelwagen: titel
-- Overzichtspagina: titel
-- Productpagina: productnaam-titel

H2:
-- Homepage: voorstelblok
-- Afrekenformulier: titels + afrekenoverzicht: alle titels + productnamen
-- Winkelwagen-modal: modal-titel + productnaam

H3: 
-- Overzichtspagina: productnaam + categorienaam
-- Productpagina: categorienaam
-- Winkelwagen-modal: categorienaam
-- Winkelwagen: categorienaam + summary: subtotaal
-- Overzichtspagina: categorienaam



*/






a {
  font-weight: 400;
  font-size: 15px;
}



/* ############################## */

section, .breadcrumbs, .StepIndicator {
  max-width: var(--website-width);
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
  transition: all 200ms ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1.3px;

  border: none;
  color: white;
  background: var(--clr-2-1);
  padding: 15px 33px;
}

.button-1:hover {
  box-shadow: 0 4px 11px var(--clr-2-3);
  transform: translateY(-3px);
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
  letter-spacing: 1.3px;

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