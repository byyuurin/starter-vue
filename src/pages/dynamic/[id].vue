<route lang="yaml">
meta:
  title: Dynamic Page with `props.id` or `route.params.id`
</route>

<script lang="ts" setup>
const props = defineProps<{
  id: string
}>()
</script>

<template>
  <div p-4>
    {{ props }}
  </div>
</template>
