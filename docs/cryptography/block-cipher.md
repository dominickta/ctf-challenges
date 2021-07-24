---
title: Block Ciphers (Alternative to OTP)
parent: Cryptography
nav_order: 3
---

# Block Cipher Encryption

Block Cipher is another symmetric encryption algorithm, it works by take a block of the plaintext and then using a key to pick a permutation of the possible outputs. For a block that has N-bit inputs there are 2^N! possible permutations and for a key that has k-bits there are 2^k possible keys. This means that if we have a message of length N and a key of length K. There are 2^k permutations selected from 2^N! permutations to be used as cipher texts.  Note: for block ciphers, length of plain texts does not need to be the same as length of ciphertexts.
One of the nice things about Block Cipher is that it is extremely hard to break that is it is very expensive to try since there is no known efficient algorithm that can break Block Cipher without having to brute-force it

**TODO**{: .label .label-yellow } Finish this page

## One Time Pad vs Block Cipher

## Modes of Operation
Block ciphers need to be combined with a 'mode of operation' to work. A mode of operation determines
how a block cipher will be applied to multiple blocks in a row. A block cipher by itself would only
be able to work on a single block of plaintext, which isn't useful because a message will be split up into multiple blocks.

## Learn more
- [Modes of Operation by Computerphile](https://www.youtube.com/watch?v=Rk0NIQfEXBA)
