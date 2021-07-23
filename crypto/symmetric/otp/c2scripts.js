const ali_msg = "Hi there!";  // message that Alice sent to Bob
const bob_msg = "I'm good!";  // message that Bob sent to Alice
let reused_key;  // the key being reused in the conversation

window.onload = populateInfo;

// populate all necessary info for this challenge
function populateInfo() {
    // 1. generate a key that's going to be used more than once
    reused_key = keyGen(bob_msg.length);
    
    // encrypt alice's message
    let encrypted_ali_msg = encryption(ali_msg, reused_key);
    
    // parse the encrypted message(in array) to hex string
    let hex_enc_ali_msg = "";
    console.log(encrypted_ali_msg.length);
    for (let i = 0; i < encrypted_ali_msg.length; i++) {
        hex_enc_ali_msg += encrypted_ali_msg[i].toString(16);
    }

    // encrypt bob's message
    let encrypted_bob_msg = encryption(bob_msg, reused_key);
    let hex_enc_bob_msg = "";
    // parse the encrypted message to hex string
    for (let i = 0; i < encrypted_bob_msg.length; i++) {
        hex_enc_bob_msg += encrypted_bob_msg[i].toString(16);
    }

    // populate the 2 messages
    document.getElementById("cipher").textContent = hex_enc_ali_msg;
    document.getElementById("cipher2").textContent = hex_enc_bob_msg;

    // add behavior to test user answer
    document.getElementById("decrypt_form").addEventListener("submit", test_decrypted);
}

// check if the answer provided by the user is correct.
function test_decrypted() {
	var decryptedMessage = document.getElementById("decrypted").value;
	if( decryptedMessage === bob_msg) {
		alert("Your decryption is correct");
	} else {
		alert("Your decryption is wrong");
	}
}