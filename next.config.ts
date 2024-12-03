import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	sassOptions: {
		api: 'modern-compiler',
		additionalData: '@import "@/assets/styles/scss/index.scss";'
	}
};

export default nextConfig;
