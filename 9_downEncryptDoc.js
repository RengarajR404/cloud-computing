 const {Storage} = require('@google-cloud/storage');

 bucketName = 'gowth12345';
 srcFileName='index_3.html';
 encryptionKey='RTNZUL9Fr/wbv6vmOWUGxI6QtaQgvWr/AV0VYWWj3VI=';
 destFileName='index_3.html';

  // Creates a client
  const storage = new Storage();

  async function downloadEncryptedFile() {
    const options = {
      destination: destFileName,
    };

    await storage
      .bucket(bucketName)
      .file(srcFileName)
      .setEncryptionKey(Buffer.from(encryptionKey, 'base64'))
      .download(options);

    console.log(`File ${srcFileName} downloaded to ${destFileName}`);
  }

  downloadEncryptedFile().catch(console.error);
 