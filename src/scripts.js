const { execSync } = require("child_process");

function pushExistingToBuild(pushOBJ) {
  execSync(`rm -rf ../${pushOBJ.repoName}`);
  execSync(`mkdir ../${pushOBJ.repoName}`);
  execSync(`git clone ${pushOBJ.gitURL} ../${pushOBJ.repoName}`);
  //execSync(`npm install --prefix ../${pushOBJ.repoName}`);
  execSync(`pm2 stop ${pushOBJ.main_file}`);
  execSync(`pm2 start ../${pushOBJ.repoName}/${pushOBJ.main_file}`);
}

function pushNewToBuild(pushOBJ) {
  execSync(`rm -rf ../${pushOBJ.repoName}`);
  execSync(`mkdir ../${pushOBJ.repoName}`);
  execSync(`git clone ${pushOBJ.gitURL} ../${pushOBJ.repoName}`);
  execSync(`pm2 start ../${pushOBJ.repoName}/${pushOBJ.main_file}`);
}

module.exports = { pushExistingToBuild, pushNewToBuild };
