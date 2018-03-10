#!/bin/sh sh
if [ -d $1 ];then
  echo "sorry:dir exists"
else
 mkdir ./$1
 cd ./$1
 mkdir ./css
 mkdir ./js
 echo -e  "<!DOCTYPE>\n<title>hello</title>\n<h1>Hi</h1>" > index.html
 echo "hi{color: red;}" > ./css/style.css
 echo -e 'var string = "Hello World"\nalert(string)' > ./js/main.js
fi
