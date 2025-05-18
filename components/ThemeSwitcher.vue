<script setup lang="ts">
import { themes } from '@/types/themes'
import { useTheme } from '@/composables/useTheme'

const { activeMode, setTheme } = useTheme()

const toggleMode = () => {
  const newMode = activeMode.value === 'light' ? 'dark' : 'light'
  setTheme(activeTheme.value, newMode)
}
</script>

<template>
  <div class="flex gap-4">
    <button
        v-for="(theme, name) in themes"
        :key="name"
        @click="setTheme(name, activeMode)"
        class="px-4 py-2 border rounded"
    >
      {{ name }}
    </button>
    <button
        @click="toggleMode"
        class="px-4 py-2 border rounded"
    >
      Toggle {{ activeMode === 'light' ? 'Dark' : 'Light' }} Mode
    </button>
  </div>
</template>

<style scoped>

</style>