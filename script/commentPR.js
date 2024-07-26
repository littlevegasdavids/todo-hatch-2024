const axios = require("axios");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

const pullNumber = args.PR_NUMBER

const token = "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";

const url = `https://api.github.com/repos/littlevegasdavids/todo-hatch-2024/issues/${pullNumber}/comments`;

const testComment = "Second comment from script";

const headers = {
  Authorization: `token ${token}`,
  Accept: "application/vnd.github.v3+json",
};

const data = {
  body: testComment,
};

async function postComment() {
  if(!pullNumber){
    console.error("PR_NUMBER not defined in CLI. Please provide a pull request number");
    return
  }

  try {
    await axios.post(url, data, { headers });
    console.log("Comment successfully posted");
  } catch (error) {
    console.error("Error posting comment:", error.response.data);
  }
}

postComment();