#!/usr/bin/node

var dirName=process.argv[2];

var fs=require('fs');

if(fs.existsSync(dirName)){

console.log("sorry:"+dirName+" has exists!");

}else{

fs.mkdirSync("./"+dirName);
fs.mkdirSync("./"+dirName+"/css");
fs.mkdirSync("./"+dirName+"/js");

fs.writeFileSync("./"+dirName+"/index.html","<!DOCTYPE>\n<title>hello</title>\n<h1>Hi</h1>");
fs.writeFileSync("./"+dirName+"/css/style.css","hi{color: red;}");
fs.writeFileSync("./"+dirName+"/js/main.js",'var string = "Hello World"\nalert(string)');

console.log("create "+dirName+" success!");
  
}
