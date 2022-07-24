<script lang="ts" setup>
const route = useRoute()
const title = ref('')

useHead({ title })

watch(() => route.meta, (meta) => {
  if (typeof route.name === 'string') title.value = route.name
  if (typeof meta.title === 'string') title.value = meta.title
})
</script>

<template>
  <div bg-base color-base font-sans min-h-full>
    <AppHeader />
    <RouterView />
  </div>
</template>
