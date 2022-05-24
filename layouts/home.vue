<template>
    <div>

		<CookieBanner />

		<header>
			<Header />
		</header>
      <Nuxt />
      <Footer />
    </div>
</template>

<style scoped>


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
	padding: 0;
	position: relative;
}

header {
	background: transparent;
}

header.scrolled {
	background: white;
	box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0/12%);
}

</style>
