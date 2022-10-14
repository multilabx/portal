<script setup lang="ts">
import { Motion } from "@motionone/vue";
import { inView } from "motion";
import { BoltIcon } from "@heroicons/vue/24/solid";
const { myG } = useMember();
</script>
<template>
  <div class="text-center font-silkscreen">
    <ClientOnly>
      <Motion
        :initial="{ opacity: 0, y: -50 }"
        :animate="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1,
          },
        }"
        :exit="{ opacity: 0, y: 50 }"
      >
        <h2 class="font-bold text-2xl sm:text-3xl">
          <BoltIcon class="h-10 inline-block -mr-3" />
          Meet the Gangs.
        </h2>
      </Motion>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-12">
        <Motion
          v-for="(item, i) in myG"
          :key="i"
          :initial="{ opacity: 0, y: -50 }"
          :animate="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1 + 0.1 * i,
            },
          }"
          :exit="{ opacity: 0, y: 50 }"
        >
          <Cardmember
            :image="item.image"
            :nickName="item.nickName"
            :description="item.description"
            :skill="item.skill"
          />
        </Motion>
      </div>
    </ClientOnly>
  </div>
</template>
