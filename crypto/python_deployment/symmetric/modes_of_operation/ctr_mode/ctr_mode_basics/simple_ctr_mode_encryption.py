import random

# key table
key_table = [
    [12, 6, 10, 15, 14, 0, 11, 1, 4, 7, 5, 8, 9, 13, 2, 3],
    [2, 0, 14, 1, 5, 13, 10, 9, 6, 4, 8, 7, 11, 12, 3, 15],
    [6, 15, 2, 7, 12, 11, 0, 9, 4, 14, 8, 13, 10, 5, 1, 3],
    [12, 0, 14, 4, 8, 11, 2, 7, 6, 9, 13, 15, 3, 1, 5, 10],
    [15, 11, 6, 3, 1, 8, 14, 9, 5, 2, 7, 12, 13, 0, 4, 10],
    [15, 10, 8, 5, 7, 14, 6, 3, 0, 12, 11, 1, 13, 4, 9, 2],
    [2, 7, 14, 4, 11, 0, 3, 10, 6, 9, 8, 13, 5, 12, 15, 1],
    [12, 5, 11, 10, 3, 7, 1, 9, 15, 13, 14, 0, 8, 4, 6, 2]
]

# This function generate a random
# Key used to encrypt the simple block cipher
def keyGen():
    return random.randint(0, 7)

# This function encrypts the message passed in
# using the given key using counter_mode
#
# return a hex-string where each hex number signifies a cipher block
def encrypt(msg, key):
    iv = random.randint(0, 15)
    res = format(iv, 'x')
    for i in range(len(msg)):
        msg = msg.upper()
        ind = ord(msg[i]) - ord('A')
        if (ind < 0 or ind > 15):
            return None
        else:
            res += format(key_table[key][(iv + i + 1) % 15] ^ ind, 'x')
    
    return res, iv

# This function decrypts the cyphertext passed in
# using the given key
#
# return a decoded letter string
def decrypt(cipher, key):
    res = ""
    iv = int(cipher[0], 16)
    for i in range(len(cipher) - 1):
        inter = key_table[key][(iv + i + 1) % 15]
        ind = int(cipher[i + 1], 16)
        res += chr(ord('A') + ind)
    return res

