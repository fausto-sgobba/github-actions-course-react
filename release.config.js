module.exports = {
  branches: ["master"],
  repositoryUrl: "https://github.com/fausto-sgobba/github-actions-course-react",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", name: "build.zip", label: "Build" },
          { path: "coverage.zip", name: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
