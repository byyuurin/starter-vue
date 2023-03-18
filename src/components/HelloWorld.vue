<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
const colors = ['btn-teal', 'btn-green', 'btn-emerald', 'btn-green', 'btn-lime', 'btn-yellow', 'btn-amber', 'btn-orange', 'btn-red', 'btn-rose', 'btn-pink', 'btn-fuchsia', 'btn-purple', 'btn-violet', 'btn-indigo', 'btn-blue', 'btn-sky', 'btn-cyan']
const buttonColor = computed(() => colors[Math.floor(count.value / 3)] || 'btn-base')
</script>

<template>
  <h1>
    {{ msg }}
  </h1>
  <div p-4 py-8>
    <div flex="~ gap-2" items-start justify-center p-4>
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
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p text-gray-500>
    Click on the Vite, Vue and UnoCSS logos to learn more
  </p>
</template>

<style scoped>
h1 {
  --uno: text-4xl leading-2em;
}

p {
  --uno: leading-2em;
}

a {
  --uno: text-vue;
}

code {
  --uno: bg-gray-500/10 dark:bg-gray-500/25 text-[#304455] dark:text-light-900 p-4px py-2px rounded-4px;
}
</style>
