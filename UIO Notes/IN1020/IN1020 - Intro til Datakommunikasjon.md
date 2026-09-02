# Telefonnettverk

Se også: [[Oversikt|Oversikt]] · neste: [[IN1020 - Lagdeling i Nettverk]]

	Circut switching
		direkte linje mellom avsender og motttaker
	Tilkoblingsorientert tjeneste
		kommunikasjon følger samme vei
	Konsept fortsatt i bruk deler av verden i dag
## Pakkenetverk (Packet switchig)
	Putter all data i en pakke og sender over nettet
	ingen dedikert linge som i [[#Telefonnettverk]]
	tilkoblingsløs tjeneste
	packet switching brukes i dagens internet - wireshark?
### Nettverkskomponenter
	- Tjenere
	- Klienter
	- Switcher
	- Routere
	Endesystemer og Intermediate System **

### Aksessmodeller for datakom.
- Klient Tjener
	- Klient ber om en tjeneste - tjeneren leverer
- Peer to peer (p2p)
	- Alle noder er likeverdige
	- noder kan nå hverandre
	- kan koble direkte til hverandre

### Punkt-til-punkt og Broadcast - Nettverkstopologier
- kablet nettverk er Punkt-til-punkt - Ethernet
	- med valig noe så bruker vi stjernetopologi - DOCSIS
	- om du har flere switcher - tre-topologi
	- fins noen flere modeller Token ring, full mesh, torus, fat tree
##### Broadcast Nettverk
- wifi, 5g4g, satelitt
- Egenskaper
	- Alle i kan potensielt høre
	- kan bli problemer om flere noder sender samtidlig
	- feildeteksjon er viktig
	- sending bør koordinere

# Utfordringer i datanettverk - Protokoller og lagdeling
- Et sett med regler for hvordan kommunikasjon snakker
- *Utfordringer:*
	- Hvilket program skal kontaktes?
	- Hvilken rute skam man bruke?
	- Hvem og hva skal ha data?
	- Hvordan finne veien tilbake?
	- Felles språk?
	- Håndtere problemer
	- personvern og sikkerhet
	- unngå forsinkelser - tilgjengelighet ;)
- **Lagdelingsmodeller - OSI og TCP/IP**
	- OSI-modellen
	- TCP/IP-modellen

> Bygges videre på i [[IN3210 - Intro to Sec#Networking basics|Networking basics (IN3210)]] — broadcast domain, ARP, ARP-spoofing