---
course: IN3210
tags: [security, lecture-notes]
---

# Intro to Sec

Se også: [[Oversikt|Oversikt]] · neste: [[NK Sikkerhet 2 - Symmetric Encryption - IN3210]]

## What is security?
- **Protect assets**
- **Countermeasure** vs. **Attacker** / **Threat**

## Axioms of CS (Computer Security)
| Axiom | Concerns |
|---|---|
| Confidentiality | Info |
| Integrity | Stored data |
| Availability | Services |

*(regarding what security is protecting)*

> Se også: [[IN1020 - Innfri Sikkerhetsmål#KIT|KIT i IN1020]] (samme triade: konfidensialitet/integritet/tilgjengelighet)

### Further goals
- Authenticity
- [[NK Sikkerhet 3 - Asymmertric Cryptography#Digital Signature|Non-repudiation]]
- [[IN1020 - Innfri Sikkerhetsmål#Personopplysningsvern -- Lov|Privacy]]

## Cast of characters
**Good:**
- Alice
- Bob

**Bad:**
- Eve (passive)
- Mallory (active) — [[NK Sikkerhet 3 - Asymmertric Cryptography#Symmetric Encryption (recap)|man in the middle]]

## Motivation
- Financials
- Fun
- Revenge
- Political / Religious

## Threats?
Targets: Service, Communication, Data

- **DOS** (Denial of Service)
- Listening / Modify
- Espionage / Deletion

### Passive vs. Active attacks
- **Passive** – sniffing
- **Active** – packet drop/modify, inject, [[NK Sikkerhet 4 - Key Management and Entity Authentication - Kerberos|replay]]

**Adversary**: wiretap attacks

## Networking basics
> Bygger på [[IN1020 - Intro til Datakommunikasjon]] (pakkenettverk, topologier, OSI/TCP-IP)

- **Broadcast domain**
- **ARP** (Address Resolution Protocol): maps MAC to [[IN1020 - Lagdeling i Nettverk|IP]]

> Auth ≠ Availability

- **ARP spoofing**: lying about IP to sync/steal MAC
- **DOS / DDOS**
