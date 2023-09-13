const { Storage } = require('@google-cloud/storage');

bucketName = 'gowth12345';
// Creates a client

const storage = new Storage();

async function listFiles() {

    const [buckets] = await storage.getBuckets();

    console.log('Buckets:');
    for (const bucket of buckets)  {
        const bucketName = bucket.name;
        console.log(bucketName);
        await getFiles(bucketName);
       
    };
}

async function getFiles() {
    const [files] = await storage.bucket(bucketName).getFiles();
    console.log('Files:');
    files.forEach(file => {
        console.log('\t ' + file.name);
    });

   // return await Promise.resolve("Hello");
}
// Lists files in the bucket

listFiles().catch(console.error);