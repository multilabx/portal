<script setup lang="ts">
import { Motion } from "@motionone/vue";
import { UserIcon } from "@heroicons/vue/24/solid";
const customers = useCustomer();
</script>
<template>
    <div class="text-center font-silkscreen">
        <ClientOnly>
            <Motion :initial="{ opacity: 0, y: -50 }" :animate="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
              },
            }" :exit="{ opacity: 0, y: 50 }">
                <h2 class="font-bold text-2xl sm:text-3xl">
                    Customer
                </h2>
            </Motion>
            <Motion :initial="{ opacity: 0, y: -50 }" :animate="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 2,
              },
            }" :exit="{ opacity: 0, y: 50 }">

                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 mt-4 items-center">
                    <div v-for="(customer, i) in customers">
                        <img :src="customer.image" alt="" class="hover:grayscale-0 hover:scale-125 transition duration-500 grayscale">
                    </div>
                </div>
            </Motion>
        </ClientOnly>
    </div>
</template>