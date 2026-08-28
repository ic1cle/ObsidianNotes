# NK Sikkerhet 2 - Symmetric Encryption

Se også: [[Oversikt|Oversikt]] · neste: [[NK Sikkerhet 3 - Asymmertric Cryptography]]

Cryptologi --> 
	Cryptography(Study of encryption methods) and 
	cryptoanalysys(Study of methods of recovering key or deciphering without key)
Plaintext P - Ciphertext C - cipher - Key K - encypher E - decipher D
Main crypto cipher types
	Symmetric
		alice and bob hav the same key to communicate
		one key, shared secret key
		stream
		block
	Asymmetric
		Two keys public private keys
		alice bob have different keys
## Symmetric encryption
	Two main types
		stream
			encrypt each byte of line
		block
			encrypt blocks of line
			can be used as string cypher
## Model of symmetric cryptosys
	![[Pasted image 20260825142640.png]]
## One time pad and notions of cryptographic security
	![[Pasted image 20260825142928.png]]
	key has to be aslong as the text....
	Would be a masssssssssive key
	could be bruteforced but it still wouldnt give any info on which is the correct one
	If the key is reused, the one time pad no longer provides perfect secrecy
		could analyze
	the one time pad does not provide integrity/authenticity
		could manipulate the message by changing the most significant bit (first bit?)
		No way to detect
		**the general lesson: a cipher only provideing confidentiality does not provide integrity/authenticity!***
### Notions of vryptografic sec

	Se også: [[NK Sikkerhet 3 - Asymmertric Cryptography#Asymmetric Encryption]] — RSA er eksempel på provable security (faktorisering)
		Unconditional security (perfect secrecy) - System cannot be broken with inf. resources
			One time pad
		Computational security - it is impossible to break the sys in practice due to computational resources required ny tje best-knows alg. for breaking the sys
			sym ciph. AES or ChaCha20
		Provable security - breaking the system is equivalent to solving a difficult problem
			asym cyph. RSA (factoring)
## Stream cyphers
	strong sim. with otp
		fixed key has been put through keystream - pseudorandom number gen.
			pseudorand because alice and bob need same keystream
		rc4 and chacha is really what matters - generating keystream
### RC4
		No longer used
		designed to be efficient to pmplement in softeware (counter traditional stream ciph HW)
		widely used for ssl/tls wp/wpa
		SHOULD NOT BE USED IN NEW SYSTEMS
		reason to use is faster - easy to switch because software
		not shuffled enough? like cads basically
### ChaCha20

---
**Se også:** [[NK Sikkerhet 3 - Asymmertric Cryptography]] · [[Oversikt|Oversikt]]