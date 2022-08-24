//Help implemented
function helpFn(dirPath) {
	console.log(`List of all commands: 
   node main.js tree "dirPath"
   node main.js organise "dirPath"
   node main.js help`);
}

module.exports = {
    helpKey:helpFn
}