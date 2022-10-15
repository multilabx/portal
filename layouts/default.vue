<template>
  <div class="flex flex-col h-screen justify-between text-white">
    <header></header>
    <main class="mb-auto">
      <slot />
    </main>
    <footer class="mt-32 pb-4 font-silkscreen text-center opacity-30 text-xs">
      © 2023 MultiLabX, Inc. All rights reserved.
    </footer>
  </div>
</template>
