Se også: [[Oversikt|Oversikt]] · forrige: [[NK Sikkerhet 3 - Asymmertric Cryptography]] · neste: [[NK Sikkerhet 5 - Public key Infrastructure]]

How to transfer keys betwwen [[IN3210 - Intro to Sec#Cast of characters|Alice and Bob]]?
[1]Intro to k.Mang. - [2]Key Distribution Center - [3]Kerberos Protocol - [4]Kerberos Attacks
## [1]Intro to key management:
* Creation:
	* By who?
	* Randomness is critical for security!
* Protection During storage and use
	* Hardware sec module (HSM), smart cart, usb token, trusted platform module (TPM), OS...
	* Password derived keys simplify, but weaker keys...
	* backup/recovery???
* Destruction
	* Secure delete when key no longer needed
	* can delete (remove) key to make data unavalable/unusable
* Cryptoperiod  - Originator Usage Period + Recipient Usage period ---- Post-usage protection period
# [2]Key Distribution Center:
* Alice wants to talk to Bob, but they dont share a key, instead each share a secret key with a trusted KDC
* Vulns
	* KDC compromised
	* intercept and send back - mitigate with a nonce (number only used once) - cant [[IN3210 - Intro to Sec#Passive vs. Active attacks|replay]] message - combine validity time for bobs key
# [3]Kerberos:
* based on [[NK Sikkerhet 2 - Symmetric Encryption - IN3210#Symmetric encryption|symmetric crypto]] ([[NK Sikkerhet 3 - Asymmertric Cryptography#Asymmetric Encryption|public key]] extensions avail)
* supported by many products, default on windows
* Kerberos itself does not enforce auth, but provides a basis to do so.
	* Privileged Attribute Certificate
* Authentication Service/Server (AS) + one more i didnt catch