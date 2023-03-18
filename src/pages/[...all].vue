<route lang="yaml">
meta:
  title: Page Not Found
</route>

<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div absolute min-h-full min-w-full flex select-none items-center justify-center bg-base>
    <div flex="~ col gap-4" items-center justify-center px-5 py-10>
      <i i-twemoji-crying-face text-8xl></i>
      <span text-4xl>Page Not Found</span>
      <button btn="~ base" @click="router.replace({ path: '/' })">
        Back
      </button>
    </div>
  </div>
</template>
