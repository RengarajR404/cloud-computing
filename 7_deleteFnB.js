
    const {Storage} = require('@google-cloud/storage');
    
    const bucketName = 'gowth12345';
    const fileName = 'index.html';

    const storage = new Storage();
  
    async function deleteFile() {
      await storage.bucket(bucketName).file(fileName).delete();
      await storage.bucket(bucketName).delete();
  
      console.log(`gs://${bucketName}/${fileName} deleted`);
    }
  
    deleteFile().catch(console.error);
  
  