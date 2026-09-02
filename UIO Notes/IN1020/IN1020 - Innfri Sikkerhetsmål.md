---
course: IN1020
tags: [sikkerhet, security, forelesningsnotater]
---

# Innfri Sikkerhetsmål

Se også: [[Oversikt|Oversikt]] · forrige: [[IN1020 - Lagdeling i Nettverk]] · neste: [[IN1020 - Oblig 1 - Sikkerhet og Datanetverk i Praksis]]

## KIT
- **K**onfidensialitet
- **I**ntegritet
- **T**ilgjengelighet

Andre mål:
- Personvern
- Uavviselighet (non-repudiation)
- Autentisitet
- Sporbarhet

> Se også: [[IN3210 - Intro to Sec#Axioms of CS (Computer Security)|Aksiomer i IN3210]]

```
        K
       / \
      / KIT\
     /_______\
    T         I
```

## Personopplysningsvern -- Lov
**GDPR Artikkel 5** — prinsipper:
- Lovlighet, rettferdighet, åpenhet
- Formålsbegrensning
- Dataminimering
- Riktighet
- Lagringsbegrensning
- Integritet, konfidensialitet + sikkerhet

## Hvem er hvem på Internett?

**Autentisering** gjelder for:
- Bruker
- System
- Data

### Autentiseringsfaktorer
Bevismateriale — **vet / har / er**
- Passord
- Kode
- Mønster

*Gangfelt / måten du beveger deg* — eksempel på "er"-faktor (biometri/gjenkjenning)

### Entitet vs. Identitet
- **Entitet**: noe som har fysisk, juridisk, eller mulig eksistens → gir opphav til en identitet
- **Identitet**: representasjon av entitetens attributter. Digital identitet = digital representasjon → **identitetshåndtering**

> "Epost er navet i ditt digitale liv" (grunnlaget)

## Autentisering av system/data
- **Auth – Sys / Dat**
- Sys → er dette **avsender ekte**? (autentisitet)
- Løses med **kryptografi**

## Tilgangskontroll
- Autentisering + autorisasjon → gir tilgang
- Fra **subjekt → objekt**
- Styres av **policy**

> **Tilgang ≠ Auth**

## Logg / Sporbarhet
Formål: kan oppdage, korrigere, forebygge

Svakhet: logg kan forfalskes, manipuleres, slettes
