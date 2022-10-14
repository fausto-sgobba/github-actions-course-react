const core = require("@actions/core");
const github = require("@actions/github");

try {
  const token = core.getInput("token");
  const title = core.getInput("title");
  const body = core.getInput("body");
  const assignees = core.getInput("assignees");

  const oktokit = new github.getOctokit(token);

  const response = oktokit.rest.issues.create({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    title,
    body,
    assignees: assignees ? assignees.split("\n") : undefined,
  });

  core.setOutput("response", JSON.stringify(response.data, null, "\n"));
} catch (error) {
  core.setFailed(error.message);
}
