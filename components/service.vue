<script setup lang="ts">
import { CubeIcon } from "@heroicons/vue/24/solid";
const imageList = [
  "https://media.discordapp.net/attachments/854765539398516786/1030767821287866398/2565-10-15_16.03.11.png?width=2358&height=1404",
  "https://media.discordapp.net/attachments/938043441936490526/1030824012244324473/2565-10-15_19.46.23.png?width=2358&height=1403",
  "https://media.discordapp.net/attachments/938043441936490526/1030809728240058469/2565-10-15_18.49.42.png?width=2352&height=1403",
];
</script>
<template>
  <div class="text-center mt-28">
    <h1 class="text-3xl sm:text-4xl font-silkscreen font-semibold">
      <CubeIcon class="h-10 inline-block" /> OUR SERVICE.
    </h1>
    <h3 class="font-silkscreen">
      We, write all kinds of applications. Contact us for more details.
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 w-full">
      <div class="col-span-2 hidden md:block">
        <Serviceimage
          src="https://media.discordapp.net/attachments/943188689952063499/1030525020964913262/unknown.png?width=1293&height=676"
        />
      </div>
      <div class="w-full my-auto text-center md:text-left">
        <h2 class="font-semibold text-2xl sm:text-xl linear-wipe font-kanit">
          บริการออกแบบและระบบ
        </h2>
        <h1 class="font-semibold text-4xl sm:text-2xl font-kanit">
          เว็บไซต์ครบจบที่เดียว
        </h1>
        <p class="text-white/80 text-sm mt-2">
          ทางเรามีบริการทำเว็บไซต์โดย developer มืออาชีพ และสามารถทำตาม scope
          งานที่ลูกค้าสั่งได้ตามเป้าหมาย โดยสามารถแก้ไขเว็บเก่าของคุณ หรือ
          สร้างเว็บใหม่ทั้งเว็บ
          และยังสามารถย้ายฐานข้อมูลจากเว็บเดิมมาเว็บใหม่ได้ด้วยย
        </p>
      </div>
      <div v-for="(item, i) in imageList" :key="i" class="hidden md:block">
        <Serviceimage :src="item" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 w-full">
      <div class="w-full my-auto text-center md:text-right">
        <h2 class="font-semibold text-2xl sm:text-xl linear-wipe font-kanit">
          ระบบป้องกัน DDOS
        </h2>
        <h1 class="font-semibold text-3xl sm:text-2xl font-kanit">
          ที่ดีที่สุดไม่ต้องกลัวเว็บดับ
        </h1>
        <p class="text-white/80 text-sm mt-2">
          เว็บเก่าคุณเคยมีปัญหารึไหม โดนยิงเว็บดับใช้งานไม่ได้เลย
          ปัญหานี้จะหมดไปถ้ามาอยู่กับเรา ดูแลการป้องกัน DDOS โดย มืออาชีพ
        </p>
      </div>
      <div class="col-span-2 hidden md:block">
        <Serviceimage
          src="https://media.discordapp.net/attachments/942069659459543051/1031234660266688583/unknown.png"
        />
      </div>
      <div class="col-span-3 hidden md:block">
        <Serviceimage src="https://media.discordapp.net/attachments/930057538601385994/1031196468884820019/unknown.png" />
      </div>
    </div>
    <Customer />
  </div>
</template>
