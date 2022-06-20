<template>
    <section>
        <div>
            <h1>Steun het goede doel</h1>
            <h2 class="accent-center-white">Kom over en help</h2>
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
	font-size: calc(53px + 1.8vmax);
	/* font-size: 80px; */
	line-height: 1.3;
	/* margin-bottom: calc(1% + 10px); */
	margin-bottom: 30px;
    font-weight: 600;
	width: 100%;
	text-align: center;
}

h2 {
	color: white;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 10px 0 65px 0;
    font-weight: 500;
    /* font-size: 30px; */
	font-size: calc(20px + 1vmax);
	width: fit-content;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}


a {
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
}


@media only screen and (max-width: 716px) {
	h1 {
		/* font-size: calc(32px + 2vmax); */
		font-size: calc(5px + 7.5vmax);
		line-height: 1.1;
		/* margin-bottom: calc(5% + 15px); */
	}
	h2 {
		padding-bottom: 12px;
	}
}


</style>

