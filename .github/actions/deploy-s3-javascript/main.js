const core = require('@actions/core');   // ← CJS require()
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    core.notice('Hello from my custom JavaScript Action!');
}
run();