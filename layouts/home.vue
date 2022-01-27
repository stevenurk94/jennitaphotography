<template>
    <div>
        <header>
            <Header />
        </header>
        <Nuxt />
        <Footer />
    </div>
</template>

<style scoped>

main {
  padding: 0;
}

header {
  background: transparent;
}

header.scrolled {
  background: white;
  box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0/12%);
}

</style>
