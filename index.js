const core = require('@actions/core')
const github = require('@actions/github')

try { 
 const githubActionsVariable = core.getInput('test')
 console.log(`hello ${githubActionsVariable}`)
 const hey = 'this is the output'
 core.setOutput("hey", hey);
} catch (error) { 
  core.setFailed(error.message)
}