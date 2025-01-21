<script>
	import { HeroSection, AboutmeSection, MyWorkSection, SkillsSection, ContactSection } from '$components';

	const { data } = $props();
let {workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutmeSection {workExperience}/>
<MyWorkSection {projects} />
<SkillsSection {skills}/>
<ContactSection />

