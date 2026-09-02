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
- Non-repudiation
- Privacy

## Cast of characters
**Good:**
- Alice
- Bob

**Bad:**
- Eve (passive)
- Mallory (active)

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
- **Active** – packet drop/modify, inject, replay

**Adversary**: wiretap attacks

## Networking basics
> Bygger på [[IN1020 - Intro til Datakommunikasjon]] (pakkenettverk, topologier, OSI/TCP-IP)

- **Broadcast domain**
- **ARP** (Address Resolution Protocol): maps MAC to IP

> Auth ≠ Availability

- **ARP spoofing**: lying about IP to sync/steal MAC
- **DOS / DDOS**
