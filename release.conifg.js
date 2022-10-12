module.exports = {
  branches: 'master',
  repositoryUrl: 'https://github.com/fausto-sgobba/github-actions-course-react',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: ['*.zip', 'coverage/**'],
      },
    ],
  ],
};
