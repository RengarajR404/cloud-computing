// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');


const storage = new Storage();

const bucketName = 'renga_bucket';

async function createBucket() {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}


createBucket().catch(console.error);