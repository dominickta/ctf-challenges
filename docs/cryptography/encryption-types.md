---
title: Types of Encryption
parent: Cryptography
nav_order: 2
---

# Types of Encryption
There are two main types of encryption methods that are used today:
1. Symmetric encryption
2. Asymmetric encryption

## Symmetric Encryption
In symmetric encryption there is a single key being used between two parties
to encrypt and decrypt data (both parties use the same key so it is _symmetrical_).

This means that _anyone_ with access to the key can encrypt and decrypt messages.
Therefore, if you're using symmetric encryption, it is extremely important to
keep this key a secret.

### Diagram of symmetric encryption:
![diagram of symmetric encryption](https://ico.org.uk/media/images/other/2260256/symmetric.gif)

**Source: Information Commissioner's Office (ico.org.uk)**

## Asymmetric Encryption
In asymmetric encryption there is a total of 4 keys, with both parties
owning their own public and private key (parties use different keys so it is _asymmetrical_).

- A public key is only used to encrypt a message, and anyone is allowed to access the public key and encrypt messages.
- A private key is only used to decrypt a message that was encrypted by the corresponding public key.
Only the owner of the private key can decrypt and this key should be kept private.

So if A wants super secret information from B, then A would give their
public key to B. Then B would take the super secret information and encrypt it using the public key,
and then send the ciphertext to A. A will then decrypt this ciphertext using A's private key.

Note:
- Even if someone was able to intercept the ciphertext, they would need access to A's private key
to decrypt it
- You don't need to share private keys around. There's less chance of the private key from being stolen.

### Diagram of asymmetric encryption:
![diagram of asymmetric encryption](https://ico.org.uk/media/images/other/2260261/asymmetric.gif)

**Source: Information Commissioner's Office (ico.org.uk)**

## Learn more
- [Open Source Security Tools: A Practical Guide to Security Applications
 by Tony Howlett](http://books.gigatux.nl/mirror/securitytools/ddu/ch09lev1sec1.html)
- [Information Commissioner's Office](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/encryption/what-types-of-encryption-are-there/)
- [Thycotic](https://thycotic.com/company/blog/2017/06/12/how-does-encryption-work/)
