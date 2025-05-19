<script setup>
import { useTheme } from '@/composables/useTheme'

const { setTheme } = useTheme()

onMounted(() => {
  setTheme('default', 'light')
})
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-8 py-8 lg:px-[10rem]">
    <TheHeader />
    <TheFooter />
    <TheConfig />
    <TheActionsWrapper>
      <TheBody />
    </TheActionsWrapper>
  </div>
</template>
