# This python program implements the basic encryption and decryption
# challenge of One Time Pad

import otp_lib as lib

def challenge1():
    key, cipher = lib.encrypt("Hello! How are you doing?")
    print("The Key is :", key.hex())
    lib.encryption_test(cipher)

    print("You've received a message from James: ")
    msg = "Hey! Good to hear from you!"
    new_key, cipher = lib.encrypt(msg)

    print("The New Key is :", new_key.hex())
    print("The ciphertext is:", cipher.hex())
    lib.decryption_test(msg)

challenge1()
