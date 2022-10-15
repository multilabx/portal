<script setup lang="ts">
const customers = useCustomer();
</script>
<template>
  <div class="text-center font-silkscreen">
    <div
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 items-center"
    >
      <div v-for="(customer, i) in customers">
        <img
          :src="customer.image"
          alt=""
          class="hover:grayscale-0 hover:scale-125 transition duration-500 grayscale"
        />
      </div>
    </div>
  </div>
</template>
