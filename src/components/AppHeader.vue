<template>
  <nav flex="~ gap-1" sticky top-0 z-20 w-full items-center justify-between px-4 py-2 bg-base color-base shadow="sm gray-500 opacity-10 dark:opacity-20">
    <RouterLink cursor-pointer select-none text-3xl to="/">
      <span text-vue>Vue</span>
      <span pl-2>Starter</span>
    </RouterLink>
    <div flex="~ gap-2" items-center>
      <a btn="~ iconify" i-mdi-github text-2xl href="https://github.com/byyuurin/starter-vue" target="_blank"></a>
      <AppThemeToggle text-2xl />
    </div>
  </nav>
</template>
