import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

$.getJSON('https://api.github.com/repos/bad-at-naming/repo/contents/testrepo.json', main)
const TIMETABLE = "Octo Von Bismark"
    

async function main(shaq) {
    const octokit = new Octokit({
        auth:"Important code thing i am NOT revealing to the public",
      });
          
      try {
        const contentEncoded = btoa(TIMETABLE)
    
        const { data } = await octokit.repos.createOrUpdateFileContents({
          // replace the owner and email with your own details
          owner: "bad-at-naming",
          repo: "testrepo",
          path: "testrepo.json",
          message: "message",
          sha: shaq['sha'],
          content: contentEncoded,
          committer: {
            name: `Octokit Bot`,
            email: "a@gmail.com",
          },
          author: {
            name: "Octokit Bot",
            email: "b@gmail.com",
          },
        });
    
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    
