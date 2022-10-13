<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <slot />
      <div class="fixed z-10 left-0 right-0 spotlight opacity-100" />
    </div>
  </div>
</template>
<style>
.spotlight {
  background: linear-gradient(45deg, #ff006b 0%, #80449a 50%, #4167b0 100%);
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
  filter: blur(20vh);
  height: 50vh;
  bottom: -40vh;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
