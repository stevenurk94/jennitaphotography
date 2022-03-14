<template>
    <div class="breadcrumbs">
        <span v-if="cartbreadcrumbs" class="arrow">&#8592;</span>
        <span class="breadcrumbs__desktop" v-for="(item, index) in items" :key="index">
            <NuxtLink v-if="item.url" :to="item.url">{{ item.label }}</NuxtLink>
            <span v-else class="inactive">{{ item.label }}</span>
            <span v-if="index < (items.length - 1)" class="arrow">&#8250;</span>
        </span>
        <span class="breadcrumbs__mobile">
            <span class="arrow">&#8592;</span>
            <NuxtLink v-if="this.$route.path == '/kaarten' || this.$route.path == '/kaarten/' " to="/">Terug</NuxtLink>
            <NuxtLink v-else to="/kaarten">Terug</NuxtLink>
        </span>
    </div>
    
</template>

<script>
export default {
    data () { 
        return {
            screenwidth: "",
        }
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
        cartbreadcrumbs: {
        }
    },
}
</script>

<style scoped>

div {
    margin: 15px 0 20px 0;
}

span {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: var(--clr-1-1);
    margin-right: 5px;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: var(--clr-1-1);
}

span.inactive {
    color: #B9B9B9;
}

span.arrow {
    font-size: 22px;
    margin-left: 2px;
}

.breadcrumbs__mobile {
    display: none;
}


@media only screen and (max-width: 545px) {
    .breadcrumbs__mobile {
        display: block;
    }
    .breadcrumbs__desktop, .breadcrumbs > span:first-child {
        display: none;
    }
}

</style>