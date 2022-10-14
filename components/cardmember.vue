<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
  },
  nickName: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    default: "SuperMan",
  },
  skill: {
    type: String,
    default: "SuperMan",
  },
});
</script>
<template>
  <div
    class="bg-black/30 mt-14 rounded-lg py-2 group border border-rose-200/10"
  >
    <img
      :src="props.image"
      class="h-24 rounded-full mx-auto -mt-11 mb-2 group-hover:scale-110 transition-all"
    />
    <h3 class="text-xl linear-wipe">{{ props.nickName }}</h3>
    <h5 class="text-sm opacity-70 -mt-2">{{ props.description }}</h5>
    <h5 class="text-xs opacity-40">{{ props.skill }}</h5>
  </div>
</template>
