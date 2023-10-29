const fs = require('fs/promises');

async function readFile() {
  // fs.readFile('data.txt', function (error, fileData) {
  //   if (error) {
  //     //
  //   }
  //   console.log('File parsing done!');
  //   console.log(fileData.toString());
  // });

  // fs.readFile('data.txt')
  //   .then(function (fileData) {
  //     console.log('File parsing done!');
  //     console.log(fileData.toString());
  //     // return anotherAsyncOperation;
  //   })
  //   .then(function () {
  //     console.log('other async tasks');
  //   })
  //   .catch(function (error) {
  //     console.log('error');
  //   });
  try {
    const fileData = await fs.readFile('data.txt');
    console.log('File parsing done!');
    console.log(fileData.toString());
  } catch (error) {
    console.log(error);
  }

  console.log('Hi there!');
}

readFile();
