<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default:
      "https://media.discordapp.net/attachments/943188689952063499/1030525020964913262/unknown.png?width=1293&height=676",
  },
});
</script>
<template>
  <div class="relative overflow-hidden group">
    <div
      class="bg-white/30 absolute h-11 w-full -rotate-45 -left-80 group-hover:left-80 transition-all duration-1000 opacity-0 bottom-[80%] group-hover:bottom-0 group-hover:opacity-100"
    />
    <img :src="props.src" class="mx-auto rounded-xl" />
  </div>
</template>
