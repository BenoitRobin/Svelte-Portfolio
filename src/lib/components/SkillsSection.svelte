<script lang="ts">
	import SectionHeadline from './UI/SectionHeadline.svelte';

	interface SkillsSectionProps {
		skills: Skill[];
	}

	let { skills }: SkillsSectionProps = $props();
</script>

<section class="mt-l">
	<SectionHeadline sectionName="skills">Skills</SectionHeadline>
	<div class="wrapper default-margin">
		<div class="skill-container mt-m">
			{#each skills as skill}
				<i class={skill.iconClass}></i>
			{/each}
		</div>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.skill-container {
		width: 40%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 20px;
		column-gap: 20px;
	}

	i {
		font-size: 60px;
		color: black;
	}

</style>