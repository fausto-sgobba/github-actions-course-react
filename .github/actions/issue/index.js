const core = require("@actions/core");
const github = require("@actions/github");

const run = async () => {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const oktokit = new github.getOctokit(token);

    const response = await oktokit.rest.issues.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      title,
      body,
      assignees: [github.context.payload.pusher.name],
    });

    core.setOutput("response", JSON.stringify(response.data));
  } catch (error) {
    core.setFailed(error.message);
  }
};
run();
