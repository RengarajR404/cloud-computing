const {Storage} = require('@google-cloud/storage');
bucketName='gowth12345';
fileName='myindex.html';
destFileName='index_1.html'

  // Creates a client
  const storage = new Storage();

  async function downloadFile() {
    const options = {
      destination: destFileName,
    };

    // Downloads the file
    await storage.bucket(bucketName).file(fileName).download(options);

    console.log(
      `gs://${bucketName}/${fileName} downloaded to ${destFileName}.`
    );
  }

  downloadFile().catch(console.error);