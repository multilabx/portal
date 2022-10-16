<script lang="ts" setup>
import { Motion, Presence } from "motion/vue";
import { spring } from "motion";
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";
import VTypical from "vue-typical";
const { description, gotoDiv } = useHeader();
</script>
<template>
  <div class="opacity-80 h-screen grid content-center">
    <ClientOnly>
      <div class="grid sm:grid-cols-2 gap-3 group">
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
              src="~/assets/images/logoNewGen.png"
              class="mx-auto w-full max-w-xs"
            />
          </Motion>
        </div>
        <div class="my-auto font-silkscreen text-center sm:text-left">
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
            <VTypical
              class="text-5xl font-bold linear-wipe transition-all group-hover:scale-105"
              :steps="['M', 1500, 'MultiLabX', 3000]"
              :loop="1"
              :wrapper="'h2'"
            />
            <Presence>
              <Motion
                class="flex absolute justify-center sm:justify-start left-0 w-full"
                :key="description"
                :initial="{ opacity: 0, y: -50 }"
                :animate="{
                  opacity: 1,
                  y: 0,
                }"
                :exit="{ opacity: 0, y: 50 }"
              >
                <h4 class="text-2xl font-light opacity-80">
                  {{ description }}
                </h4>
              </Motion>
            </Presence>
            <h4 class="text-md font-light opacity-70 mt-8">
              new team, highest quality.
            </h4>
            <p class="text-sm font-light text-white/50">coming soon.</p>
          </Motion>
        </div>
      </div>
      <Motion
        :initial="{ opacity: 0, y: -50 }"
        :animate="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 3,
          },
        }"
        :exit="{ opacity: 0, y: 50 }"
      >
        <div
          class="flex justify-center font-ChakraPetch space-x-2 relative cursor-pointer"
        >
          <ChevronDoubleDownIcon
            @click="gotoDiv('myGangs')"
            class="h-20 opacity-30 animate-bounce absolute -bottom-64"
          />
        </div>
      </Motion>
    </ClientOnly>
  </div>
</template>
