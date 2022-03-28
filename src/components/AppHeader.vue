<template>
  <nav theme-container sticky top-0 z-20 px-4 py-2 w-full flex="~ gap-1" justify-between items-center shadow="sm gray-500 opacity-10 dark:opacity-20">
    <router-link text-3xl select-none cursor-pointer to="/">
      <span text-vue>Vue</span>
      <span pl-2>Starter</span>
    </router-link>
    <div flex="~ gap-2" items-center>
      <a icon-btn i-mdi-github text-2xl href="https://github.com/byyuurin/vue-starter" target="_blank" />
      <toggle-theme text-2xl />
    </div>
  </nav>
</template>
