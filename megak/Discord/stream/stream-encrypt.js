const { pipeline } = require ('stream').promises;
const { createCipher }  = require('crypto');
const{ createReadStream, createWriteStream } = require('fs');
const run = async() => {
    const [,,inputFile, outputFile] = process.argv;

    await pipeline (
        createReadStream(inputFile),
        createCipher('aes-192-cbc'),
        createWriteStream(outputFile),
 )
}


run();