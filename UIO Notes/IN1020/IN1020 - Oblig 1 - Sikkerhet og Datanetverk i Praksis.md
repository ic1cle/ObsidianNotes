# Introduksjon
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
For den digitale tjenesten vil det viktisgste være tilgangskontrollenj, vi må implementere en streng rettighetskontroll, i tillegg til sikre metoder å overlevere data på. All data må være sterkt kryptert, og med bruk av en KDC (Key distribution Center) som kerberos så kan vi fordele sikre nøkler som kan få tilgang til dataen. Vi kan også implementere et strengt loggsystem så vi kan oppdage og korrigere feil eller misbruk av tjenestene effektivt. I oppsummering så vil en sterk tilgangskontroll og kryptering av data, i tillegg til et sterkt loggsystem føre til god beskyttelse og enkel oppdagelse av feil/misbruk.
# Oppgave 3
*Det nyanskaffede IT-systemet dekker altså flere ulike funksjoner, bl.a timebestilling, fakturering, pasi-entbehandling og journalføring.*
*(a) Vurder viktigheten av autentisitet til de ulike brukergruppene av systemet som kan tenkes logge*
*inn (pasient, kontoransatt, tannlege) og hvordan ulike typer autentiseringsfaktorer kan påvirke*
*graden av tillitt til dem.*

*(b) Er det nødvendig med tilgangskontroll innad i systemet, etter at brukerne har logget inn? Begrunn*
*svaret.*
*(c) Fra et datasikkerhetsperspektiv, er det egentlig lurt å ha timebestilling, fakturering og pasientdata*
*i ett og samme dataprogram/IT-system? Begrunn kort.*
# Oppgave 4
(For å besvare denne oppgaven trenger du kunnskap fra forelesningen om kryptering 9. september)
Tannlegene er skeptiske til å gå fra resept på papir til et elektronisk reseptsystem. En elektronisk
resept opprettes ved at en tannlege logger inn på nettsiden e-resept.no, skriver inn pasientdata og
info om foreskrevet legemiddel, og signerer resepten digitalt. Du forklarer at bruk av kryptografiske
algoritmer vil gi god sikkerhet både mot falske nettsider og mot at andre kan skrive ut falske resepter
i en tannleges navn (f.eks. store mengder narkotiske legemidler).
(a) Forklar kort hvordan PKI for internett og bruk av protokollen https kan gi nødvendig sikkerhet
for og tillit til at nettsiden e-resept.no er autentisk.
(b) Forklar kort hvordan bruk av asymmetrisk kryptering og en PKI for digital signering av resepter
kan forhindre forfalskning av resepter. Hvem må da inneha hhv. privat og offentlig kryptografisk
nøkkel i et nøkkelpar når en tannlege signerer en resept digitalt?
# Oppgave 5
Tannlegekontoret får internett levert fra en ISP via en fibertilkobling. Abonnementet har en hastighet
på 200 megabit ned og 50 megabit opp og inneholder en offentlig IP-adresse.
(a) Tannlegekontoret har 12 endesystemer som skal kobles til nettverket. Hva kan du gjøre for å dele
den offentlige IP-adressen på alle maskinene i nettverket?
(b) En av datamaskinene på tannlegekontoret styrer røntgenmaskinen. Her kreves det at leverandøren
av maskinen kan logge seg på fra en ekstern maskin for å utføre vedlikehold. Hvilke utfordringer
kan dette skape når flere maskiner må dele en offentlig IP-adresse, og hvordan kan vi løse dem?
(c) Tannlegekontoret utfører jevnlig sikkerhetskopi av data til en tjener på Internett. En vanlig
sikkerhetskopi er på 915 MB. Hva er teoretisk overføringstid med tannlegekontorets forbindelse.
2
# Oppgave 6
Som konsulent er det ditt ansvar å konfigurere ruteren. Den private adressen til ruteren oppgitt i
CIDR-format er: 192.168.100.1/26
(a) Hva er riktig nettmaske og broadcast-adresse i punktnotasjon for nettverket?
(b) Hvor mange IP-adresser kan deles ut i det private nettverket?
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