<template>
  <header
      class="sticky top-0 z-50 p-4 bg-[var(--color-bg)] shadow-[0_2px_4px_var(--color-shadow)]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-8">
        <img
            src="@/assets/photo.webp"
            alt="Profile Photo"
            class="w-16 h-16 rounded-full object-cover border-[var(--color-border)] border-2"
        />
        <div class="ml-4">
          <h1 class="text-2xl font-bold text-[var(--color-text)]">
            Anaís Garcia Peña
          </h1>
          <p class="text-lg text-[var(--color-text)]">
            Community Manager | Product Manager
          </p>
        </div>
      </div>
      <a
          href="mailto:mahiagarcia@gmail.com"
          class="hidden md:block p-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-text)] shadow-[0_4px_6px_var(--color-shadow)] hover:opacity-90 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
      >
        <div class="i-tabler-mail text-3xl"></div>
      </a>
    </div>
  </header>
</template>
