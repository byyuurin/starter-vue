<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button btn my-2 type="button" @click="count++">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
h1 {
  @apply text-4xl leading-2em;
}

p {
  @apply leading-2em;
}

a {
  @apply text-vue;
}

code {
  @apply bg-gray-500/10 dark:bg-gray-500/25 text-[#304455] dark:text-light-900 p-4px py-2px rounded-4px;
}
</style>
