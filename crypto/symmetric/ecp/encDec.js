function keyGen(length) {
    key = Math.floor(Math.random() * (length - 1)) + 1;
    return key
}

function encryption (message, key) {
    var encrypted = message.substring(key, key.length) +
              message.substring(0, key);
    return encrypted

}

function decryption (message, key) {

    encryption(message, message.length - key)
    return decrypted
}