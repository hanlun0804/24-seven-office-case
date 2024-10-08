## Kjør program

```bash
npm run dev
# eller
yarn dev
# eller
pnpm dev
# eller
bun dev
```

## Scope

Prosjektet er et bookingssystem for en hotellkjede i Norge som skal kunne brukes av ansatte og kunder. Ansatte skal kunne booke rom på vegne av kunder og administrere hotellrom, mens kunder kun skal kunne booke rom. Et spesifikt rom skal kunne bookes. 

Ansatte skal kunne se historikken på rommet. 

I fremtiden er det ønskelig å innføre et lojalitetsprogram for lønnsomme kunder.

Viktige egenskaper fra problembeskrivelsen:
- Ansatte og kunder må kunne booke rom i kategori (enkeltrom, dobbeltrom...) eller spesifikt rom
- Hotellrom kan reserveres for en periode
- Det må ikke være mulig å dobbeltbooke et rom
- Audit log/historikk må være tilgjengelig pr rom/pr kunde
- Persondata må lagres sikkert
- Sikkerhet i løsningen
- Systemet skal integreres med andre løsninger

## Roadmap

1. Definer techstack
2. Lag simpel frontend
3. Sett opp database
4. Sett opp autentisering/login/registrer
5. Sett opp role based access
6. Implementer API kall for front-/backend kommunikasjon
7. Bruk API kall til å kommunisere

## Techstack

- Frontend: Next.js, React, TypeScript, TailwindCSS
- Backend: Prisma, PostgreSQL

### Andre tekniske spesifikasjoner

- Postman: brukt til testing av API kall
- bcrypt: brukt til å kryptere/dekryptere passord
- NextAuth.js: brukt til autentiering

## Utvikleropplevelse

Jeg har mest erfaring i frontend, og å sette opp en simpel frontend var derfor relativt lett. I prosjekter hvor jeg har vært ansvarlig for backend har vi brukt Firebase, noe jeg ikke ønsket å bruke her, da jeg ikke ønsket å knytte hotellkjeden til et eksternt program som Google. Derfor ønsket jeg å bruke NextAuth.js, et naturlig valg når jeg bruker Next.js. Dette hadde jeg ikke gjort før, og (for) mye av min tid gikk derfor til oppsett av dette. 

Jeg hadde et ønske om å implementere role based access, da det hadde gitt ansatte og kunder ulik interface, men når jeg fikk på plass login/registrering så jeg jeg ikke hadde tid til dette. Derfor valgte jeg å fokusere på det jeg mente ga best representasjon av mine kode-ferdigheter, uten et ferdig prosjekt, som var å implementere en veldig simple booking løsning, hvor en ansatt kan booke et rom for en kunde ved å spesifisere kunde-IDen. Dette skulle jeg selvfølgelig gjort på en bedre måte om jeg hadde tid, som jeg gjerne kan utdype mer om, om det er interessant. 

schema.prisma inneholder det jeg mener skal være et relativt komplett databaseskjema, annet enn for auditLog, som trenger å ha flere attributter for å følge deres spesifikasjoner. Min tanke med å sette opp dette, og API kall og kommunikasjon ved rombooking, viser at jeg vet hvordan det gjøres, selv om jeg ikke hadde tid til å fullføre det for alle delene av prosjektet.

## Diskusjonsoppgaver

### Backend

1. Hva mener du er viktig å tenke på når du skal lage et slikt system?

- Jeg mener det er viktig å tenke på at produktet skal være skalerbart, og lett å koble på andre systemer. Derfor brukte jeg API kall for kommunikasjon mellom frontend og backend.

2. Er det noen spesielle teknologier du mener vil være til hjelp når du skal lage et slikt system, og hvorfor?

- Jeg har god erfaring med Next.js, og synes det fungerer sømløst å bruke deres API-ruter. Det var lett å forholde seg til. NextAuth.js var også relativt lett å sette seg inn i. Jeg brukte bcrypt for å kryptere passordet til brukeren, da det åpenbart er viktig for sikker lagring. Videre fungerte PostgreSQL og Prisma godt for prosjektet, men her tror jeg mange databaseløsninger fungerer omtrent likt.

3. Er det noen spesielle utfordringer som kan oppstå i en slik type løsning, og hvordan ville du angrepet dem?

- Integrasjoner med eksterne løsninger, som betalingsløsninger eller kredittsjekker kan være utfordrene. Ved bruk av APIer kan dette forhåpentligvis løses godt. Personvern kan også være problematisk, og det bør derfor implementeres grundig logging for ansatte som sjekker kundedata.

### Frontend

1. Hva mener du er viktig å tenke på når du skal lage et slikt system?

- Jeg synes det er viktig å implementere et intuitivt brukergrensesnitt med et responsivt design, som gjør at siden er lett å bruke på både mobil og PC. Dette skulle jeg gjerne kunne satt av mer tid til. I tillegg synes jeg det er veldig viktig at siden er "accessable", og at den kan brukes med skjermleser, har tydelige kontraster, og at brukere med ulike utfordringer kan bruke den. Ytelse er også alltid viktig, spesielt at den opprettholdes når siden har mye trafikk.

2. Er det noen spesielle teknologier du mener vil være til hjelp når du skal lage et slikt system, og hvorfor?

- Å bruke Next.js og React er en stor fordel. Dette tilbyr mye funksjonalitet som støtter utvikleropplevelsen, som API-ruter og autentisering. I tillegg hjelper server-side rendering med ytelse og at komponenter som endres re-rendres. TailwindCSS gjør også utvikleropplevelsen bedre, da det er raskt å skrive. Jeg brukte også localstorage for å sjekke om en bruker var logget inn allerede, som var en simpel løsning.

3. Er det noen spesielle utfordringer som kan oppstå i en slik type løsning, og hvordan ville du angrepet dem?

- Concurrency kan bli et problem. Om to prøver å booke et rom nøyaktig samtidig kan muligens en dobbeltbooking skje. Jeg tror PostgreSQL har funksjonalitet for dette, men en frontend-løsning er å låse et rom for andre brukere når en bruker holder på å booke det. Ytelse kan også bli problematisk, men det kan løses av caching og lazy loading/paging av større mengder data (som ledige rom).