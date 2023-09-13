 // Imports the Google Cloud client library
 const {Storage} = require('@google-cloud/storage');

  // The ID of the bucket to copy the file to
   const destBucketName = 'gowth12345';

  // The ID of the GCS file to create
   const destFileName = 'index.html';

  // Creates a client
  //const storage = new Storage({keyFilename: 'cse445-335504-4833e0fcc30c.json'});
  const storage = new Storage();
  async function copyFile() {
    // Copies the file to the other bucket
    await storage.bucket(destBucketName).upload(destFileName);

    console.log(
      `${destFileName} copied to gs://${destBucketName}/${destFileName}`
    );
  }

  copyFile().catch(console.error);
  // [END storage_copy_file]

