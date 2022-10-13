const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who-to-greet");
  console.log(`hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
