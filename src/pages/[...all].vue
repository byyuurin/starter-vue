<script setup lang="ts">
useSeoMeta({
  title: 'Page Not Found',
})

const router = useRouter()
</script>

<template>
  <div class="absolute min-h-full min-w-full flex select-none items-center justify-center bg-base">
    <div class="flex flex-col items-center justify-center gap-4 px-5 py-10">
      <i class="i-twemoji-crying-face text-8xl"></i>
      <span class="text-4xl">Page Not Found</span>
      <button class="btn btn-base" @click="router.replace({ path: '/' })">
        Back
      </button>
    </div>
  </div>
</template>
