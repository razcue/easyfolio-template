<script setup>
import { onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'

const { setTheme } = useTheme()

onMounted(() => {
  setTheme('default', 'light')
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-primary)] p-4 rounded-md">
      <div class="i-tabler-abc text-3xl" />
      <h1 class="text-xl font-bold">Themed Component</h1>
      <p>This component's colors change based on the active theme.</p>
    </div>
    <ThemeSwitcher></ThemeSwitcher>
  </div>
</template>
