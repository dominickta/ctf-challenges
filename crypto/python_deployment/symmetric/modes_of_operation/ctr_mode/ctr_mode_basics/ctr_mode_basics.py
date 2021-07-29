import simple_ctr_mode_encryption as sim
import random as r
import time

def user_input(target):
    while True:
        ans = input("Input Your Answer here: ")
        if (ans == target) :
            print("You are right!")
            print("Sending...")
            time.sleep(3)            
            return
        else:
            print("Your answer is wrong")

def challenge1():
    key = sim.keyGen()
    print("The agreed key is :", key)
    msg = "HIHIGO"
    ans, iv = sim.encrypt(msg, key)
    print("The randomly generated IV is :", iv)
    print("Message to be encrypted: ", msg)
    print("What's the ciphertext using Counter Mode? (in hex)")

    print(ans)
    
    user_input(ans)

    print("You've received a reply!")
    msg = "GOODJOB"
    cipher, iv = sim.encrypt(msg, key)
    print("The ciphertext is :", cipher)
    print("Can you decrypt the cipher text? (in letter String)")
    user_input(msg)

challenge1()