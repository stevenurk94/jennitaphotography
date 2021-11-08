<template>
    <div>
        <header>
            <Header />
        </header>
        <Nuxt />
    </div>
</template>

<style scoped>
header {
    background: transparent;
}

header.scrolled {
    background: white;
    box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0/12%);
}

</style>