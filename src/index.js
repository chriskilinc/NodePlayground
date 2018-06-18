const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version 
const readFile = util.promisify(fs.readFile);

//  main()
async function main() {
  // Can't use `await` outside of an async function so you need to chain with then()
  await getFile('./media/test.txt', 'utf8').then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  })
  console.log("Hello World");
}

//  Will return contents of file in specific encoding
async function getFile(path, options) {
  return await readFile(path, options);
}

main();


