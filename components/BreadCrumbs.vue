<template>
    <h2>
        <span v-for="(item, index) in items" :key="index">
            <NuxtLink v-if="item.url" :to="item.url">{{ item.label }}</NuxtLink>
            <span v-else>{{ item.label }}</span>
            <span v-if="index < (items.length - 1)">&gt;</span>
        </span>
    </h2>
    
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