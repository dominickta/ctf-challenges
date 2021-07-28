---
title: One Time Pad (OTP)
parent: Cryptography
nav_order: 3
---

# One Time Pad Encryption

One type of symmetric encryption is the One Time Pad (OTP) which is very simple and easy to understand, while also being incredibly secure. This algorithm is so secure that it has been mathematically proven to achieve 'perfect secrecy'. This concept of 'perfect secrecy' means that the ciphertext is 100% guaranteed to provide no information about the plaintext.

In summary, OTP works by applying the XOR operator between a key and a message to encrypt and decrypt.

## The XOR Operator
To understand OTP, you have to understand the 'Exclusive OR' operator, AKA the XOR operator (⊕). XOR is pronounced as "EX OR".

The XOR operator is a mathematical logical operator (like the + and - operators, but for logical true/false values). Operators similar to XOR are the OR operator and the AND operator. These operators live in the world of boolean values where there are only two values:
1. True, usually represented by the number 1
2. False, usually represented by the number 0

The XOR operator takes two values, X and Y, and has an output Z. If and only if **exactly one** of X or Y has the value true, then the output will be true. If **both** X and Y are true, then the output Z is false. And if **both** X and Y are false, then the output Z is false. This is summarized by the table below:

| X  | Y | Z
|:---|:--|:--
| 0  | 0 | 0
| 0  | 1 | 1
| 1  | 0 | 1
| 1  | 1 | 0

XOR can easily be applied to long sequences of values; simply apply the XOR operator on each pair of values as normal. Here are a few examples with longer sequences for X, Y, and Z:

| X           | Y          | Z = X ⊕ Y
|:------------|:-----------|:--
| 011         | 101        | 110
| 101100      | 100010     | 001110
| 0100111000  | 0101011100 | 0001100100

## One Time Pad Algorithm

As stated in the beginning, OTP works by applying the XOR operator between the key and message. The same key is used for both encryption and decryption, which means that OTP is symmetrical.

The encryption algorithm is to apply the XOR operator between the plaintext `M` and key `K`, to receive the cipher text `C`. Essentially: `Enc(K, M) = K ⊕ M = C`

The decryption algorithm is to apply the XOR operator between the ciphertext `C` and key `K`, to receive the plaintext `M`. Essentially: `Dec(K, C) = K ⊕ C = M`

### How can we use the same key to go back and forth?

## Why One Time Pad Encryption is not used in the real world
The main disadvantage of OTP is that it requires a key of the same length as the message to be encrypted. Every time a new message is sent, a **new** key of the same length must be shared as well. This means that there is a ton of extra information that needs to be passed back and forth (twice the amount of the actual important information).

In other words, if we are sending a file of size 1GB, in total, we will need to send 2GB worth of load. This is super inefficient, especially if sending data is expensive like in environments with slow internet.

This might lead you to think: "Why don't we reuse the same key for multiple messages to be more efficient?" The answer is that this would cause the OTP algorithm to lose perfect secrecy; reusing keys is a security risk!

## Why can't we reuse keys?

We can't reuse keys because given two ciphertexts that were generated with the same key, someone could XOR the ciphertext to gain information about both messages. Although they won't be able to perfectly reconstruct the plaintext, they will be able to access enough information to the point that it is dangerous.

Look at these sources for good visuals on how dangerous this is:
- [James Stanley Blog on OTP Key Reuse](https://incoherency.co.uk/blog/stories/otp-key-reuse.html)
- [StackExchange Post on OTP Key Reuse](https://crypto.stackexchange.com/questions/59/taking-advantage-of-one-time-pad-key-reuse)

## One Time Pad Requirements
From the previous section, we learned about the dangers of key reuse. There are more
things that we need to keep in mind to ensure that OTP is safe. To guarantee the perfect secrecy of OTP, the following requirements must be maintained (source: [Wikipedia](https://en.wikipedia.org/wiki/One-time_pad)):

1. The key must be random (uniformly distributed and independent of the plaintext).
2. The key must be at least as long as the plaintext.
3. The key must never be reused in whole or in part.
4. The key must be kept completely secret by the communicating parties.

## Learn more
- [Wikipedia](https://en.wikipedia.org/wiki/One-time_pad)
- [James Stanley Blog on OTP Key Reuse](https://incoherency.co.uk/blog/stories/otp-key-reuse.html)
- [StackExchange Post on OTP Key Reuse](https://crypto.stackexchange.com/questions/59/taking-advantage-of-one-time-pad-key-reuse)
