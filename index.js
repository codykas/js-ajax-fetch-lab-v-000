function getIssues() {
  const repo = `https://api.github.com/repos/codykas/javascript-fetch-lab/issues`
  fetch(repo).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let array = json.map(issue => `<li>${issue.title}</li><ul><li>${issue.body}</li></ul>`).join("")
  $("#issues").append(`<ul>${array}</ul>`)
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
