<script lang="ts" setup>
import { title, titleTemplate } from '~/router'
useHead({ title, titleTemplate })
</script>

<template>
  <div bg-base color-base font-sans min-h-full>
    <AppHeader />
    <RouterView />
  </div>
</template>
