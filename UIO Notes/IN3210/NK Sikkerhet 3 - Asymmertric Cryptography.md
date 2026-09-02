# NK Sikkerhet 3 - Asymmetric Cryptography

Se også: [[Oversikt|Oversikt]] · forrige: [[NK Sikkerhet 2 - Symmetric Encryption - IN3210]] · neste: [[NK Sikkerhet 4 - Key Management and Entity Authentication - Kerberos]]

## Symmetric Encryption (recap)

Fullstendige notater: [[NK Sikkerhet 2 - Symmetric Encryption - IN3210]]
	same key, key exchange...
		Traditional key exchange, was a book with a bunch of keys, given in person
			Diffie hellman key ex (1976)
				g, p, g^b mod p, gâ mod p
				eve cannot derive a and b
				Weakness
					mallory can intercept keys, and giving make keys back
					man in the middle attack
	Problem of symmetric encryption
		sharedd secret must be distributed
	Problem of DH key exchange
		interactive protocol
		both parties must be "online" to start encrypt com
## Asymmetric Encryption
	one key for enc, one key for decryp
	RSA (1978) (recipient generates key)
	Confidentiality not required -> passive attacker can read the public key no problem
## Hash Functions
	checking fingerprint sim?
	hash collision
		two hash values stemming from different messages
		IN EVERY HASH FUNCTION COLLISIONS EXIST
		collision resistens - hard to calculate collision
			"inpossible within reasonable computation time"
	One way property
		exists no (efficient) inverse function
	MD5
		Message-Digest_algorithm 128bit digest
	Sha - 123
		Internal structure SHA-1
## Digital Signature
Remember message authentication code - MAC
	with rsa the sender creates the keypair

