const fs = require("fs");

fs.readFile("dd.json","utf8",(err,data)=>{
	if(err){
		
		console.error(err.message);

	}else{
	jsondata = JSON.parse(data);

	console.log(jsondata.name)
	}
})
