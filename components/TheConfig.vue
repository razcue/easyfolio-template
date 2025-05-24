<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "@/composables/useTheme";

// Theme Management
const { activeTheme, activeMode, setTheme } = useTheme();

const availableThemes = Object.keys(themes);

// State for expanding or collapsing the config menu
const isExpanded = ref(false);

// Toggle between light and dark modes
const toggleMode = () => {
	const newMode = activeMode.value === "light" ? "dark" : "light";
	setTheme(activeTheme.value, newMode);
};

// Toggle menu expansion
const toggleExpand = () => {
	isExpanded.value = !isExpanded.value;
};
</script>

<template>
	<div
		:class="[
			'fixed top-55 right-6 min-[1170px]:right-[var(--side-to-side)] flex flex-col gap-2 items-end z-50 mt-2 mr-2',
			isExpanded &&
				'p-4 bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] shadow-[0_4px_6px_var(--color-shadow)] rounded-lg',
		]"
	>
		<div class="flex justify-between w-full">
			<!-- Toggle Light/Dark Mode Button (Visible only when expanded) -->
			<button
				v-if="
					isExpanded &&
					themes[activeTheme]?.light &&
					themes[activeTheme]?.dark
				"
				@click="toggleMode"
				class="p-2 px-3 cursor-pointer rounded-full bg-[var(--color-primary)] text-[var(--color-text)] shadow-[0_4px_6px_var(--color-shadow)] hover:opacity-80 transition-all"
				aria-label="Toggle Dark/Light Mode"
			>
				<i
					:class="[
						'text-md',
						activeMode === 'light'
							? 'i-tabler-moon'
							: 'i-tabler-sun',
					]"
				></i>
			</button>
			<!-- Expand/Contract Button -->
			<button
				@click="toggleExpand"
				:class="[
					'fixed top-55 right-4 min-[1170px]:right-[var(--side-to-side)] p-4 flex rounded-full cursor-pointer bg-[var(--color-primary)] text-[var(--color-text)] shadow-[0_4px_6px_var(--color-shadow)] hover:scale-105 transition-all',
					isExpanded ? 'flex-row-reverse' : 'flex-row',
				]"
				aria-label="Toggle Config Menu"
			>
				<i
					:class="[
						'text-xl',
						isExpanded
							? 'i-tabler-arrow-right'
							: 'i-tabler-arrow-left',
					]"
				></i>
				<i class="i-tabler-settings text-xl"></i>
			</button>
		</div>

		<!-- Configuration Menu (Visible only when expanded) -->
		<select
			v-if="isExpanded"
			:class="[
				'p-2 min-w-32 cursor-pointer border-[var(--color-border)] rounded bg-[var(--color-bg)] border-2 text-[var(--color-text)] focus-visible:outline-unset focus-visible:ring-0 focus-visible:border-[var(--color-border)] ',
				!(themes[activeTheme]?.light && themes[activeTheme]?.dark) &&
					'mt-10',
			]"
			v-model="activeTheme"
			@change="setTheme(activeTheme, activeMode)"
		>
			<option
				v-for="theme in availableThemes"
				:key="theme"
				:value="theme"
			>
				{{ theme }}
			</option>
		</select>
	</div>
</template>

<style scoped>
/* Optional hover effect for smoother interactions */
button:hover {
	transform: scale(1.05);
}
</style>
