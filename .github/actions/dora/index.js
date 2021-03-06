const core = require('@actions/core')
const github = require('@actions/github');

const token = core.getInput('token');
const octokit = github.getOctokit(token);

console.log('CI', process.env.CI);
console.log('GITHUB_ACTION', process.env.GITHUB_ACTION);
console.log('GITHUB_ACTION_PATH', process.env.GITHUB_ACTION_PATH);
console.log('GITHUB_ACTION_REPOSITORY', process.env.GITHUB_ACTION_REPOSITORY);
console.log('GITHUB_ACTIONS', process.env.GITHUB_ACTIONS);
console.log('GITHUB_ACTOR', process.env.GITHUB_ACTOR);
console.log('GITHUB_API_URL', process.env.GITHUB_API_URL);
console.log('GITHUB_BASE_REF', process.env.GITHUB_BASE_REF);
console.log('GITHUB_ENV', process.env.GITHUB_ENV);
console.log('GITHUB_EVENT_NAME', process.env.GITHUB_EVENT_NAME);
console.log('GITHUB_EVENT_PATH', process.env.GITHUB_EVENT_PATH);
console.log('GITHUB_GRAPHQL_URL', process.env.GITHUB_GRAPHQL_URL);
console.log('GITHUB_HEAD_REF', process.env.GITHUB_HEAD_REF);
console.log('GITHUB_JOB', process.env.GITHUB_JOB);
console.log('GITHUB_PATH', process.env.GITHUB_PATH);
console.log('GITHUB_REF', process.env.GITHUB_REF);
console.log('GITHUB_REF_NAME', process.env.GITHUB_REF_NAME);
console.log('GITHUB_REF_PROTECTED', process.env.GITHUB_REF_PROTECTED);
console.log('GITHUB_REF_TYPE', process.env.GITHUB_REF_TYPE);
console.log('GITHUB_REPOSITORY', process.env.GITHUB_REPOSITORY);
console.log('GITHUB_REPOSITORY_OWNER', process.env.GITHUB_REPOSITORY_OWNER);
console.log('GITHUB_RETENTION_DAYS', process.env.GITHUB_RETENTION_DAYS);
console.log('GITHUB_RUN_ATTEMPT', process.env.GITHUB_RUN_ATTEMPT);
console.log('GITHUB_RUN_ID', process.env.GITHUB_RUN_ID);
console.log('GITHUB_RUN_NUMBER', process.env.GITHUB_RUN_NUMBER);
console.log('GITHUB_SERVER_URL', process.env.GITHUB_SERVER_URL);
console.log('GITHUB_SHA', process.env.GITHUB_SHA);
console.log('GITHUB_WORKFLOW', process.env.GITHUB_WORKFLOW);
console.log('GITHUB_WORKSPACE', process.env.GITHUB_WORKSPACE);
console.log('RUNNER_ARCH', process.env.RUNNER_ARCH);
console.log('RUNNER_NAME', process.env.RUNNER_NAME);
console.log('RUNNER_OS', process.env.RUNNER_OS);
console.log('RUNNER_TEMP', process.env.RUNER_TEMP);
console.log('RUNNER_TOOL_CACHE', process.env.RUNNER_TOOL_CACHE);
console.log('GitHub context', JSON.stringify(github.context, null, 2));

async function run() {
  console.log('executing async function');
  try {
    console.log('starting octokit request');
    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', 
      {
        accept: 'application/vnd.github.v3+json',
        owner: 'mkohlmyr',
        repo: 'dora',
        pull_number: github.context.payload.number
      }
    );
    console.log('sucessful octokit request', response);
  } catch (ex) {
    console.error('failed octokit request', ex);
  } finally {
    console.log('finished octokit request block');
  }
}

console.log('will execute async function');
run();