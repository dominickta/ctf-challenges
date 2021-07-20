/**
 * Decrypts a cipher, given its corresponding key.
 * 
 * @param cipher a byte array of size n
 * @param key a byte array of size n
 * @returns a string representing the decrypted message from the cipher
 */
function decrypt(cipher, key) {
	if (cipher.length != key.length) {
		return null;
	}
	let decryptedBytes = [];
	for (let i = 0; i < cipher.length; i++) {
		decryptedBytes.push(cipher[i] ^ key[i]);
	}
	let msg = ""
	for (let i = 0; i < decryptedBytes.length; i++) {
		msg += String.fromCharCode(decryptedBytes[i]);
	}
	return msg;
}


function encryption(msg, key){
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
