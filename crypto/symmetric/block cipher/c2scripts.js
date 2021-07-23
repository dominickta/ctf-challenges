let messages = [];  // messages to be encrypted
const number_msgs = 4;

const key_table = [
    [12, 6, 10, 15, 14, 0, 11, 1, 4, 7, 5, 8, 9, 13, 2, 3],
    [2, 0, 14, 1, 5, 13, 10, 9 ,6, 4, 8, 7, 11, 12, 3, 15],
    [6, 15, 2, 7, 12, 11, 0, 9, 4, 14, 8, 13, 10 ,5, 1, 3],
    [12, 0, 14, 4, 8, 11, 2, 7, 6, 9, 13, 15, 3, 1, 5, 10],
    [15, 11, 6, 3, 1, 8, 14, 9, 5, 2, 7, 12, 13, 0, 4, 10],
    [15, 10, 8, 5, 7, 14, 6, 3, 0, 12, 11, 1, 13, 4, 9 ,2],
    [2, 7, 14, 4, 11, 0, 3, 10, 6, 9, 8, 13, 5, 12, 15, 1],
    [12, 5, 11, 10, 3, 7, 1, 9, 15, 13, 14, 0, 8, 4, 6, 2]
]; // keyed permutation tables. Key size = 3 bits. each array defines a permutation

window.onload = populateKey;

// populate 4 encrypted messages
function populateKey() {
    // randomly generate four 4 bits messages
    // populate these messages:
    let list = document.getElementById("ciphertexts");
    let key = Math.floor(Math.random() * 8);
    for (let i = 0; i < 4; i++) {
        // generate message
        messages.push(Math.floor(Math.random() * 16));

        // encrypt the message using the key_table
        let encrpyted = key_table[key][messages[i]];

        let item = document.createElement("li");
        item.textContent = encrpyted;
        list.appendChild(item);
    }

    console.log(messages);

    // add event listener to the form
    document.getElementById("encrypt_form").addEventListener("submit", test_decrypted);
}

// check if answer is correct
function test_decrypted() {
    let inputs = document.getElementsByClassName("encrypted");
    let result = true;
    
    for (let i = 0; i < inputs.length; i++) {
        let value = parseInt(inputs[i].value);
        if (isNaN(value) || value !== messages[i]) {
            alert("Your " + i + "th decryption is wrong");
            result = false;
        }
    }

    if(result) {
		alert("Your decryption is correct");
	}
}