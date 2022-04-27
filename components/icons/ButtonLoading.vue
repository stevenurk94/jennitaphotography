<template>
    <span class="loadingRing">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </span>
</template>

<style scoped>

.loadingRing {
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 20px;
}
.loadingRing span {
  /* display: flex; */
  position: absolute;
  width: 20px;
  height: 20px;
  
  border: 2.5px solid white;
  border-radius: 50%;
  animation: loadingRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.loadingRing span:nth-child(1) {
  animation-delay: -0.45s;
}
.loadingRing span:nth-child(2) {
  animation-delay: -0.3s;
}
.loadingRing span:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loadingRing {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>