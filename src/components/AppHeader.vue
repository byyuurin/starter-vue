<template>
  <nav class="sticky top-0 z-20 w-full flex items-center justify-between gap-1 px-4 py-2 shadow-gray-500 shadow-sm shadow-opacity-10 bg-base color-base dark:shadow-opacity-20">
    <RouterLink class="cursor-pointer select-none text-3xl" to="/">
      <span class="text-vue">Vue</span>
      <span class="pl-2">Starter</span>
    </RouterLink>
    <div class="flex items-center gap-2">
      <a class="i-mdi-github btn text-2xl btn-iconify" href="https://github.com/byyuurin/starter-vue" target="_blank"></a>
      <AppThemeToggle class="text-2xl" />
    </div>
  </nav>
</template>
