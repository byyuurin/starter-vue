<script lang="ts" setup>
import { toggleDark } from '/src/composables/shared'
</script>

<template>
  <button
    icon-btn text="yellow-400 dark:white"
    i-ph-sun-bold dark:i-ph-moon-duotone
    @click="() => toggleDark()"
  />
</template>
