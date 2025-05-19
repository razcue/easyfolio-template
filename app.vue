<template>
  <div class="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-500 font-sans leading-relaxed">
  <NuxtRouteAnnouncer />
    <ThePage></ThePage>
  </div>
</template>

<style>
body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>