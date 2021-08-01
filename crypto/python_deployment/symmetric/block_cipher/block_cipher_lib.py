import random
import time
from array import *


# These functions take care of user input and prompt user for a correct answer
def encryption_test(target):
    while True:
        num = input("Put the ciphertext you have found here (in a String): \n")
        if (num == target):
            print("That's correct!")
            print("Message sent...")
            time.sleep(3)
            return
        else:
            print("That's not correct. Try Again!")


def decryption_test(target):
    while True:
        num = input("What is the message? Put your answer here (in a String): \n")
        if (num == target):
            print("That's correct! \n You've cleared the challenge!")            
            return
        else:
            print("That's not the message, try again!")


def key_gen(length):
    return random.randrange(0, length, 1)

def encrypt(msg, key):
    table = [
    [0, 12, 2, 6, 12, 15, 15, 2, 12],
    [1, 6, 0, 15, 0, 11, 10, 7, 5],
    [2, 10, 14, 2, 14, 6, 8, 14, 11], 
    [3, 15, 1, 7, 4, 3, 5, 4, 10],
    [4, 14, 5, 12, 8, 1, 7, 11, 3],
    [5, 0, 13, 11, 11, 8, 14, 0, 7],
    [6, 11, 10, 0, 2, 14, 6, 3, 1],
    [7, 1, 9, 9, 7, 9, 3, 10, 9],
    [8, 4, 6, 4, 6, 5, 0, 6, 15],
    [9, 7, 4, 4, 9, 2, 12, 9, 13],
    [10, 5, 8, 8, 13, 7, 11, 8, 14],
    [11, 8, 7, 13, 15, 12, 1, 13, 0],
    [12, 9, 11, 10, 3, 13, 13, 5, 8],
    [13, 13, 12, 5, 1, 0, 4, 12, 4],
    [14, 2, 3, 1, 5, 4, 9, 15, 6],
    [15, 3, 15, 3, 10, 10, 2, 1, 2]
    ]
    keyIndex = key + 1
    bitArray = toBits(msg)
    for i in range(len(bitArray)):
        bitArray[i] = table[bitArray[i]][keyIndex]
    string = toString(bitArray)
    return string

def decrypt(msg, key):
    decryptTable = [
    [12, 6, 10, 15, 14, 0, 11, 1, 4, 7, 5, 8, 9, 13, 2, 3],
    [2, 0, 14, 1, 5, 13, 10, 9 ,6, 4, 8, 7, 11, 12, 3, 15],
    [6, 15, 2, 7, 12, 11, 0, 9, 4, 14, 8, 13, 10 ,5, 1, 3],
    [12, 0, 14, 4, 8, 11, 2, 7, 6, 9, 13, 15, 3, 1, 5, 10],
    [15, 11, 6, 3, 1, 8, 14, 9, 5, 2, 7, 12, 13, 0, 4, 10],
    [15, 10, 8, 5, 7, 14, 6, 3, 0, 12, 11, 1, 13, 4, 9 ,2],
    [2, 7, 14, 4, 11, 0, 3, 10, 6, 9, 8, 13, 5, 12, 15, 1],
    [12, 5, 11, 10, 3, 7, 1, 9, 15, 13, 14, 0, 8, 4, 6, 2]
    ]
    bitArray = toBits(msg)
    for i in range(len(bitArray)):
        row = decryptTable[key]
        bitArray[i] = row.index(bitArray[i])
    string = toString(bitArray)
    return string


def toString(bitArray):
    toBits = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
    string = ''
    for bits in bitArray:
        string = string + toBits[bits]
    return string

def toBits(msg):
    toChar = {
        'A': 0,
        'B': 1,
        'C': 2,
        'D': 3,
        'E': 4,
        'F': 5,
        'G': 6,
        'H': 7,
        'I': 8,
        'J': 9,
        'K': 10,
        'L': 11,
        'M': 12,
        'N': 13,
        'O': 14,
        'P': 15
    }
    bitArray = []
    for char in msg:
        bitArray.append(toChar[char])
    return bitArray