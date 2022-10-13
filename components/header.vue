<script lang="ts" setup>
import { Motion } from "motion/vue";
import { spring } from "motion";

const dscList = ["next generation", "A Engineering Team", "Software House"];

const description = ref(dscList[0]);
const tmp = ref(0);
const polling = ref();

onMounted(() => {
  polling.value = setInterval(() => {
    if (tmp.value > dscList.length - 1) tmp.value = 0;
    description.value = dscList[tmp.value];
    console.log(tmp.value);
    tmp.value++;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(polling.value);
});
</script>
<template>
  <div class="opacity-80">
    <ClientOnly>
      <div class="grid sm:grid-cols-2 gap-3">
        <div>
          <Motion
            :initial="{ opacity: 0, scale: 0 }"
            :animate="{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.5,
                duration: 5,
                easing: spring({
                  stiffness: 400,
                  damping: 12,
                }),
              },
            }"
            :exit="{ opacity: 0, x: -50 }"
          >
            <img
              src="~/assets/images/logo.png"
              class="max-w-xs mx-auto w-full"
            />
          </Motion>
        </div>
        <div class="my-auto font-silkscreen text-center">
          <Motion
            :initial="{ opacity: 0, x: -120 }"
            :animate="{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                duration: 5,
                easing: spring({
                  stiffness: 300,
                  damping: 10,
                }),
              },
            }"
            :exit="{ opacity: 0, x: -50 }"
          >
            <h2 class="text-5xl font-bold">MultiLabX</h2>
            <Motion
              :key="description"
              :initial="{ opacity: 0, y: -50 }"
              :animate="{
                opacity: 1,
                y: 0,
              }"
              :exit="{ opacity: 0, y: 50 }"
            >
              <h4 class="text-2xl font-light opacity-80">{{ description }}</h4>
            </Motion>
            <h4 class="text-md font-light opacity-70">
              new team, high quality.
            </h4>
            <h4 class="text-sm font-light opacity-50">Coming soon.</h4>
          </Motion>
        </div>
      </div>
    </ClientOnly>
    <div class="flex justify-center font-ChakraPetch space-x-2 mt-5"></div>
  </div>
</template>
<script></script>
