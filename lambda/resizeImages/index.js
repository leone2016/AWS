const im = require('imagemagick');
const fs = require('fs');
const os = require('os');
const uuidv4 = require('uuid/v4');
const { promisify } = require('util');
const AWS = require('aws-sdk');

const resizeAsync = promisify(im.resize); // it will convert the callback style resize function into a function that return us a promise
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);


AWS.config.update({ region: 'sa-east-1' });
const s3 = new AWS.S3();

// for more detail go to CONFIGURE TEST EVENTS> S3 put
// subir imagen por consola
//aws s3 cp resize-images.zip s3://leo-curso-images/resize-images.zip
//aws lambda update-function-code --function-name resizeImage --s3-bucket leo-curso-images --s3-key resize-images.zip --publish
exports.handler = async(event) => {
    let filesProcessed = event.Records.map(async(record) => {
        // for more detail go to CONFIGURE TEST EVENTS> S3 put
        let bucket = record.s3.bucket.name;
        let filename = record.s3.object.key; //nombre de la imagen
        // Get file from S3
        var params = {
            Bucket: bucket,
            Key: filename
        };
        let inputData = await s3.getObject(params).promise();
        // Resize the file
        let tempFile = os.tmpdir() + '/' + uuidv4() + '.jpg';
        let resizeArgs = {
            srcData: inputData.Body,
            dstPath: tempFile,
            width: 150
        };
        await resizeAsync(resizeArgs);
        // Read the resized file
        let resizedData = await readFileAsync(tempFile);

        // Upload the new file to s3
        let targetFilename = filename.substring(0, filename.lastIndexOf('.')) + '-small.jpg';
        var params = {
            Bucket: bucket + '-dest', // en bucket va el nombre de bucket que cree, leo-curso-imagenes
            Key: targetFilename,
            Body: new Buffer(resizedData),
            ContentType: 'image/jpeg'
        };

        await s3.putObject(params).promise(); //convierte en una promesa
        return await unlinkAsync(tempFile);
    });
    await Promise.all(filesProcessed);
    console.log("done");
    return "done";
}