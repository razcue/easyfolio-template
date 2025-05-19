<script setup lang="ts">
const { owner } = useContent();
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
						<li
							v-for="(item, index) in owner.summary.profile"
							:key="index"
						>
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
							v-for="(item, index) in owner.summary
								.managementBackground"
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
							v-for="(item, index) in owner.summary
								.technicalBackground"
							:key="index"
						>
							{{ item }}
						</li>
					</ul>
				</div>
			</div>
		</CVSection>

		<!-- Cover Letter Section -->
		<CVSection>
			<template #icon>
				<i class="i-tabler-mail text-3xl" />
			</template>
			<template #heading>Cover Letter</template>
			<p>{{ owner.coverLetter }}</p>
		</CVSection>

		<!-- Skills Section -->
		<CVSection>
			<template #icon>
				<i class="i-tabler-mail text-3xl" />
			</template>
			<template #heading>Skills</template>
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
		</CVSection>

		<!-- Portfolio Section -->
		<CVSection>
			<template #icon>
				<i class="i-tabler-mail text-3xl" />
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
		</CVSection>

		<!-- Education & Certification Section -->
		<CVSection>
			<template #icon>
				<i class="i-tabler-mail text-3xl" />
			</template>
			<template #heading>Education & Certification</template>
			<ul>
				<li v-for="(item, index) in owner.education" :key="index">
					<strong>{{ item.title }}:</strong> {{ item.institution }} :
					{{ item.date }}
				</li>
			</ul>
		</CVSection>

		<!-- Languages Section -->
		<CVSection>
			<template #icon>
				<i class="i-tabler-mail text-3xl" />
			</template>
			<template #heading>Languages</template>
			<ul>
				<li v-for="(language, index) in owner.languages" :key="index">
					<strong>{{ language.name }}:</strong> {{ language.level }}
				</li>
			</ul>
		</CVSection>

		<!-- Selected Experience Section -->
		<CVSection>
			<template #icon>
				<i class="i-tabler-mail text-3xl" />
			</template>
			<template #heading>Selected Experience</template>
			<article
				v-for="(experience, index) in owner.experience"
				:key="index"
			>
				<h3>{{ experience.company }}</h3>
				<p><strong>Duration:</strong> {{ experience.duration }}</p>
				<p v-if="experience.role">
					<strong>Role:</strong> {{ experience.role }}
				</p>
				<p v-if="experience.project">
					<strong>Project:</strong> {{ experience.project }}
				</p>
				<p v-if="experience.technologies">
					<strong>Core Technologies:</strong>
					{{ experience.technologies.join(", ") }}
				</p>
				<h4>Responsibilities/Achievements:</h4>
				<ul>
					<li
						v-for="(task, idx) in experience.responsibilities"
						:key="idx"
					>
						{{ task }}
					</li>
				</ul>
			</article>
		</CVSection>

		<!-- Interests Section -->
		<CVSection>
			<template #icon>
				<i class="i-tabler-mail text-3xl" />
			</template>
			<template #heading>Interests</template>
			<ul class="flex flex-wrap gap-8">
				<li
					v-for="(interest, index) in owner.interests"
					:key="index"
					class="flex flex-col items-center space-x-2"
				>
					<i :class="interest.icon + ' text-3xl'" />
					<span class="uppercase font-bold">{{ interest.name }}</span>
				</li>
			</ul>
		</CVSection>

		<!-- Availability to Travel Section -->
		<CVSection>
			<template #icon>
				<i class="i-tabler-mail text-3xl" />
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
		</CVSection>
	</main>
</template>
