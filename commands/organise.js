function organiseFn(dirPath) {
	//console.log("Implement organise for", dirPath);
	//1. input <- directory path
	//2. create organised_files directory
	//3. identify catogories of all the files present in that input folder
	//4. copy/cut files in that organised directory into apt category folder
   
 
	//1. input <- directory path
	let destPath;
    if(dirPath==undefined) {
		  dirPath = process.cwd();  

        const doesExist = fs.existsSync(dirPath);		
		if(doesExist) {
            //2. create-> organised files directory	
			destPath = path.join(dirPath, "organised_files");
			if(!fs.existsSync(destPath))
				fs.mkdirSync(destPath);
        } else {
			console.log("Kindly enter the correct path");
			return;
		}
	}
	
	organizeHelper(dirPath,destPath);
	
}

function organizeHelper(src,dest) {
	//3. identify categories and put in correct dest from source
	let childNames = fs.readdirSync(src);
	for(let i = 0; i < childNames.length; i++) {
		let childPath = path.join(src, childNames[i]);
		let isFile =  fs.lstatSync(childPath).isFile();
		if(isFile) {
		//	console.log(childNames[i]);
	    let category=getCategory(childNames[i]);
     
	//4. copy/cut files in that organised directory into apt category folder
       sendFile(childPath, dest, category);
       console.log(`${childNames[i]} moved to ${category}`);
		}
	}
	
}

function sendFile(src, dest, category) {
  const categoryPath = path.join(dest,category);
  if(!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath);
  }

  let filename = path.basename(src);
  let destPath  = path.join(categoryPath,filename);
  fs.copyFileSync(src,destPath);
  fs.unlinkSync(src);
}

function getCategory(name) {
	let ext = path.extname(name).slice(1);
	for(let type in types) {
    let cTypeArray = types[type];
    if(cTypeArray.includes(ext)){
      return type;
    }
  }
  return "others";
  
}


module.exports = {
    organiseKey: organiseFn
}