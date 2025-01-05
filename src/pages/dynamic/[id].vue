<script lang="ts" setup>
const route = useRoute('/dynamic/[id]')

useSeoMeta({
  title: 'Dynamic Page with `props.id` or `route.params.id`',
})
</script>

<template>
  <div class="p-4">
    {{ route.params }}
  </div>
</template>
