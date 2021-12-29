const { execSync } = require("child_process");

function pushToBuild(pushOBJ) {
  execSync(`rm -r ../${pushOBJ.repoName}`);
  execSync(`mkdir ../${pushOBJ.repoName}`)
  execSync(`git clone ${pushOBJ.gitURL} ../${pushOBJ.repoName}`);
  execSync(`npm install --prefix ../${pushOBJ.repoName}/${pushOBJ.repoName}`);
  execSync(`pm2 start ../${pushOBJ.repoName}/${pushOBJ.repoName}/${pushOBJ.main_file}`);
}

module.exports = { pushToBuild };
