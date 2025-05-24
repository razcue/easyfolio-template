<script setup lang="ts">
const { owner, pending, error } = useContent();

function formatKey(key: string): string {
	return key
		.replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
		.replace(/^[a-z]/, (char) => char.toUpperCase()); // Capitalize the first letter
}
</script>

<template>
	<main class="relative pt-0 pb-14 lg:py-6">
		<!-- Loading State -->
		<div v-if="pending">Loading...</div>

		<!-- Error State -->
		<div v-if="error">Error loading data: {{ error.message }}</div>

		<!-- Content Section -->
		<div v-if="owner">
			<!-- Contact Info Section -->
			<PageSection>
				<template #icon>
					<i class="i-tabler-at text-3xl" />
				</template>
				<template #heading>Contact Info</template>
				<ul class="space-y-1">
					<li>
						<strong>Email: </strong>
						<a
							:href="`mailto:${owner.contact.email}`"
							class="hover:text-[var(--color-link-hover)]"
						>
							{{ owner.contact.email }}
						</a>
					</li>
					<li v-if="owner.contact.phone">
						<strong>Phone: </strong>
						<a
							:href="`https://wa.me/${owner.contact.phone.replace('+', '')}`"
							target="_blank"
							rel="noopener"
							class="hover:text-[var(--color-link-hover)]"
						>
							{{ owner.contact.phone }}
						</a>
					</li>
					<li v-if="owner.contact.telegram">
						<strong>Telegram: </strong>
						<a
							:href="owner.contact.telegram"
							target="_blank"
							rel="noopener"
							class="hover:text-[var(--color-link-hover)]"
						>
							Telegram Profile
						</a>
					</li>
					<li v-if="owner.contact.linkedin">
						<strong>LinkedIn: </strong>
						<a
							:href="owner.contact.linkedin"
							target="_blank"
							rel="noopener"
							class="hover:text-[var(--color-link-hover)]"
						>
							LinkedIn Profile
						</a>
					</li>
				</ul>
			</PageSection>

			<!-- Summary Section -->
			<PageSection>
				<template #icon>
					<i class="i-tabler-align-justified text-3xl" /> </template
				><template #heading>Summary</template>
				<div class="flex flex-col gap-2">
					<div>
						<h3 class="text-lg font-semibold">Profile</h3>
						<ul class="list-disc list-inside">
							<li
								v-for="(item, index) in owner.summary.profile"
								:key="index"
							>
								{{ item }}
							</li>
						</ul>
					</div>

					<div v-if="owner.summary.managementBackground">
						<h3 class="text-lg font-semibold">
							Management Background
						</h3>
						<ul class="list-disc list-inside">
							<li
								v-for="(item, index) in owner.summary
									.managementBackground"
								:key="index"
							>
								{{ item }}
							</li>
						</ul>
					</div>

					<div v-if="owner.summary.technicalBackground">
						<h3 class="text-lg font-semibold">
							Technical Background
						</h3>
						<ul class="list-disc list-inside">
							<li
								v-for="(item, index) in owner.summary
									.technicalBackground"
								:key="index"
							>
								{{ item }}
							</li>
						</ul>
					</div>
				</div>
			</PageSection>

			<!-- Cover Letter Section -->
			<PageSection v-if="owner.coverLetter">
				<template #icon>
					<i class="i-tabler-file-text text-3xl" />
				</template>
				<template #heading>Cover Letter</template>
				<p>{{ owner.coverLetter }}</p>
			</PageSection>

			<!-- Skills Section -->
			<PageSection v-if="owner.skills">
				<template #icon>
					<i class="i-tabler-tools text-3xl" />
				</template>
				<template #heading>Skills</template>
				<ul>
					<li v-for="(value, key) in owner.skills" :key="key">
						<strong>{{ formatKey(key) }}:</strong>
						{{ value.join(", ") }}
					</li>
				</ul>
			</PageSection>

			<!-- Portfolio Section -->
			<PageSection v-if="owner.portfolio">
				<template #icon>
					<i class="i-tabler-briefcase text-3xl" />
				</template>
				<template #heading>Portfolio</template>
				<div class="flex flex-wrap gap-2">
					<a
						v-for="(item, index) in owner.portfolio"
						:key="index"
						:href="item.url"
						target="_blank"
						rel="noopener"
						class="no-underline transition duration-400 hover:text-[var(--color-link-hover)] border-2 p-2 rounded-md flex gap-2 items-center"
					>
						<i
							v-show="item.icon"
							v-cloak
							:class="item.icon + ' text-3xl'"
						/>
						<span class="text-base">{{ item.name }}</span>
					</a>
				</div>
			</PageSection>

			<!-- Education & Certification Section -->
			<PageSection v-if="owner.education">
				<template #icon>
					<i class="i-tabler-certificate text-3xl" />
				</template>
				<template #heading>Education & Certification</template>
				<ul>
					<li v-for="(item, index) in owner.education" :key="index">
						<a
							v-if="item.url"
							:href="item.url"
							target="_blank"
							rel="noopener"
							class="no-underline transition duration-400 font-bold hover:text-[var(--color-link-hover)]"
						>
							{{ item.title }}:
						</a>
						<strong v-else>{{ item.title }}:</strong>
						{{ item.institution }} :
						{{ item.date }}
					</li>
				</ul>
			</PageSection>

			<!-- Languages Section -->
			<PageSection v-if="owner.languages">
				<template #icon>
					<i class="i-tabler-language text-3xl" />
				</template>
				<template #heading>Languages</template>
				<ul>
					<li
						v-for="(language, index) in owner.languages"
						:key="index"
					>
						<strong>{{ language.name }}:</strong>
						{{ language.level }}
					</li>
				</ul>
			</PageSection>

			<!-- Selected Experience Section -->
			<PageSection v-if="owner.experience">
				<template #icon>
					<i class="i-tabler-building-skyscraper text-3xl" />
				</template>
				<template #heading> Selected Experience </template>
				<article
					v-for="(experience, index) in owner.experience"
					:key="index"
					class="mb-4 border-b border-[var(--color-border)] pb-3 last:border-none last:mb-0 last:pb-0"
				>
					<h3 class="text-xl font-semibold mb-2">
						{{ experience.company }}
					</h3>
					<p><strong>Duration:</strong> {{ experience.duration }}</p>
					<p v-if="experience.role">
						<strong>Role:</strong> {{ experience.role }}
					</p>
					<p v-if="experience.project">
						<strong>Project:</strong> {{ experience.project }}
					</p>
					<p v-if="experience.technologies">
						<strong>Core Technologies: </strong>
						<span>{{ experience.technologies.join(", ") }}</span>
					</p>
					<h4 class="font-bold">Responsibilities/Achievements:</h4>
					<ul class="list-disc pl-5">
						<li
							v-for="(task, idx) in experience.responsibilities"
							:key="idx"
						>
							{{ task }}
						</li>
					</ul>
				</article>
			</PageSection>

			<!-- Interests Section -->
			<PageSection>
				<template #icon>
					<i class="i-tabler-heart text-3xl" />
				</template>
				<template #heading>Interests</template>
				<ul class="flex flex-wrap gap-x-8 gap-y-4">
					<li
						v-if="owner.interests.includes('coding')"
						class="flex flex-col items-center"
					>
						<i class="i-tabler-braces text-3xl m-0" />
						<span class="uppercase font-bold">Coding</span>
					</li>
					<li
						v-if="owner.interests.includes('design')"
						class="flex flex-col items-center"
					>
						<i class="i-tabler-pencil text-3xl m-0" />
						<span class="uppercase font-bold">Design</span>
					</li>
					<li
						v-if="owner.interests.includes('travel')"
						class="flex flex-col items-center"
					>
						<i class="i-tabler-plane text-3xl m-0" />
						<span class="uppercase font-bold">Travel</span>
					</li>
					<li
						v-if="owner.interests.includes('gaming')"
						class="flex flex-col items-center"
					>
						<i class="i-tabler-device-gamepad-2 text-3xl m-0" />
						<span class="uppercase font-bold">Gaming</span>
					</li>
          <li
              v-if="owner.interests.includes('music')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-music text-3xl m-0" />
            <span class="uppercase font-bold">Music</span>
          </li>
          <li
              v-if="owner.interests.includes('reading')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-book text-3xl m-0" />
            <span class="uppercase font-bold">Reading</span>
          </li>
          <li
              v-if="owner.interests.includes('sports')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-ball-football text-3xl m-0" />
            <span class="uppercase font-bold">Sports</span>
          </li>
          <li
              v-if="owner.interests.includes('photography')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-camera text-3xl m-0" />
            <span class="uppercase font-bold">Photography</span>
          </li>
          <li
              v-if="owner.interests.includes('cooking')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-bowl-spoon text-3xl m-0" />
            <span class="uppercase font-bold">Cooking</span>
          </li>
          <li
              v-if="owner.interests.includes('fitness')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-run text-3xl m-0" />
            <span class="uppercase font-bold">Fitness</span>
          </li>
          <li
              v-if="owner.interests.includes('nature')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-tree text-3xl m-0" />
            <span class="uppercase font-bold">Nature</span>
          </li>
          <li
              v-if="owner.interests.includes('technology')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-cpu text-3xl m-0" />
            <span class="uppercase font-bold">Technology</span>
          </li>
          <li
              v-if="owner.interests.includes('health')"
              class="flex flex-col items-center"
          >
            <i class="i-tabler-heartbeat text-3xl m-0" />
            <span class="uppercase font-bold">Health</span>
          </li>
				</ul>
			</PageSection>

			<!-- Availability to Travel Section -->
			<PageSection>
				<template #icon>
					<i class="i-tabler-map-pin text-3xl" />
				</template>
				<template #heading>Availability to Travel</template>
				<ul>
					<li>
						<strong>Availability to Travel:</strong>
						{{ owner.availability.travel }}
					</li>
					<li>
						<strong>Availability to Relocate Onsite:</strong>
						{{ owner.availability.relocate }}
					</li>
				</ul>
			</PageSection>
		</div>
	</main>
</template>
