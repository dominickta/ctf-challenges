# This python program implements the basic encryption and decryption
# challenge of block cipher

import block_cipher_lib as lib

def challenge1():
    key = lib.key_gen(6)
    cipher = lib.encrypt("ABC", key) #change the msg here
    print("The Key is :", key)
    lib.encryption_test(cipher)

    print("You've received a message from James: ")
    msg = "ABC" #change this msg
    new_key = lib.key_gen(6)
    cipher = lib.encrypt(msg, new_key)

    print("The New Key is :", new_key)
    print("The ciphertext is:", cipher)
    lib.decryption_test(msg)

challenge1()
