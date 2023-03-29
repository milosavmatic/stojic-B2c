/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
	reactStrictMode: false,
	swcMinify: true,
	compress: true,
	images: {
		domains: [
			'static.tehnomanija.rs',
			'www.tehnomanija.rs',
			'online.bancaintesa.rs',
			'api.stojic.rs',
			'25.19.215.162',
			'api.staging.croonus.com',
		],
	},
	env: {
		API_URL: process.env.API_URL,
		CAPTCHAKEY: process.env.CAPTCHAKEY,
		BASE_URL: process.env.BASE_URL,
		SEO_KEYWORDS: process.env.SEO_KEYWORDS,
		SEO_DESCRIPTION: process.env.SEO_DESCRIPTION,
		SEO_OGTITLE: process.env.SEO_OGTITLE,
		SEO_OGDESCRIPTION: process.env.SEO_OGDESCRIPTION,
		SEO_OGIMAGE: process.env.SEO_OGIMAGE,
	},
});

module.exports = nextConfig;
