const msg = "Hello! How are you doing?"; // The message the user needs to encrypt
const jamesMsg = "I am doing amazing!"; // The message that will be encrypted, and the user must decrypt it.
var jamesMsgEncrypted; // Encrypted message corresponding to 'jamesMsg'
var key1; // Key corresponding to 'msg'
var key2; // Key corresponding to 'jamesMsg'
var cipher; // Encrypted message corresponding to 'msg'

window.onload = populateKey;

// Populates key1 and key2
// Generates encrypted messages and provides user the information they need to solve the puzzles
function populateKey() {
	document.getElementById("encrypt_form").addEventListener("submit", test_encrypt);
	document.getElementById("decrypt_form").addEventListener("submit", test_decrypted);
	// Generate a key and initialize key1
	key1 = keyGen(msg.length);
	// Generate the encrypted message that the user needs to do themselves
	cipher = encryption(msg, key1);
	// Populate the HTML fields so that the user knows what is the 
	// - the message they need to encrypt
	// - the key they need to use to encrypt the message
	document.getElementById("key").textContent = key1;
	document.getElementById("msg").textContent = msg;
	
	// Generate a key and initialize key2
	key2 = keyGen(jamesMsg.length);
	// Generate the encrypted message that we'll provide for the user
	jamesMsgEncrypted = encryption(jamesMsg, key2);
	// Populate the HTML fields so that the user knows
	// - the encrypted message they need to decrypt
	// - the key they need to use for this message
	document.getElementById("msgBack").textContent = jamesMsgEncrypted;
	document.getElementById("second_key").textContent = key2;
	console.log(key1);
	console.log(key2);
	console.log(cipher);
	console.log(jamesMsg);
}

// Verify that the user inputted the proper encryption of the original msg
function test_encrypt() {
	console.log("testing..");
	// Get user's input
	var reply = document.getElementById("encrypted").value;
	// Get the answer key (i.e. what the user's answer should be)
	var answer_key = "";
	for (let i = 0; i < cipher.length; i++) {
		answer_key = answer_key + cipher[i].toString(16);
	}

	console.log("Answer to String:" + answer_key);
	console.log("User's reply:" + reply);
	if (reply === answer_key) {
		alert("Your encryption is correct");
		document.getElementById("user_input_decrypt").style.display = "contents";
	} else {
		alert("Your encryption is wrong. Try again");
	}
}

// Verify that the user properly decrypted the encrypted message
function test_decrypted() {
	var decryptedMessage = document.getElementById("decrypted").value;
	if( decryptedMessage === jamesMsg) {
		alert("Your decryption is correct");
	} else {
		alert("Your decryption is wrong");
	}
}