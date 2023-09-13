 // Imports the Google Cloud client library
 const {Storage} = require('@google-cloud/storage');

  // The ID of the bucket to copy the file to
   const destBucketName = 'gowth12345';

  // The ID of the GCS file to create
   const destFileName = 'index.html';

  // Creates a client
  const storage = new Storage({keyFilename: 'cse445-335504-4e78ade538f7.json'});

  async function copyFile() {
    // Copies the file to the other bucket
    const  b = storage.bucket(destBucketName);
    await b.upload(destFileName,{destination:'myindex.html'});

    console.log(
      `${destFileName} copied to gs://${destBucketName}/myindex.html`
    );
  }

  copyFile().catch(console.error);
  // [END storage_copy_file]

