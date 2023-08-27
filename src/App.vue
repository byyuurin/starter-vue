<script lang="ts" setup>
useSeoMeta({
  titleTemplate: (title) => [title, 'Vue Starter'].filter(Boolean).join(' - '),
})
</script>

<template>
  <div class="min-h-full font-sans bg-base color-base">
    <AppHeader />
    <RouterView />
  </div>
</template>
