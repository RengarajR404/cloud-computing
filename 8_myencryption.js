const crypto = require('crypto');

function generateEncryptionKey() {
  /**
   * Generates a 256 bit (32 byte) AES encryption key and prints the base64
   * representation.
   *
   * This is included for demonstration purposes. You should generate your own
   * key. Please remember that encryption keys should be handled with a
   * comprehensive security policy.
   */
  const buffer = crypto.randomBytes(32);
  const encodedKey = buffer.toString('base64');
  console.log(`Base 64 encoded encryption key: ${encodedKey}`);
}
generateEncryptionKey();