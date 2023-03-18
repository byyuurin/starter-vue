<script lang="ts" setup>
import { title, titleTemplate } from '~/router'
useHead({ title, titleTemplate })
</script>

<template>
  <div min-h-full font-sans bg-base color-base>
    <AppHeader />
    <RouterView />
  </div>
</template>
