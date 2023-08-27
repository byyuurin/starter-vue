<script lang="ts" setup>
import { toggleDark } from '~/composables'
</script>

<template>
  <button class="i-ph-sun-bold btn dark:i-ph-moon-duotone btn-yellow-50 dark:btn-iconify p-0!" @click="toggleDark"></button>
</template>
