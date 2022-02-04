<template>
    <main>
        <StepIndicator :items="stepindicator" />
        <section>
            <h1>Beste Steven, bedankt voor je bestelling!</h1>
        </section>
    </main>
</template>


<script>
export default {
    computed: {
        stepindicator() {
            return [
                {
                    label: "Gegevens",
                    url: "/winkelwagen/gegevens"
                },
                {
                    label: "Verzending",
                    url: "/winkelwagen/verzending"
                },
                {
                    label: "Betaalwijze",
                    url: "/winkelwagen/betaalwijze"
                },
                {
                    label: "Overzicht",
                    url: "/winkelwagen/overzicht"
                }
            ]
        }
    }
}
</script>


<style scoped>

section {
    max-width: 800px;
}

</style>