# This python program implements the basic encryption and decryption
# challenge of One Time Pad

import time
import secrets

# Helper Functions:

# This function parses a string into an array of bytes
def toBytes(s:str):
    return s.encode("utf-8")

# This function converts an array of bytes back to a String
def toString(b):
    return b.decode("utf-8")

# These functions take care of user input and prompt user for a correct answer
def encryption_test(target):
    while True:
        num = input("Put the ciphertext you have found here (in hex): \n")
        try:
            decimal = int(num, 16)
            if (target.hex() == format(decimal,'x')):
                print("That's correct!")
                print("Message sent...")
                time.sleep(3)
                return
            else:
                print("That's not correct. Try Again!")
        except ValueError:
            print("You did not enter a hexdecimal number")

def decryption_test(target):
    while True:
        num = input("What has James sent to you? Put your answer here (in a String): \n")
        if (num == target):
            print("That's correct! \n You've cleared the challenge!")            
            return
        else:
            print("That's not what James send to you, try again!")


# For every encryption algorithm, we need at least 3 functions

# Generate a random key for OTP
# The key is only for One time use
# reusing a key will make the encryption not secure
#
# Parameter:
#   - length: number of bits of the plaintext being encrypted
#
# Return:
#   Key that has the same length as the plaintext being encrypted
def key_gen(length):
    return secrets.token_bytes(length)

# Encrypt the message provided
# Will generate a random key of the same length (in bits) as the msg
# 
# Parameter:
#   - msg: the message to be encrypted, in string
#   - key: a key, in bytes, of the same length as msg
#
# Return:
#   1. Key used to encrypt the message, in bytes
#   2. ciphertext/encrypted message, in bytes
def encrypt(msg, key=None):
    bits = toBytes(msg)
    if (key == None or len(key) != len(bits)):
        key = key_gen(len(bits))

    cipher = bytes([a ^ b for (a,b) in zip(bits, key)])

    return key, cipher

# Decrypt a message provided
#
# Parameter:
# - cipher: ciphertext to be decrypted, in bytes
# - key : key used to decrypt the ciphertext, in bytes
#
# Return:
#   The decrypted message in String, or None if the length of cipher != length of key
def decrypt(cipher, key):
    if (len(key) != len(cipher)):
        return None
    plain = bytes([a ^ b for (a,b) in zip(cipher, key)])
    return toString(plain) 

def challenge1():
    key, cipher = encrypt("Hello! How are you doing?")
    print("The Key is :", key.hex())
    encryption_test(cipher)

    print("You've received a message from James: ")
    msg = "Hey! Good to hear from you!"
    new_key, cipher = encrypt(msg)

    print("The New Key is :", new_key.hex())
    print("The ciphertext is:", cipher.hex())
    decryption_test(msg)

challenge1()
