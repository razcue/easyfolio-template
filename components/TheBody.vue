<script setup lang="ts">
const { owner } = useContent();
</script>

<template>
	<main class="relative pt-0 pb-14 lg:py-6">
		<!-- Contact Info Section -->
		<PageSection>
			<template #icon>
				<i class="i-tabler-at text-3xl" />
			</template>
			<template #heading
				><h2 class="text-2xl font-bold text-gray-800">
					Contact Info
				</h2></template
			>
			<ul class="text-gray-700 space-y-2">
				<li>
					<strong>Email: </strong>
					<a
						:href="`mailto:${owner.contact.email}`"
						class="text-blue-600 hover:text-blue-600/55"
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
						class="text-blue-600 hover:text-blue-600/55"
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
						class="text-blue-600 hover:text-blue-600/55"
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
						class="text-blue-600 hover:text-blue-600/55"
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
			><template #heading
				><h2 class="text-2xl font-bold text-gray-800">
					Summary
				</h2></template
			>
			<div class="flex flex-col gap-2">
				<div>
					<h3 class="text-lg font-semibold text-gray-800">Profile</h3>
					<ul class="list-disc list-inside text-gray-700">
						<li
							v-for="(item, index) in owner.summary.profile"
							:key="index"
						>
							{{ item }}
						</li>
					</ul>
				</div>

				<div v-if="owner.summary.managementBackground">
					<h3 class="text-lg font-semibold text-gray-800">
						Management Background
					</h3>
          <ul class="list-disc list-inside text-gray-700">
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
					<h3 class="text-lg font-semibold text-gray-800">
						Technical Background
					</h3>
          <ul class="list-disc list-inside text-gray-700">
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
      <template #heading
      ><h2 class="text-2xl font-bold text-gray-800">
        Cover Letter
      </h2></template
      >
			<p>{{ owner.coverLetter }}</p>
		</PageSection>

		<!-- Skills Section -->
		<PageSection>
			<template #icon>
				<i class="i-tabler-tools text-3xl" />
			</template>
      <template #heading
      ><h2 class="text-2xl font-bold text-gray-800">
        Skills
      </h2></template
      >
			<ul>
				<li>
					<strong>Tools:</strong> {{ owner.skills.tools.join(", ") }}
				</li>
				<li>
					<strong>Languages:</strong>
					{{ owner.skills.languages.join(", ") }}
				</li>
				<li>
					<strong>Methodologies:</strong>
					{{ owner.skills.methodologies.join(", ") }}
				</li>
				<li>
					<strong>Other Skills:</strong>
					{{ owner.skills.otherSkills.join(", ") }}
				</li>
			</ul>
		</PageSection>

		<!-- Portfolio Section -->
		<PageSection>
			<template #icon>
				<i class="i-tabler-briefcase text-3xl" />
			</template>
			<template #heading>Portfolio</template>
			<ul class="space-y-2">
				<li v-for="(item, index) in owner.portfolio" :key="index">
					<a
						:href="item.url"
						target="_blank"
						rel="noopener"
						class="no-underline text-green-600 transition duration-400 p-[3px] hover:text-green-600/65"
					>
						{{ item.name }}
					</a>
				</li>
			</ul>
		</PageSection>

		<!-- Education & Certification Section -->
		<PageSection>
			<template #icon>
				<i class="i-tabler-certificate text-3xl" />
			</template>
			<template #heading>Education & Certification</template>
			<ul>
				<li v-for="(item, index) in owner.education" :key="index">
					<strong>{{ item.title }}:</strong> {{ item.institution }} :
					{{ item.date }}
				</li>
			</ul>
		</PageSection>

		<!-- Languages Section -->
		<PageSection>
			<template #icon>
				<i class="i-tabler-language text-3xl" />
			</template>
			<template #heading>Languages</template>
			<ul>
				<li v-for="(language, index) in owner.languages" :key="index">
					<strong>{{ language.name }}:</strong> {{ language.level }}
				</li>
			</ul>
		</PageSection>

		<!-- Selected Experience Section -->
		<PageSection>
			<template #icon>
				<i class="i-tabler-building-skyscraper text-3xl" />
			</template>
			<template #heading>
				<h2 class="text-2xl font-bold text-gray-800">
					Selected Experience
				</h2>
			</template>
			<article
				v-for="(experience, index) in owner.experience"
				:key="index"
				class="mb-4 border-b border-gray-200 pb-3 last:border-none last:mb-0 last:pb-0"
			>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">
					{{ experience.company }}
				</h3>
				<p class="text-gray-600">
					<strong>Duration:</strong> {{ experience.duration }}
				</p>
				<p v-if="experience.role" class="text-gray-600">
					<strong>Role:</strong> {{ experience.role }}
				</p>
				<p v-if="experience.project" class="text-gray-600">
					<strong>Project:</strong> {{ experience.project }}
				</p>
				<p v-if="experience.technologies" class="text-gray-600">
					<strong>Core Technologies: </strong>
					<span>{{ experience.technologies.join(", ") }}</span>
				</p>
				<h4 class="font-bold text-gray-600">
					Responsibilities/Achievements:
				</h4>
				<ul class="list-disc pl-5 text-gray-600">
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
			<ul class="flex flex-wrap gap-8">
				<li class="flex flex-col items-center">
					<i
						v-if="owner.interests.includes('coding')"
						class="i-tabler-braces text-3xl m-0"
					/>
					<span class="uppercase font-bold">Coding</span>
				</li>
				<li class="flex flex-col items-center">
					<i
						v-if="owner.interests.includes('design')"
						class="i-tabler-pencil text-3xl m-0"
					/>
					<span class="uppercase font-bold">Design</span>
				</li>
				<li class="flex flex-col items-center">
					<i
						v-if="owner.interests.includes('travel')"
						class="i-tabler-plane text-3xl m-0"
					/>
					<span class="uppercase font-bold">Travel</span>
				</li>
				<li class="flex flex-col items-center">
					<i
						v-if="owner.interests.includes('gaming')"
						class="i-tabler-device-gamepad-2 text-3xl m-0"
					/>
					<span class="uppercase font-bold">Gaming</span>
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
	</main>
</template>
