# Introduksjon

Se også: [[Oversikt|Oversikt]] · forrige: [[IN1020 - Innfri Sikkerhetsmål]]

Du jobber som konsulent i et IT-selskap, og du har fått i oppdrag å hjelpe et tannlegekontor med å
sette opp et datanettverk og programvare for håndtering av pasienter, behandlinger og fakturering.
Tannlegekontoret har nylig anskaffet et IT-system, og gjennom dette kan pasientene bestille timer
og behandlinger via en nettside og/eller en mobilapp. De ansatte ved kontoret bruker samme system for å planlegge og gjennomføre behandlinger, og i tillegg lagres informasjon om pasientene og all deres tannbehandling i hver enkelt pasients journal i systemet, slik at man lett skal kunne følge dem opp over flere år. Kun tannlegene skal ha tilgang til en pasients journal. Systemet vil også håndtere utveksling av informasjon mot NAV for både sykemeldinger og evt.
refusjon av behandlingskostnader. Tannlegene skal også benytte et nasjonalt system for elektroniske resepter. Tannlegene logger inn fra PCen på sitt kontor og rekvirerer resepter/legemidler til en pasient elektronisk, slik at de raskt er tilgjengelig direkte i apotekene.
På tannlegekontoret har de et eget apparat som tar digitale røntgenbilder av pasientenes tenner
ved hver behandling. Apparatet overfører de digitaliserte røntgenbildene over trådløst nett til pasient-systemet, hvor tannlegene må knytte bildene til riktig pasient.
- Må lagre: Timer, Planlegging, pasientjournaler, resepter, bilder
- Tilgang: Legene, Pasienten, Nav
# Oppgave 1
*IT-systemet lagrer en rekke data om hver enkelt pasient, alt fra tidspunkt for neste time til data om*
*tennenes tilstand og opplysninger som kan være nødvendig for riktig behandling. Er det noen kategorier data tannlegekontoret bør være oppmerksomme på og behandle spesielt? Begrunn svaret ditt.*
Alt av data tannlegekontoret lagrer er sensitiv data, og de må ha en streng tilgangskontroll for å passe på at riktige brukere får tilgang til riktig data. Timer, planlegging, journaler, og resepter skal være strengt kontrolert slik at en tredjepart eller en annen bruker ikke får tilgang til en enkelts data. Når det gjelder timer, planleggingen og journalene er det lovpålagt å holde taushetsplikten, men det er også et tillitsforhold mellom legesenteret og kunden; blir dette brutt og kunden mister tillit til legen vil kundene starte å holde tilbake mulig kritisk informasjon. For reseptene er det ekstremt kritisk at noen andre får tilgang til en brukers resepter. Dette kan føre til udiegnoserte får tilgang til medikasjon eller rusmidler de ikke skal ha tilgang til, men også at kunden selv ikke får tilgang til sine egne medikasjoner. 
# Oppgave 2
*Konfidensialitet, integritet og tilgjengelighet er essensielle egenskaper i informasjonssikkerhet.*
*(a) For hvert av disse tre sikkerhetsmålene, vurder viktigheten, samt hva som kan gå galt hos tannlegekontoret ved brudd på hvert enkelt. Altså hva som kan utgjøre en trussel eller fare mot hvert sikkerhetsmål.*
Akkuratt i helsesektoren er alle tre sikkerhetsmålene helt essensielle, det er et et yrke og en sektor som krever en ekstremt sterk tillit fra kundene, i tillegg til at det er utrolig viktig at helsetjenestene kan brukes av befolkningen. For konfidensialitet så er det utrolig viktig at all sensetiv pasientdata ikke lekkes, dataen kan inneholde masse privat info som rusbruk, gravidited, og mye annet som ikke burde være offentlig informasjon; dette er også årsaken til den strenge taushetsplikten som helsesektoren må opprettholde. Brudd på taushetsplikten an også føre til at bedriften mister sin lisens. For Integritet er det utrolig viktig at data faktiisk stemmer, at pasienten kan stole på dataen som de får fra kontoret, men kanskje viktigere at dataen legene har tilgang til er korrekt. Brudd på integritet kan føre til failinformasjon, tap av tillit, og i verste fall at legene gjør en fil som kan skade pasienten (f.eks. allergier). For tilgjengelighet er det utrolig viktig at pasienten kan se sin data for å forstå hva som skjer og igjen opprettholde tillit til kontoret, men også at legene og de som skal ha tilgang, får det; f.eks. NAV i dette tilfellet. Om vi mister tilgjengelighet vil passienten ikke kunne ta ut reseptene sine som kan være helsekritisk, eller at en lege ikke kan se allergener eller lignende som passienten kan ha.

*(b) Nevn så to sikkerhetstiltak som hos tannlegekontoret kan bidra til å ivareta hvert av disse sik-*
*kerhetsmålene. Begrunn hvorfor dine valgte tiltak vil være til hjelp.*
For den digitale tjenesten vil det viktisgste være tilgangskontrollenj, vi må implementere en streng rettighetskontroll, i tillegg til sikre metoder å overlevere data på. All data må være sterkt kryptert, og med bruk av en KDC (Key distribution Center) som Kerberos så kan vi fordele sikre nøkler som kan få tilgang til dataen. Vi kan også implementere et strengt loggsystem så vi kan oppdage og korrigere feil eller misbruk av tjenestene effektivt. I oppsummering så vil en sterk tilgangskontroll og kryptering av data, i tillegg til et sterkt loggsystem føre til god beskyttelse og enkel oppdagelse av feil/misbruk.
# Oppgave 3
*Det nyanskaffede IT-systemet dekker altså flere ulike funksjoner, bl.a timebestilling, fakturering, pasi-entbehandling og journalføring.*
*(a) Vurder viktigheten av autentisitet til de ulike brukergruppene av systemet som kan tenkes logge*
*inn (pasient, kontoransatt, tannlege) og hvordan ulike typer autentiseringsfaktorer kan påvirke*
*graden av tillitt til dem.*
Autentisitet er utrolig viktig for at rikitg bruker skal f tilgang tiil riktig data. det hadde vært et utrolig sikkerhetsproblem og en kunde kunne gått inn å lest andre kunders journal og fått tilgang til sensitiv informasjon om dem. En pasient skal i prinsippet bare ha tilgang til sin egen data, informasjon, og kanskje litt informasjon om legen sin. En kontoransatt burde ha tilgang til å redigere timer og administrere oppsettet, og en Lege burde ha tilgang til nesten alt som angår passientene sine. Uten ordentlig auntentisering kunne en trusselaktør fått tilgang til masse informasjon om andre passienter, eller muligheten til å administrere timeplanen og lignende. Som autentiseringsfaktorer er det litt varierende for hva bedreiften faktisk lagrer av helsedata og lignende. For brukeren er det som regel nok med tofaktorsautentisering for å logge inn, noe mer hadde blitt vanskelig og hadde påvirket tilgjeneligheten til tjenestene, og noe mindre hadde ført til at det er enklere for en trusselaktør å komme seg inn på brukeren. For en lege eller kontorarbeider som skal inn i systemene ville jeg anbefalt å ha et passord, og en fysisk kryptert nøkkel; som et nøkkelkort, eller usb som legen må bruke til å autentisere seg; dette kan blir litt vanskeligere for legen, men sikrer i stor grad at dataen er trygg, og vil føre til at man kan stole på at dataen sin er tryggere. Selvfølgelig så er det fortsatt mulig at noen får tak i nøkkelen eller lignende, men det sikrer i stor grad at tilgangen er sikret.

*(b) Er det nødvendig med tilgangskontroll innad i systemet, etter at brukerne har logget inn? Begrunnsvaret.*
Det er helt nødvendig å ha en god tilgangskontroll. Som nevnt tidligere skal ikke en bruker kunne få tilgang til en annen bruker sin data, og i hvertfall ikke tilgang til å redigere data. I helsesektoren er det utrolig streng taushetsplikt, så bedriften er pliktig i å sikre dataen til en pasient. I tillegg om en bruker ikke kan stole på at informasjonen sin er trygg kan det føre til at man tilbakeholder informasjon og dette kan føre til at legene ikke får vite alt de trenger å vite for å diagnosere/medikere riktig. 

*(c) Fra et datasikkerhetsperspektiv, er det egentlig lurt å ha timebestilling, fakturering og pasientdata i ett og samme dataprogram/IT-system? Begrunn kort.*
Fra et sikkerhetsperspektiv sp er det alltid lurt å sepparere ulike systemer så mye som mulig, men man mp tenke på tilgjengelighet også. Jeg hadde nok separert de tre funksjonalitetene inn i tre systemer slik at man er sikrest mulig, så kan man "låne" data fra et system til et annet når det trengs, for eksempel en kunde som ønsker tilgang til sin journal, så kan hovedplatformen hente informasjon fra databasen med pasientdata og gjøre det tilgjengelig for brukern; dette kan gjøres trygt med bruk av kryptografi slik at du an fordele riktig data til riktig pasient. Om alle "applikasjonene" ligger på samme system vil det øke rissikoen sterkt for at om man klarer å kompromittere en applikasjon kan man få tilgang til flere, f.eks. med en xxs sårbarhet som lar en trusselaktør få lese pasientdata fra databasen med å legge inn ondsinnet kode i sin egen journal.
# Oppgave 4
*Tannlegene er skeptiske til å gå fra resept på papir til et elektronisk reseptsystem. En elektronisk*
*resept opprettes ved at en tannlege logger inn på nettsiden e-resept.no, skriver inn pasientdata og*
*info om foreskrevet legemiddel, og signerer resepten digitalt. Du forklarer at bruk av kryptografiske*
*algoritmer vil gi god sikkerhet både mot falske nettsider og mot at andre kan skrive ut falske resepter i en tannleges navn (f.eks. store mengder narkotiske legemidler).*
*(a) Forklar kort hvordan PKI for internett og bruk av protokollen https kan gi nødvendig sikkerhet*
*for og tillit til at nettsiden e-resept.no er autentisk.*
PKI (Public Key Infrastructure) er et system som lar en CA (certificate autority) signere et nettsted ved hjelp av assymetrisk kryptering slik at nettleseren kan kan sjekke sertifikatet til den gjeldene nettsiden. Nettleseren din har allerede en liste med CAer de stoler på og derfor kan då forsikre at nettsider er den riktige; dette sørger altså for autentisiteten til nettsiden. HTTPS bruker TLS (Transport Layer Security) hvor PKI er en del av det. Så først sjekker HTTPS protokollen om signaturen til nettsiden finnes i listen med CAer, og etter det krypterer den all data sendt mellom brukeren og nettstedet; dette sørger for konfidensialitet. Til slutt så legger tls også på en identifikasjon fra avsender i den krypterte meldingen slik at man kan sørge for at en angriper ikke kan endre dataen underveis, som da sørger for integritet. 

*(b) Forklar kort hvordan bruk av asymmetrisk kryptering og en PKI for digital signering av resepter*
*kan forhindre forfalskning av resepter. Hvem må da inneha hhv. privat og offentlig kryptografisk*
*nøkkel i et nøkkelpar når en tannlege signerer en resept digitalt?*
PKIen sørger for at du kan stole på at avsender er den de sier de er, og krypteringen for den digitale signaturen gjør at brukeren (eller programmet) kan bruke public keyen på en hash som ligger ved signaturen for å sjekke integriteten av reseptet. Dette forhindrer da at noen andre en den med private keyen kan generere den signaturen, og vi kan garantere at avsender er legen.
# *Oppgave 5*
Tannlegekontoret får internett levert fra en ISP via en fibertilkobling. Abonnementet har en hastighet
på 200 megabit ned og 50 megabit opp og inneholder en offentlig IP-adresse.
(a) Tannlegekontoret har 12 endesystemer som skal kobles til nettverket. Hva kan du gjøre for å dele den offentlige IP-adressen på alle maskinene i nettverket?
Med bruk av NAT (Network address translation) deler routeren ut private IP-adresser til de 12 endesystemene. Dette gjør at routeren kan holde styr på hvilket endepunkt som er hvilket og deler det videre på den offentlige IP-adressen med et unikt port-nummer.
(b) En av datamaskinene på tannlegekontoret styrer røntgenmaskinen. Her kreves det at leverandøren av maskinen kan logge seg på fra en ekstern maskin for å utføre vedlikehold. Hvilke utfordringer kan dette skape når flere maskiner må dele en offentlig IP-adresse, og hvordan kan vi løse dem?
NAT fungerer bare med trafikk som skal fra endepunktet til nettet og ikke andre veien rundt. Fårespørselene fra leverandøren vil ikke komme fram til røntgenmaskinen ettersom de blir sittende fast hos routeren som ikke vet hvor den skal sende den videre. Mulige løsninger på dette er port-forwarding eller at leverandøren kobler seg på et vpn på tannlegen sitt nett. Med VPNet kan du sikre det med god authentisering får å sikre at andre ikke får tilgang. Port-forwarding er et mye raskere og enklere alternativ, men den åpner da porten til resten av internettet så den blir fort et mål for en trusselaktør
(c) Tannlegekontoret utfører jevnlig sikkerhetskopi av data til en tjener på Internett. En vanlig
sikkerhetskopi er på 915 MB. Hva er teoretisk overføringstid med tannlegekontorets forbindelse.
915 MB × 8 = 7320 Mbit
7320 Mbit ÷ 50 Mbit/s = 146,4 sekunder

# Oppgave 6
*Som konsulent er det ditt ansvar å konfigurere ruteren. Den private adressen til ruteren oppgitt i*
*CIDR-format er: 192.168.100.1/26*
*(a) Hva er riktig nettmaske og broadcast-adresse i punktnotasjon for nettverket?*
*(b) Hvor mange IP-adresser kan deles ut i det private nettverket?*
# Oppgave 7
Tannlegekontoret ønsker også å sette opp et trådløst gjestenettverk som pasientene kan bruke mens de
venter på behandling.
(a) Hva bør du tenke på når dette nettverket skal settes opp? Begrunn svaret ditt.
(b) Sett av et subnett til et offentlig gjestenettverk, oppgi IP-adressen i CIDR-format og begrunn
valget ditt.
# Oppgave 8
Å tenke som en «hacker»: Som pasient syns du at rotfyllingen og den nye krona du nylig fikk satt
inn hos tannlegen koster altfor mye. Dessuten har du sett at tannlegen hele tiden har de aller nyeste
mobiltelefonene, syklene, etc., og du syns rett og slett h*n tjener altfor godt. Du sysler litt med IT på
si, og tenkte du skulle forsøke å komme deg inn i regnskapssystemet til tannlegekontoret for å endre
beløpet på regningen. Gi et eksempel på hvordan du vil gå fram! (PS. ingen eksakt fasit :-))