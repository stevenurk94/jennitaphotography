<template>
    <div class="breadcrumbs">
        <span v-if="cartbreadcrumbs" class="arrow">&#8592;</span>
        <span class="breadcrumbs__desktop" v-for="(item, index) in items" :key="index">
            <NuxtLink v-if="item.url" :to="item.url" class="underline">{{ item.label }}</NuxtLink>
            <span v-else class="inactive">{{ item.label }}</span>
            <!-- <span v-if="index < (items.length - 1)" class="arrow">&#8250;</span> -->
            <IconsArrow v-if="index < (items.length - 1)" />
        </span>
        <span class="breadcrumbs__mobile">
            <span class="arrow">&#8592;</span>
            <NuxtLink v-if="this.$route.path == '/kaarten' || this.$route.path == '/kaarten/' " to="/">Terug</NuxtLink>
            <NuxtLink v-else to="/kaarten/">Terug</NuxtLink>
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
    display: flex;
}

span {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: var(--clr-1-1);
    margin-right: 5px;
    display: flex;
    align-items: center;
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

.breadcrumbs__desktop svg {
    width: 12px;
    height: 12px;
    margin: 0 5px 0 8px;
    fill: var(--clr-1-1);
}

.breadcrumbs__desktop svg path {
    fill: var(--clr-1-1);
}


.breadcrumbs__mobile {
    display: none;
}


@media only screen and (max-width: 545px) {
    .breadcrumbs__mobile {
        display: flex;
    }
    .breadcrumbs__desktop, .breadcrumbs > span:first-child {
        display: none;
    }
}

</style>