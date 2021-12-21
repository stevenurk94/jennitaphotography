<template>
    <div class="breadcrumbs">
        <span v-if="cartbreadcrumbs" class="arrow">&#8592;</span>
        <span v-for="(item, index) in items" :key="index">
            <NuxtLink v-if="item.url" :to="item.url">{{ item.label }}</NuxtLink>
            <span v-else class="inactive">{{ item.label }}</span>
            <span v-if="index < (items.length - 1)" class="arrow">&#8250;</span>
        </span>
    </div>
    
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        cartbreadcrumbs: {
            required: true
        }
    }
}
</script>

<style scoped>

div {
    margin: 20px 0px;
}

span {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #3A524D;
    margin-right: 5px;
}

a {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
}

a:hover {
    text-decoration: underline;
}

a:visited {
    color: #3A524D;
}

span.inactive {
    color: #B9B9B9;
}

span.arrow {
    font-size: 22px;
    margin-left: 2px;
}

</style>