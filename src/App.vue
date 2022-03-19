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
  <div font-sans flex="~ col" h-full overflow-auto>
    <page-header />
    <div flex="grow">
      <div w-full min-h-full>
        <router-view />
      </div>
    </div>
  </div>
</template>
