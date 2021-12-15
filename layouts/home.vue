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
    } else {
      document.querySelector(".notification-label").style.display = "none";
    }
  }
}

</script>
