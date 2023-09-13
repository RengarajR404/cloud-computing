const {Storage} = require('@google-cloud/storage');

   const bucketName = 'gowth12345';
   const fileName = 'index_3.html';

  // Creates a client
  const storage = new Storage();

  async function makePublic() {
    await storage.bucket(bucketName).file(fileName).makePublic();
   const url= storage.bucket(bucketName).file(fileName).publicUrl();
    console.log(`${url} - is public URL.`);
  }

  makePublic().catch(console.error);
 