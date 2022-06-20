<template>
    <section>
        <div class="home__block">
            <h1>Steun het goede doel</h1>
            <h2>Kom over en help</h2>
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

.home__block {
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	margin: auto;
	max-width: 90%;
	border-radius: var(--border-radius);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.home__block h1 {
	color: white;
	font-size: 50px;
	line-height: 1.3;
	text-align: center;
	margin-bottom: 1%;
}

.home__block h2 {
	color: white;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 10px 0 45px 0;
	text-align: center;
}

@media only screen and (max-width: 767px) {
	.home__block h1 {
		font-size: calc(32px + 2vmax);
		line-height: 1.1;
		margin-bottom: 5%;
	}
}

</style>

