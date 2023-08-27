<script lang="ts" setup>
const props = defineProps<{
  id: string
}>()

useSeoMeta({
  title: 'Dynamic Page with `props.id` or `route.params.id`',
})
</script>

<template>
  <div class="p-4">
    {{ props }}
  </div>
</template>
