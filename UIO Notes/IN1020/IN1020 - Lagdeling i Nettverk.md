# Kort repitisjon -

Se også: [[Oversikt|Oversikt]] · forrige: [[IN1020 - Intro til Datakommunikasjon]] · neste: [[IN1020 - Innfri Sikkerhetsmål]]

* Nettverkskomponenter - endepunkt = datamaskin/klient - tjenere, servere...
* Noder er fellesbetegnelse på alt, endepunkt, tjenere, intermediate systemer
* Punkt til punkt, kabel fra a -> b -- Stjerne topologi er vanligst, neste tre som flere ruter
* Broadcast nettverk, wifi, en sender mange lytter - delt kom, kanal
# Lagdeling
* Protokoll definerer strukturen på beskjeder sendt over et nettverk
* Må adressere mange komleksiteter
	* hvordan skal maskinen oppføre
	* etc
* flere ulike protokoller i bruk, en stor hadde blitt veldig vanskelig
### Protokoller og lag
* Hvert nivå løser en utfordring
* interaksjon mellom flere typer system
* Hvordan strukturere
	* klare koblinger og strukturer
	* kan utvikle lag uavhengig
	* kan bytte ut lag
	* problemer kan må løses flere ganger
	* ikke like godt egnet for alle opg.
* Definerer:
	* Formatet på beskjeden og header (konvolutt).
	* Rekkefølgen på beskjedene.
	* Utvekslingen av beskjeder mellom to eller flere kommunikasjonssystemer.
	* Hva skal skje ved mottak eller sending av en beskjed.
* OSI modell - 7 lag - ikke pensum
* TCP/IP modell -> pensum
	* 5 lag - fra osi 5,6,7 blir et større lag 5
	* Fysisk, Link, Nettverk, transport, applikasjon
	* Dataenheter:
		* Beskjeder fra applikasjonslaget lagres som "data units"
		* Data units har ulike navn
			* Segments - I transport laget
			* Packets - brukes i nettverks laget
			* Frame - linklaget
			* Bits - fysiske laget
	* Datastrøm mellom to sys direkte kobling = U
	* Uten direkte kobling W med intermediate systemer
	* uten direkte kobling -> to øverste lag kom. ende-ende
* Internet Protocol Stack
* Lagene i TCP/IP modellen
	* Lag 5 Applikasjonslaget
		* Lag med tjenester for applikasjoner
		* eks. Nettlesere, epost, filoverføring, p2p
	* Lag 4 Transsportlaget --> lager headers
		* TCP
			* Oppsett av forbindelse 3 way handshake syn syn/ack ack
			* garanterer at pakkene kommer frem riktig rekkefølge
			* pålitelige, pakker sendes på nytt om ACK ikke kommer frem
			* Flytkontroll og metningskontroll
		* UDP
			* Tilkoblingsløs forbindelse
			* ingen garantier
			* "best effort" levering av data
		* QUIC
			* Forenklet transportprotokoll fot HTTP, designa av google
			* Bruker UDP som transport, men legger til enkel funksjonalitet fra tcp
			* Lrever kryptering (transport layer Security)
		* pruker port som unik indikator
	* Lag 3 Nettverkslaget
		* Koble sammen systemene ende til ende
		* ruting
			* statisk, definert under tilkobling, eller dynamisk
			* metningskontroll (for mange pakker på en sti)
			* tjenestekvalitet (QoS)
		* en ruter jobbedr på lag 3
		* eks.
			* IP (Tilkoblingsløst)
		* IPv4 bruker 32-bit adresse 4.3 * 10⁹
		* Den nye versjonen IPv6 jar 128-bit adresser 3.4 ^
	* Lag 2 Linklaget
	* Lag 1 Fysiske laget