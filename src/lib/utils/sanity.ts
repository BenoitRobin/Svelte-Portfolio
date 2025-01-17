import { createClient, type ClientConfig } from '@sanity/client';
const config: ClientConfig = {
	projectId: 'cuputefl',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-01-17'
};

const sanityClient = createClient(config);
export default sanityClient;
