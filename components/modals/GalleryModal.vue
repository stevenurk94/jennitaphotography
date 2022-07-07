<template>
    <transition name="fade">
        <div class="modal" v-show="showImageModal" @click="$emit('closeImageModal')">
            <PagepartsProductGallery :PhotoCard="PhotoCard.image" :Name="Name" />
        </div>
    </transition>
</template>

<script>
export default {
    props: ["PhotoCard", "showImageModal", "Name"],

}
</script>
<style scoped>

.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    transition: all 3s ease-in-out;
}




.fade-enter-active, 
.fade-leave-active {
    transition: all 300ms ease-in-out;
}


.fade-enter, 
.fade-leave-to {
    opacity: 0;
}


</style>