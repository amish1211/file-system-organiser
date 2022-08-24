const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
function treeFn(dirPath) {
  if (dirPath == undefined) {
    dirPath = process.cwd();
  }
    const doesExist = fs.existsSync(dirPath);
    console.log(doesExist);
    if (doesExist) {
      if (fs.lstatSync(dirPath).isFile()) {
        console.log(path.basename(dirPath));
      }

      else {
        console.log("tree Helper ran");
        treeHelper(dirPath, "", "");
      }


    } else {
      console.log("Kindly enter the correct path");
      return;
    }
  }



function treeHelper(dirPath, indent, loopIndent) {

  console.log(`${indent}|__${chalk.blue.bold(path.basename(dirPath))}`);
  let childList = fs.readdirSync(dirPath);
  indent = loopIndent;
  indent = indent + "   ";
  for (let i = 0; i < childList.length; i++) {
    let childPath = path.join(dirPath, childList[i]);
    if (fs.lstatSync(childPath).isFile()) {
      console.log(indent + "|__" + childList[i]);
    }
    else {
      if (i < childList.length - 1)
        treeHelper(childPath, indent, indent + '|');
      else
        treeHelper(childPath, indent, indent);

    }



  }
}

module.exports = {
  treeKey: treeFn
}