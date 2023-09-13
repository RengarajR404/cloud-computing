// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');


const storage = new Storage({keyFilename: 'linuxtrial-349009-08709f972b95.json'});

const bucketName = 'mynewbucket_rrr';

async function createBucket() {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}


createBucket().catch(console.error);