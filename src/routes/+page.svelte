<script>
	import { HeroSection, AboutmeSection } from '$components';

	const { data } = $props();
let {workExperience} = data;
</script>

<HeroSection />
<AboutmeSection {workExperience}/>

