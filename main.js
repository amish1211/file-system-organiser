#! /usr/bin/env node

// process.argv holds the array with all the values included in command line.
// let inputArr = process.argv;
// console.log(inputArr);
//output
/*
[
    '/home/amish/.nvm/versions/node/v14.19.1/bin/node',
    '/home/amish/MissionSummer/Notebook/WebDev/Javascript/FileSystemOrganiser/input.js',
    'hello',
    'how',
    'are',
    'you'
  ]
  */



  // How command line arguments would look:
  // node main.js tree "dirPath"
  // node main.js organise "dirPath"
  // node main.js help
 
const organiseObj = require('./commands/organise');
const treeObj = require('./commands/tree');
const helpObj = require('./commands/help');
const fs = require("fs");
const path = require("path");
const chalk = require('chalk');
const { dir } = require("console");
 
const inputArr = process.argv.slice(2);
const command = inputArr[0];
const dirPath = inputArr[1];

let types = { 
    media:["mp4","mkv"],
    archives:['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents:['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp',
                'odg', 'odf', 'txt', 'ps','tex'],
    app:['exe', 'dmg', 'pkg', 'deb']
}



switch (command) {
  case "tree":
    treeObj.treeKey(dirPath);      
    break;

  case "organise":
    organiseObj.organiseKey(dirPath);  
    break;

  case "help":
   helpObj.helpKey();
    break;

  default:
	helpObj.helpKey();
    break;
}







// nmp init -y 
// then make "bin": {"main.js"}
//sudo npm link


