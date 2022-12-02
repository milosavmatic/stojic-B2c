/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      'static.tehnomanija.rs',
      'www.tehnomanija.rs',
      'online.bancaintesa.rs',
      'api.mobs.croonus.com',
      '25.19.215.162',
      'api.staging.croonus.com',
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig
