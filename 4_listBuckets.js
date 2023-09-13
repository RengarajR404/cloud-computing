const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function listBuckets() {
    const [buckets] = await storage.getBuckets();

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  }

  listBuckets().catch(console.error);