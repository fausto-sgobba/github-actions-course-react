const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.debug("Hello action execution started");
  core.warning("Example warning debug log");
  core.error("Example error debug log");

  // throw new Error("intentional error");
  const name = core.getInput("who-to-greet");
  // core.setSecret(name); // for testing purposes
  console.log(`hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("Logging github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("HELLO", "hello");
} catch (error) {
  core.setFailed(error.message);
}
