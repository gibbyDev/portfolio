// /** @type {import('next').NextConfig} */
// const isGithubPages = process.env.NODE_ENV === 'production';
//
// module.exports = {
//   output: 'export', // Ensures static export
//   assetPrefix: isGithubPages ? '/portfolio/' : '',
//   basePath: isGithubPages ? '/portfolio' : '',
// };
//
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ensures static HTML export
  images: {
    unoptimized: true, // required if you use next/image in static export
  },
};

module.exports = nextConfig;

