<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
const colors = ['btn-teal', 'btn-green', 'btn-emerald', 'btn-green', 'btn-lime', 'btn-yellow', 'btn-amber', 'btn-orange', 'btn-red', 'btn-rose', 'btn-pink', 'btn-fuchsia', 'btn-purple', 'btn-violet', 'btn-indigo', 'btn-blue', 'btn-sky', 'btn-cyan']
const buttonColor = computed(() => colors[Math.floor(count.value / 3)] || 'btn-base')
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/editorconfig/editorconfig-vscode" target="_blank">EditorConfig</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    +
    <a href="https://github.com/eslint/eslint" target="_blank">ESLint</a>
    +
    <a href="https://github.com/unocss/unocss" target="_blank">UnoCSS</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <div py-2 flex="~ gap-2" justify-center items-start>
    <button
      btn="~" type="button" :class="buttonColor" @click="count++"
    >
      count is: {{ count }}
    </button>
    <button btn="~ true-gray-50" self-center :disabled="count <= 0" @click="count = 0">
      Reset
    </button>
  </div>
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
