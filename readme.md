## How To Use
```
git clone https://github.com/chriskilinc/NodePlayground
cd NodePlayground
npm install
npm start
```

## What Is This?
This is my Node.js boilerplate!  
I use this project to:
+ Reuse as a Template for future projects
+ Store my learning progress
+ Share code to other users
+ Retrieve feedback for refactoring purposes
+ Play around with new JavaScript functionality

## Under The Hood
Entrypoint is index.js  
All code is written in /src
When writing "npm start" a few things happens:
+ Creates folder 'build'
+ Build/Transpiles code from '/src' into to '/build' folder using Babel
+ Node then runs index.js from '/build' folder
