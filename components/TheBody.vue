<script setup lang="ts">
const { data: owner } = await useAsyncData('', () => {
  return queryCollection('owner').first()
})
</script>

<template>
  <main class="relative">
    <!-- Contact Info Section -->
    <CVSection>
      <template #icon>
        <i class="i-tabler-mail text-3xl" />
      </template>
      <template #heading>Contact Info</template>
      <ul v-if="owner">
        <li>
          Primary Contact:
          <span class="font-bold text-gray-800">
            {{ owner.primaryContact }}
          </span>
        </li>
        <li>
          Email:
          <a
              :href="`mailto:${owner.contact.email}`"
              class="underline text-green-600 transition duration-400 hover:text-green-600/65"
          >
            {{ owner.contact.email }}
          </a>
        </li>
        <li>
          Phone:
          <a
              :href="`https://wa.me/${owner.contact.phone.replace('+', '')}`"
              target="_blank"
              rel="noopener"
              class="underline text-green-600 transition duration-400 hover:text-green-600/65"
          >
            {{ owner.contact.phone }}
          </a>
        </li>
        <li>
          Telegram:
          <a
              :href="owner.contact.telegram"
              target="_blank"
              rel="noopener"
              class="underline text-blue-600 transition duration-400 hover:text-blue-600/65"
          >
            Telegram Profile
          </a>
        </li>
        <li>
          LinkedIn:
          <a
              :href="owner.contact.linkedin"
              target="_blank"
              rel="noopener"
              class="underline text-blue-600 transition duration-400 hover:text-blue-600/65"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </CVSection>

    <!-- Summary Section -->
    <CVSection>
      <template #icon>
        <i class="i-tabler-mail text-3xl" />
      </template>
      <template #heading>Summary</template>
      <div class="flex flex-col gap-3" v-if="owner">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Profile</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li v-for="(item, index) in owner.summary.profile" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800">
            Management Background
          </h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li
                v-for="(item, index) in owner.summary.managementBackground"
                :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800">
            Technical Background
          </h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li
                v-for="(item, index) in owner.summary.technicalBackground"
                :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </CVSection>
  </main>
</template>

<style scoped>

</style>