const { execute } = require("katalon-cli/src/katalon-studio");
const { getInput, logError } = require("gha-utils");

const user_version = getInput("version");
const user_projectPath = getInput("projectPath");
const user_testSuitePath = getInput("testSuitePath");
const user_browserType = getInput("browserType");
const user_executionProfile = getInput("executionProfile");

const apiKey = '2d04df89-8ae6-4b1d-9f40-ca383c8bc02a';

if (!apiKey) {
  logError("API key is not set in the environment variables.");
  process.exit(1);
}

let user_args = `-noSplash -retry=0 -testSuitePath="${user_testSuitePath}" -browserType=${user_browserType} -executionProfile=${user_executionProfile} -apiKey=${apiKey} --config -webui.autoUpdateDrivers=true`;

try {
  execute(user_version, "", user_projectPath, user_args, "", "", {
    info: function (message) {
      console.log(message);
    },
    debug: function (message) {
      console.log(message);
    },
    error: function (message) {
      console.error(message);
    },
  })
    .then((status) => {
      if (status !== 0) {
        logError(`Exit code ${status}.`);
      }
    })
    .catch((err) => {
      console.error(err);
      logError(err);
    });
} catch (error) {
  console.error(error);
  logError(error.message);
}
