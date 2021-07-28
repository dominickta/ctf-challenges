# This challenge will show how vulnerable otp it is when the same key is used
import otp_lib as lib
import time

def challenge2():
    key, cipher = lib.encrypt("Hi there!")
    print("You've asked Alice to send \"Hi there!\" to Bob")
    print("The CipherText that you eavesdropped is :", cipher.hex())

    time.sleep(3)

    msg = "I’m good!"

    _, cipher = lib.encrypt(msg, key)
    print("You intercepted a message sent from Bob to Alice!")
    print("The Ciphertext is :", cipher.hex())

    lib.decryption_test(msg)

challenge2()