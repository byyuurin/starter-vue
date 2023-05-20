<script lang="ts" setup>
useSeoMeta({
  titleTemplate: '%s - Vue Starter',
})
</script>

<template>
  <div min-h-full font-sans bg-base color-base>
    <AppHeader />
    <RouterView />
  </div>
</template>
