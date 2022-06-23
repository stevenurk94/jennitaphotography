<template>
	<main>

		<SectionsHero2 />
		<SectionsHeroSlider />
		<SectionsIntroduction />
		<SectionsReviews />
		<!-- <SectionsInstaCollage /> -->
		<!-- <SectionsInstaCollage2 /> -->
		<!-- <SectionsInstaCollage3 /> -->
		<!-- <SectionsInstaCollage4 /> -->


		
			
	</main>


</template>


<script>
export default {
	layout: "home",
	head () {
        return {
            meta: [
                {  hid: "description", name: "description", content: "Steun het goede doel | Keuze uit meer dan 50 prachtige fotokaarten | Vind jouw leuke fotokaart bij Jennita Photography | Blanco, Geboorte & Verjaardag" },
                
                { property: "og:title", content: "Fotokaarten" },
                { property: "og:image", content: "https://www.jennitaphotography.nl" + require("~/static/img/jpeg/640/herfst-6.jpeg") },
                { property: "og:url", content: "https://jennitaphotography.nl/" },
                { property: "og:type", content: "website" },
                { property: "og:description", content: "Steun het goede doel | Keuze uit meer dan 50 prachtige fotokaarten | Vind jouw leuke fotokaart bij Jennita Photography | Blanco, Geboorte & Verjaardag" },

                { name: "twitter:title", content: "Fotokaarten" },
                { name: "twitter:image", content: "https://www.jennitaphotography.nl" + require("~/static/img/jpeg/640/herfst-6.jpeg") },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:description", content: "Steun het goede doel | Keuze uit meer dan 50 prachtige fotokaarten | Vind jouw leuke fotokaart bij Jennita Photography | Blanco, Geboorte & Verjaardag" },
            ]
        }
    },
}
</script>



<style scoped>

main {
    margin-bottom: -1px;
}

</style>