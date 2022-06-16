<template>
    <section>
        <div>
            <h1>Steun het goede doel</h1>
            <h2 class="accent-left-white">Kom over en help</h2>
            <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bekijken</NuxtLink>
        </div>
    </section>
</template>



<style scoped>



section {
	background: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 50%));
	position: relative;
	width: 100%;
	height: 100vh;
	max-width: 100%;
	display: flex;
	z-index: 1;
}

section > div {
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	margin: auto;
	max-width: var(--website-width);
    width: 95%;
	border-radius: var(--border-radius);

}

h1 {
	color: white;
	font-size: 88px;
	line-height: 1.3;
	margin-bottom: 1%;
    font-weight: 600;
}

h2 {
	color: white;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 10px 0 65px 0;
    font-weight: 500;
    font-size: 30px;
}

@media only screen and (max-width: 767px) {
	h1 {
		font-size: calc(32px + 2vmax);
		line-height: 1.1;
		margin-bottom: 5%;
	}
}


</style>

