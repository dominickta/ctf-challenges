# This challenge will show how vulnerable block cipher is it is when there are not a lot of permutations
import block_cipher_lib as lib
import time

def challenge2():
    key = lib.key_gen(6)
    cipher = lib.encrypt("ABC", key) #Change this msg
    print("You've asked Alice to send \"Hi there!\" to Bob")
    print("The CipherText that you eavesdropped is :", cipher)

    time.sleep(3)

    msg = "ABC" #Change this msg

    cipher = lib.encrypt(msg, key)
    print("You intercepted a message sent from Bob to Alice!")
    print("The Ciphertext is :", cipher)

    lib.decryption_test(msg)

challenge2()