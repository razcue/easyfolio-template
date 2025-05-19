<script setup lang="ts">
const { data: owner } = await useAsyncData('', () => {
  return queryCollection('owner').first()
})

const primaryContactInfo = computed(() => {
  console.log(owner.value)
  if (!owner.value?.contact || !owner.value?.primaryContact) return null
  console.log(owner.value)

  switch (owner.value.primaryContact) {
    case 'email':
      return {
        href: `mailto:${owner.value.contact.email}`,
        icon: 'i-tabler-mail',
        label: 'Email'
      }
    case 'phone':
      return {
        href: `https://wa.me/${owner.value.contact.phone.replace('+', '')}`,
        icon: 'i-tabler-phone',
        label: 'WhatsApp'
      }
    case 'telegram':
      return {
        href: owner.value.contact.telegram,
        icon: 'i-tabler-brand-telegram',
        label: 'Telegram'
      }
    default:
      return null
  }
})
</script>

<template>
  <header
      class="sticky top-0 z-50 p-4 bg-[var(--color-bg)] shadow-[0_2px_4px_var(--color-shadow)]"
  >
    <div class="flex items-center justify-between">
      <!-- Profile Info -->
      <div class="flex items-center gap-8">
        <img
            src="@/assets/photo.webp"
            alt="Profile Photo"
            class="w-16 h-16 rounded-full object-cover border-[var(--color-border)] border-2"
        />
        <div class="ml-4">
          <h1 class="text-2xl font-bold text-[var(--color-text)]">
            {{ owner?.name }}
          </h1>
          <p class="text-lg text-[var(--color-text)]">
            {{ owner?.role }}
          </p>
        </div>
      </div>

      <!-- Primary Contact Button -->
      <a
          v-if="primaryContactInfo"
          :href="primaryContactInfo.href"
          class="hidden md:block p-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-text)] shadow-[0_4px_6px_var(--color-shadow)] hover:opacity-90 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          :aria-label="`Contact via ${primaryContactInfo.label}`"
      >
        <div :class="primaryContactInfo.icon + ' text-3xl'"></div>
      </a>
    </div>
  </header>
</template>