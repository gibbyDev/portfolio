/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Ensures static export
  assetPrefix: isGithubPages ? '/portfolio/' : '',
  basePath: isGithubPages ? '/portfolio' : '',
};
