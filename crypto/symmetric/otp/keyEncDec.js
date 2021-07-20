/**
 * Decrypt a message given the key that was used to encrypt
 * 
 * @param cipher a encrypted message that you want to decrypt
 * @param key a byte array that you will use to dencrypt the message
 * @returns a decrypted message
 */
function decrypt(cipher, key) {
	if (cipher.length != key.length) {
		return null;
	}

	//XOR the byte arrays to decrypt the message
	let decryptedBytes = [];
	for (let i = 0; i < cipher.length; i++) {
		decryptedBytes.push(cipher[i] ^ key[i]);
	}
	//convert byte array back to string
	let msg = ""
	for (let i = 0; i < decryptedBytes.length; i++) {
		msg += String.fromCharCode(decryptedBytes[i]);
	}
	return msg;
}

/**
 * Encrypt a message given a certain key
 * 
 * @param msg a string that you want to encrypt
 * @param key a byte array that you will use to encrypt the message
 * @returns a encrypted message in byte array
 */
function encryption(msg, key = null){
	if (msg.length != key.length) {
		key = keyGen(msg.length);
	}
    let encoder = new TextEncoder();
    let msgbyte = encoder.encode(msg);
    var cipher = [];
    for (let i=0;i<msgbyte.length;i++) cipher.push(msgbyte[i]^key[i]);
    
    return cipher;
}

/**
 * Generate a cryptographically random key
 * 
 * @param length number of bytes of the key 
 * @returns an 8 bit int array, each element represents a byte
 */
function keyGen (length) {
    var key = new Uint8Array(length);
    window.crypto.getRandomValues(key);

    return key;
}
