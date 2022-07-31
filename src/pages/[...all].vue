<route lang="yaml">
meta:
  title: Page Not Found
</route>

<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div absolute min-w-full min-h-full bg-base flex justify-center items-center select-none>
    <div px-5 py-10 flex="~ col gap-4" justify-center items-center>
      <i text-8xl i-twemoji-crying-face></i>
      <span text-4xl>Page Not Found</span>

      <button btn="~ base" @click="router.replace({ path: '/' })">
        Back
      </button>
    </div>
  </div>
</template>
