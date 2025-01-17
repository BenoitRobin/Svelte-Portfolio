<script>
	import { HeroSection, AboutmeSection, MyWorkSection } from '$components';

	const { data } = $props();
let {workExperience, projects } = data;
</script>

<HeroSection />
<AboutmeSection {workExperience}/>
<MyWorkSection {projects} />

