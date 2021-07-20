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

/**
 * Generate a cryptographically random key
 * 
 * @param length number of bytes of the key 
 * @returns an 8 bit int array, each element represents a byte
 */
function keyGen (length) {
    var key = new Unit8Array(length);
    window.crypto.getRandomValues(key);

    return key;
}
