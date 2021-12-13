<template>
    <div>
        <span v-for="(item, index) in items" :key="index">
            <NuxtLink v-if="item.url" :to="item.url">{{ item.label }}</NuxtLink>
            <span v-else class="inactive">{{ item.label }}</span>
            <span v-if="index < (items.length - 1)" class="arrow">❯</span>
        </span>
    </div>
    
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>

div {
    width: 80%;
    margin: 20px 0px;
}

span {
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    font-weight: 450;
    color: #3A524D;
    margin-right: 5px;
}

a:visited {
    color: #3A524D;
}

span.inactive {
    color: #B9B9B9;
}

span.arrow {
    font-size: 15px;
    margin-left: 2px;
}

</style>