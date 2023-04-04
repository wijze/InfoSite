const questions = [
  {
    question:"Omschrijf in je eigen woorden het begrip protocol en waarom dit belangrijk is bij datacommunicatie. Geef ook een voorbeeld van een protocol in het dagelijks leven.",
    answer:"Protocollen zijn regels die zijn vastgelegd voor de structuur van de data om ervoor te zorgen dat alle betrokkenen zich aan deze regels houden. Als er geen regels zouden zijn zou het niet altijd werken om informatie tussen verschillende soorten computers te sturen. Een voorbeeld van een protocol in het dagelijkse leven is dat je een adres op een brief schrijft zodat die bezorgt kan worden."
  },
  {
    question:`Van welk protocol maakt een webbrowser gebruik?
    <br> a. TCP/IP
    <br> b. HTTP
    <br> c. FTP
    <br> d. DHCP`,
    answer:"B"
  },
  {
    question:`Wat is het verschil tussen HTTP en HTTPS? Waarom stappen veel mensen over naar HTTPS?`,
    answer:"De S staat voor secure. Veel mensen stappen over naar HTTPS omdat het beveiligd is."
  },
  {
    question:`Bij IP- adressen wordt gesproken over IPv4 en IPv6 waarom was/is de invoering van IPv6 nodig? Hoeveel adressen zijn er in theorie bij IPv4 en hoeveel bij IPv6?`,
    answer:"Mensen willen naar ipv6 gaan van ipv4, omdat ipv6 veel meer adressen heeft, omdat we er niet genoeg hebben, ze zijn bijna allemaal gebruikt. Ipv6 heeft er 340,282,366,920,938,000,000,000,000,000,000,000,000 terwijl ipv4 er maar 4.294.967.296 heeft."
  },
  {
    question:`Wat houdt het begrip checksum in en waar dient dit voor?`,
    answer:"Een checksum is een deel van het IP-protocol dat zegt dat je een bepaald ding aan je pakket moet toevoegen wat iets zegt over de rest van het bericht en wat je daaruit kan berekenen. Bij aankomst wordt gecheckt of de checksum klopt met het bericht, zo niet, dan wordt het bericht weggegooid. Dit zorgt ervoor dat de ontvanger geen foute berichten krijgt."
  },
  {
    question:`Waarom komen TCP en IP vaak gecombineerd voor?
    <br> a. IP verzorgt het transport en TCP zorgt onder meer voor een optimale flow control.
    <br> b. IP verzorgt het transport en TCP zorgt onder meer voor een snellere gegevensoverdracht.
    <br> c. IP verzorgt het transport en TCP zorgt onder meer voor de juiste volgorde.
    <br> d. IP verzorgt het transport en TCP zorgt onder meer voor de foutcontrole.`,
    answer:"D"
  },
  {
    question:`Welk deel van het IP-Datagram zorgt ervoor dat er geen foute pakketten worden geaccepteerd door de ontvanger? 
    <br> A. Protocol 
    <br> B. Source IP-adres 
    <br> C. Checksum 
    <br> D. Total Length`,
    answer:"C"
  },
  {
    question:`Hoe ziet een IPV4 IP-adres eruit? 
    <br> A. 192.0.2.197 
    <br> B. 123.987.000 
    <br> C. 2001:0db8:85a3:0000:1319:8a2e:0370:7344 
    <br> D. 3.14159265358.0.0.0`,
    answer:"A"
  },
  {
    question:`Is het IP-protocol veilig? (Zodat erg geen pakketten verloren gaan) 
    <br> A. Ja 
    <br> B. nee 
    <br> C. weet ik veel`,
    answer:"B of C"
  },
  {
    question:`Wat is de Time To Live (TTL) van het IP-protocol? Waarvoor wordt het gebruikt? Waarom is het nodig?`,
    answer:"Time To Live zorgt ervoor dat het IP-protocol maar langs een beperkt aantal routers kan gaan. Het zorgt ervoor dat pakketten niet oneindig lang door kunnen gaan"
  },
  {
    question:`Welke functie heeft DNS in het verzenden van informatie? 
    <br> A. Het toekennen van IP-adressen aan apparaten 
    <br> B. Het vertalen van internetadressen naar IP-adressen  
    <br> C. Het verbinden van verschillende netwerken  
    <br> D. Het versleutelen van gegevens`,
    answer:"B"
  },
  {
    question:`Wat is het verschil tussen het TCP/IP-model en het OSI-model?`,
    answer:"Het verschil tussen het TCP/IP-model en het OSI-model is dat het OSI-model zeven lagen heeft, terwijl het TCP/IP-model er vijf heeft."
  },
  {
    question:`Wat is het doel van NAT in een netwerk? 
    <br> A. Het toekennen van unieke IP-adressen aan apparaten in het netwerk  
    <br> B. Het routeren van gegevens tussen verschillende netwerken  
    <br> C. Het vertalen van IP-adressen in privénetwerken naar openbare IP-adressen 
    <br> D. Het controleren van de toegang tot het netwerk`,
    answer:"C"
  },
  {
    question:`Wat is het doel van de transport laag in het TCP/IP-model?`,
    answer:"De transport laag in het TCP/IP-model is verantwoordelijk voor het verzenden van gegevens van de ene naar de andere applicatie op verschillende apparaten. Het zorgt ervoor dat gegevens betrouwbaar worden afgeleverd en biedt services zoals flow control, error checking en sequentienummering."
  }
]