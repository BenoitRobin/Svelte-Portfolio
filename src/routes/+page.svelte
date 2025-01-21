<script>
	import { HeroSection, AboutmeSection, MyWorkSection, SkillsSection } from '$components';

	const { data } = $props();
let {workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutmeSection {workExperience}/>
<MyWorkSection {projects} />
<SkillsSection {skills}/>

