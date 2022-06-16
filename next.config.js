/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
	images: {
		domains: ["images.ctfassets.net"]
	},
	reactStrictMode: true,
	i18n: i18n
});
