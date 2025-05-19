<script setup>
import { useTheme } from '@/composables/useTheme'

const { setTheme } = useTheme()

onMounted(() => {
  setTheme('default', 'light')
})
</script>

<template>
  <TheHeader />
  <TheFooter />
  <TheConfig />
  <TheActionsWrapper>
    <TheBody />
  </TheActionsWrapper>
</template>
