<script lang="ts" setup>
</script>

<template>
  <nav theme-container sticky top-0 z-20 px-4 py-2 w-full flex="~ gap-1" items-center shadow="sm gray-500 opacity-10 dark:opacity-20">
    <div flex-grow>
      <h1 text-3xl select-none>
        <span text-vue>Vue</span>
        <span pl-2>Starter</span>
      </h1>
    </div>
    <a icon-btn i-mdi-github text-2xl href="https://github.com/byyuurin/vue-starter" target="_blank" />
    <toggle-theme text-2xl />
  </nav>
</template>
