const crim1Data = [
    {
        question: "IL PRIMO METODO DI RICERCA DELLE TRACCE DA ADOTTARE SULLA SCENA DEL CRIMINE È:",
        answers: ["Le polveri", "Metodo ottico", "Metodi chimici", "Metodi biologici"],
        correctAnswer: "Metodo ottico"
    },
    {
        question: "IL REPERTAMENTO DELLE SOSTANZE STUPEFACENTI, DEVE AVVENIRE:",
        answers: ["Includendo gli involucri o i contenitori originali che custodiscono le sostanze", "Non annotare la quantità e la provenienza delle sostanze", "Nessuna delle precedenti", "Ignorare la registrazione della movimentazione delle sostanze"],
        correctAnswer: "Includendo gli involucri o i contenitori originali che custodiscono le sostanze"
    },
    {
        question: "LA COMPARAZIONE DI VOCI CONSENTE DI:",
        answers: ["Individuare la paternità di una voce", "Determinare l'età del parlante", "è inutile", "Identificare il sesso del parlante"],
        correctAnswer: "Individuare la paternità di una voce"
    },
    {
        question: "COS’È L'IMPICCAMENTO?",
        answers: ["Esecuzione capitale che consiste nel sospendere per il collo una persona tramite una corda", "Ostruzione delle vie aeree mediante costrizione del collo da laccio fissato ad un sostegno", "Asfissia causata dallo strangolamento", "Metodo per identificare persona deceduta in seguito ad un suicidio"],
        correctAnswer: "Ostruzione delle vie aeree mediante costrizione del collo da laccio fissato ad un sostegno"
    },
    {
        question: "IL TEST DEL \"LUMINOL\":",
        answers: ["Presenta il vantaggio di non essere tossico e quindi utilizzabile senza particolari precauzioni per gli operatori", "Anche se usato in ingente quantità non determina modifiche alla morfologia della traccia", "Presenta il vantaggio di poter essere utilizzato su vaste superfici", "Viene utilizzato per l’esaltazione di tracce ematiche latenti"],
        correctAnswer: "Viene utilizzato per l’esaltazione di tracce ematiche latenti"
    },
    {
        question: "IL LABORATORIO CENTRALE DEL D.A.P. SI OCCUPA:",
        answers: ["Della tipizzazione dei profili del DNA dei reperti biologici", "Delle attività di repertamento dei reperti biologici sulla scena del crimine", "Della tipizzazione dei profili del DNA dei campioni biologici", "Delle attività repertamento dei campioni biologici sulla scena del crimine"],
        correctAnswer: "Della tipizzazione dei profili del DNA dei campioni biologici"
    },
    {
        question: "IN UNA SCENA DEL DELITTO IN CUI VIENE RILEVATA LA PRESENZA DI UN CADAVERE, LA CERTIFICAZIONE DI MORTE VIENE REDATTA:",
        answers: ["Dal Comandante di Stazione", "Esclusivamente dal Medico Legale", "Dall’UPG che coordina le indagini", "Contestualmente al verbale di accertamenti urgenti su luoghi, cose o persone"],
        correctAnswer: "Esclusivamente dal Medico Legale"
    },
    {
        question: "L’EXAGON OBI È PARTICOLARMENTE UTILE PER:",
        answers: ["Esaltare una traccia seminale", "Individuare la natura di una traccia salivare", "Rendere luminescente una traccia ematiche", "Individuare la specie di appartenenza di una traccia ematica"],
        correctAnswer: "Individuare la specie di appartenenza di una traccia ematica"
    },
    {
        question: "QUANDO SI PARLA DI MACCHIE PASSIVE CI SI RIFERISCE A:",
        answers: ["Quelle prodotte da gocce o volumi di sangue in caduta libera, sottoposte a forze come la gravità, la resistenza dell'aria e il movimento del soggetto", "Nessuna delle precedenti risposte", "Quelle prodotte da gocce o volumi di sangue in caduta libera, sottoposti solo a forze come la gravità e la resistenza dell’aria", "Quelle prodotte da gocce o volumi di sangue in caduta libera, sottoposte a forze come la gravità, la resistenza dell'aria e la velocità del movimento del soggetto"],
        correctAnswer: "Quelle prodotte da gocce o volumi di sangue in caduta libera, sottoposti solo a forze come la gravità e la resistenza dell’aria"
    },
    {
        question: "PER ANALISI MERCEOLOGICHE SU TRACCE DI PNEUMATICO BISOGNA:",
        answers: ["Documentare tramite video le tracce e le auto sospette", "Documentare fotograficamente, prelevare dei campioni delle tracce e repertare frammenti di battistrada di eventuali auto sospette", "Documentare tramite video e non prelevare nessuna traccia", "Repertare solo frammenti di battistrada di eventuali auto sospette"],
        correctAnswer: "Documentare fotograficamente, prelevare dei campioni delle tracce e repertare frammenti di battistrada di eventuali auto sospette"
    },
    {
        question: "A SEGUITO DI INTERVENTO IN FLAGRANZA, PER DETENZIONE DI SOSPETTE SOSTANZE PSICOTROPE, POTRANNO ESSERE ADOTTATE MISURE PRECAUTELARI",
        answers: ["All'esito di accertamenti speditivi mediante “narcotest”", "Solo se ricorrono le ipotesi aggravate previste dall'art. 80 del DPR 309/90", "Solo a seguito di perizia qualitativa", "Solo a seguito degli esami di laboratorio attestante in quantitativo di principio attivo"],
        correctAnswer: "All'esito di accertamenti speditivi mediante “narcotest”"
    },
    {
        question: "L’ATTUALE CONFIGURAZIONE ORDINATIVA DEL “RACIS” PREVEDE TRA L’ALTRO:",
        answers: ["Ufficio comando, Reparto Tecnologie Informatiche, Reparto Dattiloscopia Preventiva e Reparto Analisi Criminologiche", "Reparto Analisi Criminologiche, Reparto Tecnologie Informatiche, Reparto Addestramento, Reparto Dattiloscopia Preventiva e Reparto Tecnico", "Reparto Tecnologie Informatiche, RIS e Reparto Comando e Servizi", "Reparto Tecnologie Informatiche, Reparto Addestramento, Reparto Dattiloscopia Preventiva e Reparto Tecnico e CC Identificazione Vittime Disastri"],
        correctAnswer: "Ufficio comando, Reparto Tecnologie Informatiche, Reparto Dattiloscopia Preventiva e Reparto Analisi Criminologiche"
    },
    {
        question: "NELLA FASE DI PRIMO INTERVENTO SULLA SCENA DI UN CRIMINE SI POSSONO GENERALMENTE SCANDIRE, NELL’ORDINE LE SEGUENTI FASI:",
        answers: ["La chiamata iniziale della persona informata alla C.O. e o la ricezione delle prime informazioni, l’attività preliminare rispetto all’investigazione e al sopralluogo, l’arrivo sulla scena del crimine, l’arresto o il fermo di un sospetto sulla scena del crimine, la protezione della scena del crimine e le comunicazioni conseguenti alla prima valutazione della scena del crimine", "La chiamata iniziale della persona informata alla C.O. e/o la ricezione delle prime informazioni, l’arrivo sulla scena del crimine, la protezione della scena del crimine, le comunicazioni conseguenti alla prima valutazione sulla scena del crimine, l’arresto o il fermo di un sospettato sulla scena del crimine e l’attività preliminare rispetto all’investigazione e al sopralluogo", "La chiamata iniziale della persona informata alla C.O. e/o la ricezione delle prime informazioni, le comunicazioni conseguenti alla prima valutazione della scena del crimine, le dichiarazioni alla stampa e l’attività preliminare rispetto all’investigazione e al sopralluogo", "La chiamata iniziale della persona informata alla C.O. e/o la ricezione delle prime informazioni, le comunicazioni conseguenti alla prima valutazione della scena del crimine, l’arresto o ferma di un sospetto sulla scena del crimine, l’arrivo sulla scena del crimine, la protezione della scena e l’attività preliminare rispetto all’investigazione e al sopralluogo"],
        correctAnswer: "La chiamata iniziale della persona informata alla C.O. e/o la ricezione delle prime informazioni, l’arrivo sulla scena del crimine, la protezione della scena del crimine, le comunicazioni conseguenti alla prima valutazione sulla scena del crimine, l’arresto o il fermo di un sospettato sulla scena del crimine e l’attività preliminare rispetto all’investigazione e al sopralluogo"
    },
    {
        question: "IL PERSONALE CHE PER PRIMO GIUNGE SULLA SCENA DEL CRIMINE, DEVE, TRA LE ALTRE COSE, IDENTIFICARE:",
        answers: ["L’area di stazionamento degli automezzi degli specialisti RIS", "L’area di interesse ed eseguire i rilievi specialistici sequestrando il materiale di interesse", "L’area di interesse e interdirne a chiunque l’accesso", "L’area di stazionamento della stampa"],
        correctAnswer: "L’area di interesse e interdirne a chiunque l’accesso"
    },
    {
        question: "IL FILTRAGGIO FONICO È UNA PROCEDURA FORENSE CHE:",
        answers: ["Consente di migliorare l’intelligibilità del parlato", "Consente di autenticare una registrazione audio", "Consente di identificare i parlanti in una registrazione", "Riduce drasticamente la durata del file audio"],
        correctAnswer: "Consente di migliorare l’intelligibilità del parlato"
    },
    {
        question: "LE TRACCE CHE SI TROVANO SULLA SCENA DEL CRIMINE POSSONO ESSERE DEFINITE COME:",
        answers: ["Indizi falsi del crimine in grado di creare dubbi tra persone, luoghi ed oggetti", "Prove false del crimine in grado di creare confusione tra persone, luoghi ed oggetti", "Prove artificiali del crimine in grado di creare illusioni tra persone, luoghi ed oggetti", "Testimoni silenti del crimine in grado di creare collegamenti tra persone, luoghi ed oggetti"],
        correctAnswer: "Testimoni silenti del crimine in grado di creare collegamenti tra persone, luoghi ed oggetti"
    },
    {
        question: "UNA MACCHIA PASSIVA PER GOCCIOLAMENTO SI PUÒ PRESENTARE COME:",
        answers: ["Goccia singola, goccia multipla o gocce sequenziali", "Sempre ed esclusivamente essiccata", "Goccia singola, goccia esterna e goccia estranee", "Goccia multipla, gocce sequenziali e gocce rarefatte"],
        correctAnswer: "Goccia singola, goccia multipla o gocce sequenziali"
    },
    {
        question: "IL SEQUESTRO PROBATORIO:",
        answers: ["Mira a creare delle fonti di prova", "Mira a nascondere delle fonti di prova", "Mira a distruggere delle fonti di prova", "Mira ad assicurare delle fonti di prova"],
        correctAnswer: "Mira ad assicurare delle fonti di prova"
    },
    {
        question: "L’ALGOR MORTIS È UN FENOMENO ABIOTICO CONSECUTIVO CHE VALUTA:",
        answers: ["La progressiva perdita di calore del corpo in relazione alla temperatura ambientale", "Lo stato di rigidità cadaverica conseguente al decesso", "Le cause di morte improvvisa", "La formatione di macchie ipostatiche"],
        correctAnswer: "La progressiva perdita di calore del corpo in relazione alla temperatura ambientale"
    },
    {
        question: "LO SNIFFER ELETTRONICO È:",
        answers: ["Un sensore per il rilevamento di esplosivi", "Un dispositivo per rilevare la presenza di gas tossici", "Uno strumento non utilizzato", "Uno strumento utilizzato per analisi di tracce olfattive"],
        correctAnswer: "Uno strumento utilizzato per analisi di tracce olfattive"
    },
    {
        question: "QUALI SONO GLI ESAMI TANATOLOGICI COMPIUTI SUL CADAVERE?",
        answers: ["Annotazione compiuta dal medico legale contenente le dimensioni del cadavere", "Annotazione di PG riguardante lo stato di rinvenimento del cadavere", "Perizia tecnica legata agli indumenti che indossava, comprensiva di temperatura esterna rilevata ed eventuale stato di decomposizione del cadavere", "Rilevazione temperatura cadaverica, valutazione rigidità cadaverica e studio macchie ipostatiche"],
        correctAnswer: "Rilevazione temperatura cadaverica, valutazione rigidità cadaverica e studio macchie ipostatiche"
    },
    {
        question: "TRA GLI ALTRI VANTAGGI, LA BANCA DATI DEL DNA:",
        answers: ["Contrae i tempi necessari per le comparazioni tra i dati genetici di un reperto e quelli di un campione di riferimento", "Permette la tipizzazione di informazioni relative alla salute ed alle abitudini alimentari dei cittadini", "Contrae i tempi necessari per le comparazioni tra due o più campioni di riferimento", "Estende ragionevolmente i tempi necessari per le comparazioni tra dati genetici di un reperto e quelli di un campione di riferimento"],
        correctAnswer: "Contrae i tempi necessari per le comparazioni tra i dati genetici di un reperto e quelli di un campione di riferimento"
    },
    {
        question: "IL SEQUESTRO DI CORPI DI REATO:",
        answers: ["È un atto discrezionale in presenza di corpi di reato o cose pertinenti ad esso", "É un atto di competenza esclusiva dell’UPG", "È uno strumento utile a garantire la raccolta di elementi probatori a favore di coloro che esprimeranno un giudizio", "È un atto che necessita di autorizzazioni particolari nel caso di intervento di urgenza"],
        correctAnswer: "È uno strumento utile a garantire la raccolta di elementi probatori a favore di coloro che esprimeranno un giudizio"
    },
    {
        question: "L’IMPRONTA LASCIATA DA CRESTE PAPILLARI È COSTITUITA DA:",
        answers: ["Solo materiale estraneo proveniente da contaminazioni con l'ambiente esterno, senza secrezioni naturali", "Solo secrezioni naturali, senza alcun materiale estraneo proveniente da contaminazioni con l'ambiente esterno", "Un semplice insieme di secrezioni naturali senza alcuna contaminazione con l'ambiente esterno", "Un complesso insieme di secrezioni naturali e materiale estraneo proveniente da contaminazioni con l’ambiente esterno"],
        correctAnswer: "Un complesso insieme di secrezioni naturali e materiale estraneo proveniente da contaminazioni con l’ambiente esterno"
    },
    {
        question: "L’INDAGINE SUL DNA MITOCONDRIALE È POSSIBILE:",
        answers: ["Solo su campioni di urine", "Solo su steli con bulbo", "Solo su campioni di sangue", "Anche su steli privi di bulbo"],
        correctAnswer: "Anche su steli privi di bulbo"
    },
    {
        question: "GLI EVENTUALI TESTIMONI PRESENTI SULLA SCENA DEL CRIMINE DOVRANNO ESSERE:",
        answers: ["Immediatamente identificati e tenuti insieme ma separati dalle altre persone per la successiva escussione", "Immediatamente interrogati", "Immediatamente escussi ex art. 350 CPP", "Immediatamente escussi ex art 351 CPP"],
        correctAnswer: "Immediatamente identificati e tenuti insieme ma separati dalle altre persone per la successiva escussione"
    },
    {
        question: "QUALI TRA LE SEGUENTI TRACCE POSSONO ESSERE CONSIDERATE TEMPORANEE:",
        answers: ["Gli odori e la temperatura", "Le macchie ematiche e quelle digitali", "Le fibre e le formazioni pilifere", "Il DNA ed i residui dello sparo"],
        correctAnswer: "Gli odori e la temperatura"
    },
    {
        question: "LO STUB PRODUCE RISULTATI UTILI SE VIENE PRODOTTO ENTRO:",
        answers: ["Qualunque tempo dal delitto, in quanto in ogni caso non viene pregiudicato il suo risultato positivo", "Le prime 60 ore dal delitto", "Le prime 48 ore dal delitto", "Le prime 6 ore dal delitto"],
        correctAnswer: "Le prime 6 ore dal delitto"
    },
    {
        question: "AI SENSI DELLA LEGGE N. 85/2009, SI DEFINISCE REPERTO BIOLOGICO:",
        answers: ["La quantità di sostanza biologica prelevata da un reperto acquisito sulla scena del crimine", "La quantità di sostanza biologica prelevata sulla persona sottoposta a tipizzazione del profilo del DNA", "Il materiale biologico acquisito sulla scena di un delitto o comunque su cose pertinenti al reato", "Il materiale biologico acquisito all'interno dell'abitazione dell'indagato nell’immediatezza del fatto"],
        correctAnswer: "Il materiale biologico acquisito sulla scena di un delitto o comunque su cose pertinenti al reato"
    },
    {
        question: "NEL PRELEVARE UN SAGGIO FONICO PER COMPARAZIONE IL SOGGETTO NEI CUI CONFRONTI SI PROCEDE:",
        answers: ["Deve ripetere la stessa frase da sottoporre a confronto", "Non deve ripetere la stessa frase da sottoporre a confronto", "Deve ripetere una frase specifica fornita dal perito", "Deve parlare liberamente senza restrizioni"],
        correctAnswer: "Deve ripetere la stessa frase da sottoporre a confronto"
    },
    {
        question: "QUALI SONO LE PROBLEMATICHE RELATIVE AL PRIMO INTERVENTO?",
        answers: ["Per il principio di Locard, contaminare la scena del crimine", "Investigazione diretta per individuare l'autore del fatto", "Sicurezza degli operatori e inquinamento della scena del crimine", "Sicurezza sanità e investigazione"],
        correctAnswer: "Sicurezza sanità e investigazione"
    },
    {
        question: "IL CIANOACRILATO, PER ESPLETARE LA PROPRIA FUNZIONE EVIDENZIATRICE, NECESSITA:",
        answers: ["Di un substrato fluorescente", "Di un ambiente secco", "Di una superficie molto bagnata", "Di un ambiente saturo di vapori"],
        correctAnswer: "Di un ambiente saturo di vapori"
    },
    {
        question: "LE MODALITÀ DI REPERTAMENTO INFORMATICHE:",
        answers: ["Sono stabilite dalla Procura della Repubblica competente", "Sono stabilite da uno standard internazionale allo Stato definito ISO 27037", "Sono stabilite dal Comando Generale che determini protocolli di acquisizione", "Sono stabilite dal singolo operatore specializzato"],
        correctAnswer: "Sono stabilite da uno standard internazionale allo Stato definito ISO 27037"
    },
    {
        question: "LE FASI DEL SOPRALLUOGO SONO NELL'ORDINE:",
        answers: ["Orientamento, preparazione, implementazione e conclusione", "Orientamento, implementazione, programmazione e conclusione", "Programmazione, ricognizione, implementazione e conclusione", "Implementazione, orientamento, programmazione e conclusione"],
        correctAnswer: "Orientamento, preparazione, implementazione e conclusione"
    },
    {
        question: "LA BALISTICA SI SUDDIVIDE IN:",
        answers: ["Balistica teorica, balistica pratica e balistica sperimentale", "Balistica interna e comparativa, balistica esterna e balistica terminale", "Balistica interna, balistica esterna e balistica lesionale", "Balistico comparativa, balistico esterna e balistico terminale"],
        correctAnswer: "Balistica interna e comparativa, balistica esterna e balistica terminale"
    },
    {
        question: "NEL CASO DI AGGRESSIONE PERPETRATA MEDIANTE REITERATI COLPI AL CAPO:",
        answers: ["Nessuna delle precedenti risposte", "I colpi generano sempre schizzi di sangue, indipendentemente dalla sequenza", "I colpi generano sempre una ferita sanguinante, indipendentemente dalla sequenza", "Il primo genera la ferita sanguinante, gli altri generano gli schizzi"],
        correctAnswer: "Il primo genera la ferita sanguinante, gli altri generano gli schizzi"
    },
    {
        question: "IL PRIMO COMMA DELL'ART. 354 CPP DISPONE QUE LA PG INTERVENUTA:",
        answers: ["Cura che le tracce e le cose pertinenti al reato siano conservate e che lo stato dei luoghi e delle cose non venga mutato prima dell'intervento del PM", "Cura che le tracce e le cose pertinenti al reato siano distrutte e che lo stato dei luoghi e delle cose venga mutato prima dell'intervento del PM", "Cura che le tracce e le cose pertinenti al reato siano contaminate e che lo stato dei luoghi e delle cose venga cancellato prima dell'intervento del PM", "Cura che le tracce e le cose pertinenti al reato siano ignorate e che lo stato dei luoghi e delle cose venga alterato prima dell'intervento del PM"],
        correctAnswer: "Cura che le tracce e le cose pertinenti al reato siano conservate e che lo stato dei luoghi e delle cose non venga mutato prima dell'intervento del PM"
    },
    {
        question: "PER REPERTO INFORMATICO S’INTENDE:",
        answers: ["L’hardware ed il software costituito da dati, programmi ed informazioni contenute in sistemi informatizzati", "Esclusivamente l'hardware dei dispositivi elettronici, come computer, smartphone e tablet", "Nessuna delle precedenti", "Solamente i dati, i programmi e le informazioni contenute in sistemi informatizzati, senza l'hardware"],
        correctAnswer: "L’hardware ed il software costituito da dati, programmi ed informazioni contenute in sistemi informatizzati"
    },
    {
        question: "L'IMPATTO ANGOLARE DI UNA GOCCIA DI SANGUE SU SUPERFICI ORIZZONTALI:",
        answers: ["Consente di individuare la direzionalità del movimento del soggetto donatore", "Consente di individuare la velocità del movimento del soggetto donatore", "Nessuna delle precedenti", "Consente di individuare la direzionalità del movimento del soggetto donatore e la velocità del movimento del soggetto donatore"],
        correctAnswer: "Consente di individuare la direzionalità del movimento del soggetto donatore"
    },
    {
        question: "LE CARATTERISTICHE DELL'IMPRONTA PAPILLARE CHE RENDONO POSSIBILE L’IDENTIFICAZIONE DI UNA PERSONA SONO:",
        answers: ["L'immutabilità, l'individualità e la visibilità", "La mutabilità, l'individualità e la classificabilità", "L'immutabilità, la genericità e la classificabilità", "L'immutabilità, l'individualità e la classificabilità"],
        correctAnswer: "L'immutabilità, l'individualità e la classificabilità"
    },
    {
        question: "SULLA FORMA DELLE TRACCE DI SANGUE INCIDONO FATTORI COME?",
        answers: ["Il tipo di superficie e l’angolo d’impatto con essa", "La sua distribuzione e la coagulazione", "Il tipo di reato è l'azione del soggetto attivo", "La posizione del corpo del donatore è il suo genere"],
        correctAnswer: "Il tipo di superficie e l’angolo d’impatto con essa"
    },
    {
        question: "PER QUANTO RIGUARDA L’ATTIVITÀ DI SOPRALLUOGO E REPERTAMENTO DEGLI ORDIGNI ESPLOSIVI, SI DEVE OPERARE LA SEGUENTE DISTINZIONE:",
        answers: ["Indagini condotte su ordigni esplosi ed indagini condotte su ordigni inesplosi", "Nessuna delle precedenti risposte", "Indagini condotte su ordigni integri ed indagini condotte su ordigni esplosi", "Indagini condotte su ordigni inesplosi"],
        correctAnswer: "Indagini condotte su ordigni integri ed indagini condotte su ordigni esplosi"
    },
    {
        question: "RISPETTO AL TRATTAMENTO QUE IL GIUDICE DEVE RISERVARE ALLA PROVA SCIENTIFICA ED ALLA VALUTAZIONE QUE DEVE DARE A QUEST’ULTIMA, IL CRITERIO FONDAMENTALE ESPRESSO DALLA SENTENZA STATUNITENSE DEL ’23 “FRYE VS USA” È IL SEGUENTE:",
        answers: ["Possibilità di sottoporre la teoria a verifica empirica, falsificarla e confutarla", "Accettazione generale della comunità scientifica", "Indicazione del margine di errore noto o potenziale", "Irrefutabilità descrittiva"],
        correctAnswer: "Accettazione generale della comunità scientifica"
    },
    {
        question: "DOVENDO PROCEDERE AD UN RILIEVO PLANIMETRICO CON IL METODO DELLA TRILATERAZIONE:",
        answers: ["È sempre possibile procedere con un solo caposaldo", "Nessuna delle precedenti", "Non è mai possibile procedere con un solo caposaldo", "È possibile procedere con un solo caposaldo in alcuni casi particolari"],
        correctAnswer: "Non è mai possibile procedere con un solo caposaldo"
    },
    {
        question: "IL METODO DI REPERTAMENTO DENOMINATO BPA (BLOODSTAIN PATTERN ANALISYS) È:",
        answers: ["Un metodo di ricerca di tracce morfologiche o di trasferimento", "Un metodo di ricerca delle impronte digitali", "Un metodo di ricerca di reperti biologici", "Un metodo che determina l'identità del reo"],
        correctAnswer: "Un metodo di ricerca di tracce morfologiche o di trasferimento"
    },
    {
        question: "IL SEQUESTRO DEI CORPI DI REATO:",
        answers: ["È un'attività discrezionale in presenza di corpi di reato o cose pertinenti ad esso", "È uno strumento utile a garantire la raccolta di elementi probatori a favore di coloro che esprimeranno un giudizio", "È un'attività che necessita di autorizzazioni particolari nel caso di intervento di urgenza", "È un atto di competenza esclusiva dell'ufficiale di PG"],
        correctAnswer: "È uno strumento utile a garantire la raccolta di elementi probatori a favore di coloro che esprimeranno un giudizio"
    },
    {
        question: "QUALE TIPO DI DNA VIENE USATO PER IL RICONOSCIMENTO CADAVERICO?",
        answers: ["Nucleare", "Ribosomiale", "Messaggero", "Mitocondriale"],
        correctAnswer: "Nucleare"
    },
    {
        question: "COSA SONO LE IMPRONTE?",
        answers: ["Tracce morfologiche", "Tracce materiali", "Tracce oggetto", "Tracce di situatione"],
        correctAnswer: "Tracce morfologiche"
    },
    {
        question: "IL REPARTO DELLE ANALISI CRIMINOLOGICHE DEL RACIS PREVEDE:",
        answers: ["Banca dati del DNA", "Repertamento di tracce biologiche", "Analisi DNA e tipizzazione dei profili", "Psicologia investigative e atti persecutori"],
        correctAnswer: "Psicologia investigative e atti persecutori"
    },
    {
        question: "L’INIZIO DEL TIME TABLE CON LA SCANSIONE CRONOLOGICA DEGLI EVENTI HA LUOGO CON:",
        answers: ["Arrivo degli specialisti del sopralluogo", "Attivazione che informa dell’accaduto prima di giungere sul posto", "Arrivo sul posto segnalato", "Verifica della effettiva sussistenza del fatto"],
        correctAnswer: "Attivazione che informa dell’accaduto prima di giungere sul posto"
    },
    {
        question: "COS'È LA DEFLAGRAZIONE?",
        answers: ["È un meccanismo di trasformazione esplosiva che si propaga mediante la forza d’urto pressoria dove il materiale che partecipa alla reazione, si decompone con grande rapidità attivando per impatto tutta la massa esplosiva", "È un processo di natura termica dove il materiale che partecipa alla reazione, riscaldato al di sopra della sua temperatura di decomposizione, esplode", "È il momento iniziale dell'esplosione di un ordigno", "È il momento finale dell'esplosione di un ordigno"],
        correctAnswer: "È un processo di natura termica dove il materiale che partecipa alla reazione, riscaldato al di sopra della sua temperatura di decomposizione, esplode"
    },
    {
        question: "SULLA SCENA DEL CRIMINE È POSSIBILE RILEVARE:",
        answers: ["Tracce volatili, morfologiche e di situazione", "Tracce aleatorie, morfologiche e chimiche", "Tracce fisiche matematiche e materiali", "Tracce personologiche, matematiche e materiali"],
        correctAnswer: "Tracce volatili, morfologiche e di situazione"
    },
    {
        question: "LA SOTTOPOSIZIONE DI UNA TRACCIA BIOLOGICA ALLA LUCE DIRETTA DEL SOLE:",
        answers: ["Può essere utile per accelerare l'essiccazione", "Nessuna delle precedenti risposte", "È tassativamente da evitare", "Non ha alcun effetto sulla traccia"],
        correctAnswer: "È tassativamente da evitare"
    },
    {
        question: "NEL CASO DI ORDIGNI INESPLOSI È OPPORTUNO:",
        answers: ["Rimuovere l'ordigno e portarlo in un luogo sicuro", "Sgomberare l'area e chiedere intervento dei Vigili del Fuoco", "Sgomberare area e chiedere intervento degli artificieri", "Avvicinarsi per esaminare l'ordigno da vicino"],
        correctAnswer: "Sgomberare area e chiedere intervento degli artificieri"
    },
    {
        question: "UN'ADEGUATA ANALISI DELLE TRACCE DI SANGUE PRESENTI SULLA SCENA DEL CRIMINE:",
        answers: ["Non ha alcuna rilevanza nel corroborare o confutare le dichiarazioni di un testimone", "Permette, tra le altre cose, di corroborare o confutare le dichiarazioni di un testimone", "È utile solo per identificare la presenza di sangue, senza alcun legame con le dichiarazioni dei testimoni", "Non fornisce alcun contributo alla verifica delle dichiarazioni di un testimone"],
        correctAnswer: "Permette, tra le altre cose, di corroborare o confutare le dichiarazioni di un testimone"
    },
    {
        question: "NEL RINVENIMENTO DI CADAVERE, LE FINALITÀ DELL'APPROCCIO CRIMINALISTICO SONO:",
        answers: ["L'identità del cadavere, le cause e l'epoca della sepoltura", "Nessuna delle precedenti", "L'identità del cadavere, le cause e l'epoca del decesso", "L'identità del cadavere, le cause e l'epoca della decomposizione"],
        correctAnswer: "L'identità del cadavere, le cause e l'epoca del decesso"
    },
    {
        question: "L'UTILIZZO DEI DISPOSITIVI DI PROTEZIONE INDIVIDUALE:",
        answers: ["È finalizzato esclusivamente ad evitare di contaminarsi con materiali infettivi presenti sulla scena del crimine", "Può essere molto utile per arginare il rischio di contaminazione primaria", "Può essere molto utile per arginare il rischio di contaminazione secondaria", "È consigliato solamente quando gli operatori devono entrare in un luogo contaminato da gas venefici"],
        correctAnswer: "Può essere molto utile per arginare il rischio di contaminazione primaria"
    },
    {
        question: "GLI ACCERTAMENTI ED I RILIEVI SULLO STATO DEI LUOGHI E DELLE COSE:",
        answers: ["Possono essere eseguiti solo ed esclusivamente da Ufficiali di PG", "Vengono eseguiti esclusivamente da Ufficiali di PG in possesso di specifica abilitazione", "Possono essere eseguiti solo da Agenti di PG", "Vengono eseguiti da Ufficiali di PG e, in caso di necessità ed urgenza, anche da Agenti di PG"],
        correctAnswer: "Vengono eseguiti da Ufficiali di PG e, in caso di necessità ed urgenza, anche da Agenti di PG"
    },
    {
        question: "NELLA FASE DEL REPERTAMENTO:",
        answers: ["È di primaria importanza separare i reperti riconducibili allo stesso caso tra di loro", "È fondamentale confezionare i reperti di stessa natura chimico fisica in buste di plastica", "È possibile confezionare congiuntamente i reperti riconducibili allo stesso caso", "È possibile confezionare congiuntamente i reperti della stessa natura chimica/fisica"],
        correctAnswer: "È di primaria importanza separare i reperti riconducibili allo stesso caso tra di loro"
    },
    {
        question: "L’IMPATTO DI UNA GOCCIA DI SANGUE SU UNA SUPERFICIE INCLINATA RISPETTO AL PIANO DI CADUTA:",
        answers: ["Genera macchie di forma ellissoidale, senza alcuna \"coda\" o \"lagrima\"", "Genera macchie di forma circolare, senza alcuna caratteristica particolare", "Genera macchie di forma ellissoidale, caratterizzate da una “coda” o “lagrima”, tanto più lunga quanto maggiore è l’angolo d’impatto", "Genera macchie di forma ellissoidale, caratterizzate da una \"coda\" o \"lagrima\", tanto più corta quanto maggiore è l'angolo d'impatto"],
        correctAnswer: "Genera macchie di forma ellissoidale, caratterizzate da una “coda” o “lagrima”, tanto più lunga quanto maggiore è l’angolo d’impatto"
    },
    {
        question: "NEL REPERTAMENTO DI TRACCE EMATICHE LIQUIDE, SI DEVE:",
        answers: ["Repertare con carta filtro e far asciugare", "Far asciugare la traccia mediante l'utilizzo di strumentazione idonea e repertare tramite busta", "Utilizzare un asciugacapelli a bassa potenza", "Far asciugare la traccia ed asportare"],
        correctAnswer: "Repertare con carta filtro e far asciugare"
    },
    {
        question: "L’IMPIEGO DEL “COMBUR TEST” È FINALIZZATO A COMPRENDERE SE LA TRACCIA ESAMINATA È COMPOSTA DA:",
        answers: ["Residuo dello sparo", "Carburante", "Sangue", "Sangue umano"],
        correctAnswer: "Sangue"
    },
    {
        question: "LE SIS DIPENDONO:",
        answers: ["Dal Comando Stazione Capoluogo", "Dai nuclei investigativi nei quali sono inseriti per l’impiego da RACIS per l’addestramento", "Dal RIS competente per territorio", "Dalla Compagnia che li impiega"],
        correctAnswer: "Dai nuclei investigativi nei quali sono inseriti per l’impiego da RACIS per l’addestramento"
    },
    {
        question: "LE ATTIVITÀ DI CUI ALL’ART. 354 CPP:",
        answers: ["Sono di carattere ripetibile", "Sono di carattere irripetibile", "Sono di carattere permanente", "Sono di carattere temporaneo"],
        correctAnswer: "Sono di carattere irripetibile"
    },
    {
        question: "NELLA FASE DEL PRIMO ACCESSO ALLA SCENA DEL CRIMINE LE PRIORITÀ RIGUARDANO:",
        answers: ["Questioni di incolumità del personale operante, questioni di soccorso sanitario e questioni di carattere investigativo", "Questioni di incolumità del personale operante, questioni di carattere investigativo e questioni di rapporti con i mass media", "Valutazioni fatte di volta in volta, in relazione alla singola scena del crimine", "Questioni di carattere investigativo, questioni di soccorso sanitario e questioni di incolumità del personale operante"],
        correctAnswer: "Questioni di incolumità del personale operante, questioni di soccorso sanitario e questioni di carattere investigativo"
    },
    {
        question: "QUAL È IL NOME DEL REGISTRO DELLE COSE SOTTOPOSTO A SEQUESTRO?",
        answers: ["TECL2", "TECL1", "OP/1", "OP/2"],
        correctAnswer: "OP/2"
    },
    {
        question: "SOTTO IL PROFILO DELLA CORRETTEZZA GIURIDICA, LA RIMOZIONE DEL CADAVERE SULLA SCENA DEL CRIMINE VIENE AUTORIZZATA:",
        answers: ["Proprietario del luogo", "Giudice", "Pubblico Ministero", "Comandante di Stazione"],
        correctAnswer: "Pubblico Ministero"
    },
    {
        question: "NEL REPERTARE UN CAPELLO DEVO:",
        answers: ["Metterlo dentro una bustina di plastica riscaldata", "Fissarlo per le estremità su supporto adesivo", "Non interessare le due estremità dello stesso", "Congelarlo"],
        correctAnswer: "Non interessare le due estremità dello stesso"
    },
    {
        question: "LE TRACCE DI LIQUIDO SEMINALE:",
        answers: ["Al buio reagiscono a luce ultravioletta con aloni di fluorescenza", "Al buio reagiscono a luce calda con aloni di fluorescenza", "Alla luce ultravioletta diventano visibili ma non fluorescenti", "Alla luce ultravioletta non reagiscono in alcun modo"],
        correctAnswer: "Al buio reagiscono a luce ultravioletta con aloni di fluorescenza"
    },
    {
        question: "LE MODALITÀ DEL REPERTAMENTO INFORMATICO:",
        answers: ["Sono stabilite in uno standard internazionale allo stato definito dalla ISO 27037", "Sono stabilite dalla Procura della Repubblica competente", "Sono stabilite dal Comando Generale, che determina i protocolli di acquisizione", "Sono stabilite da singolo operatore specializzato"],
        correctAnswer: "Sono stabilite in uno standard internazionale allo stato definito dalla ISO 27037"
    },
    {
        question: "LA FASE DELL’IRRIGIDIMENTO CADAVERICO:",
        answers: ["Non può essere mai risolta", "È una delle prime a comparire dopo il decesso", "È data dalla contaminazione dell'operatore", "Può far presentare problemi agli operatori"],
        correctAnswer: "È una delle prime a comparire dopo il decesso"
    },
    {
        question: "IL PRIMO INTERVENTO SULLA “SCENA DEL CRIMINE”:",
        answers: ["Rappresenta il primo anello della catena delle indagini scientifiche (primo intervento - sopralluogo/repertamento - laboratorio forense)", "Si conclude esclusivamente a seguito di autorizzazione da parte dell’AG", "Consente solo nei casi di urgenza di effettuare l'ispezione cadaverica", "Generalmente attuato dal personale preposto a servizi di controllo del territorio, è volto alla messa in sicurezza delle persone e dei luoghi ove e stato commesso un crimine, all'eventuale soccorso delle vittime e al congelamento dell'area di interesse"],
        correctAnswer: "Generalmente attuato dal personale preposto a servizi di controllo del territorio, è volto alla messa in sicurezza delle persone e dei luoghi ove e stato commesso un crimine, all'eventuale soccorso delle vittime e al congelamento dell'area di interesse"
    },
    {
        question: "I CASI CHE HANNO ORIGINARIAMENTE DEFINITO IL RAPPORTO TRA PROVA SCIENTIFICA E PROCESSO SONO:",
        answers: ["La decisione Brown vs. Board of Education del 1954 e la pronuncia Kumho Tire Co. Vs. Carmichael del 1999", "La decisione Gideon vs. Wainwright del 1963 e la pronuncia General Electric Co. Vs. Joiner del 1997", "La decisione Daubert vs. Merrel Dow Pharmaceuticals del 1923 e la pronuncia Frye vs. United States del 1993", "La decisione Frye vs. United States del 1923 e la pronuncia Daubert vs. Merrel Dow Pharmaceuticals del 1993"],
        correctAnswer: "La decisione Frye vs. United States del 1923 e la pronuncia Daubert vs. Merrel Dow Pharmaceuticals del 1993"
    },
    {
        question: "PER CONTAMINAZIONE SECONDARIA SI INTENDE:",
        answers: ["Inquinamento della scena con materiali, oggetti e tracce non compatibili con il crimine", "Contatto diretto o mediato tra vittima e sospettato nei medesimi locali", "Mancata pulizia degli strumenti, equipaggiamenti e accessori", "Inquinamento delle tracce, già presenti sulla scena, per trasferimento determinate da un maldestro approccio al sopralluogo"],
        correctAnswer: "Inquinamento delle tracce, già presenti sulla scena, per trasferimento determinate da un maldestro approccio al sopralluogo"
    },
    {
        question: "QUAL È LA DEFINIZIONE DI ORDIGNO ESPLOSIVO?",
        answers: ["Composti chimici che, con un idoneo stimolo esterno, sono in grado di generare una reazione chimica endotermica straordinariamente rapida", "Composti chimici che, con un idoneo stimolo esterno, sono in grado di generare una reazione chimica esotermica straordinariamente lenta", "Composti chimici che, con un idoneo stimolo esterno, sono in grado di generare una reazione chimica esotermica straordinariamente rapida", "Composti chimici che, con un idoneo stimolo interno, sono in grado di generare una reazione chimica endotermica straordinariamente rapida"],
        correctAnswer: "Composti chimici che, con un idoneo stimolo esterno, sono in grado di generare una reazione chimica esotermica straordinariamente rapida"
    },
    {
        question: "COME VIENE REPERTATA UNA SOSTANZA STUPEFACENTE?",
        answers: ["In base alla forma della sostanza", "In base alla natura della sostanza", "In base al tipo della sostanza", "In base al confezionamento della sostanza"],
        correctAnswer: "In base al confezionamento della sostanza"
    },
    {
        question: "IL RIGOR MORTIS È UN FENOMENO ABIOTICO CONSECUTIVO CHE VALUTA:",
        answers: ["Lo stato di rigidità cadaverica conseguente al decesso", "Nessuna delle precedenti", "La progressiva perdita di calore del corpo in relazione alla temperatura ambientale", "La formazione di macchie ipostatiche"],
        correctAnswer: "Lo stato di rigidità cadaverica conseguente al decesso"
    },
    {
        question: "PRIMA DI PROCEDERE AL REPERTAMENTO DI UN COMPUTER È NECESSARIO:",
        answers: ["Fare una danza rituale attorno al computer", "Inviare un messaggio di testo al proprietario del computer", "Fotografare schermo e componenti, descrivere stato, composizione, collegamenti e dati identificativi osservati", "Inserire un CD con musica classica"],
        correctAnswer: "Fotografare schermo e componenti, descrivere stato, composizione, collegamenti e dati identificativi osservati"
    },
    {
        question: "IL PROTOCOLLO DI ACCESSO ALLA POSTA ELETTRONICA POP3 (POST OFFICE PROTOCOL):",
        answers: ["Scarica le e-mail sul client locale cancellandole dal server", "Consente l'accesso alle e-mail da più dispositivi conservandole sul server", "Scarica le e-mail in locale e le conserva sul server", "Consente l'accesso alle e-mail a più utenti conservando le e-mail sul server"],
        correctAnswer: "Scarica le e-mail sul client locale cancellandole dal server"
    },
    {
        question: "DOVENDO OPERARE NELLA NECESSITÀ DI TOCCARE OGGETTI PRESENTI ALL'INTERNO DI UNA SCENA DEL CRIMINE:",
        answers: ["È opportuno adottare accorgimenti solo se il tempo a disposizione lo permette", "Non è necessario adottare alcun accorgimento per minimizzare potenziali contaminazioni", "È sufficiente lavarsi accuratamente le mani dopo aver toccato gli oggetti", "È sempre opportuno adottare accorgimenti utili a minimizzare potenziali contaminazioni"],
        correctAnswer: "È sempre opportuno adottare accorgimenti utili a minimizzare potenziali contaminazioni"
    },
    {
        question: "LA BANCA DATI DNA, CON LA RACCOLTA E LA CATALOGAZIONE DEI PROFILI GENETICI DEI GIÀ DETENUTI E DEGLI ARRESTATI, È ATTESTATA PRESSO:",
        answers: ["Il servizio per il Sistema Informativo Interforze della Direzione centrale della Polizia Criminale (DCPC)", "Il servizio di cooperazione internazionale del Ministero dell’Interno", "Europol e Interpol", "Il dipartimento dell’amministrazione penitenziaria del Ministero della Giustizia"],
        correctAnswer: "Il servizio per il Sistema Informativo Interforze della Direzione centrale della Polizia Criminale (DCPC)"
    },
    {
        question: "LE TRACCE SEMINALI SU TESSUTI O INDUMENTI:",
        answers: ["Previa asciugatura, possono essere confezionate in contenitori traspiranti", "Previa asciugatura, possono essere confezionate in contenitori ermetici", "Senza asciugatura, possono essere confezionate in contenitori traspiranti", "Senza asciugatura, possono essere confezionate in contenitori ermetici"],
        correctAnswer: "Previa asciugatura, possono essere confezionate in contenitori traspiranti"
    },
    {
        question: "NELL'ATTIVITÀ DI SOPRALLUOGO, IL REPERTAMENTO IN UN'AREA INTERESSATA DA UNA ESPLOSIONE DI UN ORDIGNO, È POSSIBILE RINVENIRE IL MAGGIOR NUMERO DI INFORMAZIONI RIGUARDO L'ESPLOSIVO UTILIZZATO:",
        answers: ["Fuori dal cratere", "In corrispondenza del cratere", "Nelle aree comprese tra il cratere ed i limiti della scena del crimine", "Nelle aree più lontane dal cratere"],
        correctAnswer: "In corrispondenza del cratere"
    },
    {
        question: "IL RILASCIO DELLA SCENA DEL CRIMINE VIENE AUTORIZZATO:",
        answers: ["Dal PM", "Dall’UPG responsabile del sopralluogo", "Dal Comandante di Compagnia", "Dal Comandante di Stazione"],
        correctAnswer: "Dal PM"
    },
    {
        question: "SECONDO LA GIURISPRUDENZA, I RILIEVI E GLI ACCERTAMENTI DI CUI ALL'ART. 354 CPP:",
        answers: ["Si differenziano in quanto i rilievi comportano sempre una rielaborazione critica dei dati", "Non si differenziano in base alla rielaborazione critica dei dati", "Si differenziano in quanto gli accertamenti non comportano mai una rielaborazione critica dei dati", "Si differenziano in quanto i rilievi non comportano una rielaborazione critica dei dati"],
        correctAnswer: "Si differenziano in quanto i rilievi non comportano una rielaborazione critica dei dati"
    },
    {
        question: "IN BASE AL SUBSTRATO SU CUI SONO STATE POSTE, LE IMPRONTE POSSONO ESSERE:",
        answers: ["Senza dimensioni o con infinite dimensioni", "Solo bidimensionali", "Unidimensionali o quadridimensionali", "Bidimensionali o tridimensionali"],
        correctAnswer: "Bidimensionali o tridimensionali"
    },
    {
        question: "TRA LE ATTIVITÀ QUE DEVONO ESSERE SVOLTE DAL PERSONALE CHE PER PRIMO INTERVIENE SULLA 'SCENA DEL CRIMINE RIENTRANO:",
        answers: ["L'escussione a sommarie informazioni (art. 351 CPP) e la perquisizione personale (art. 352 CPP) dei testimoni", "La ricerca ottica delle tracce latenti a mezzo di luci forensi", "Il tempestivo repertamento delle tracce biologiche che potrebbero solidificarsi", "Il rilevamento e la documentazione di eventuali tracce labili e/o elementi suscettibili di modificazioni (ad esempio odori, temperatura, ecc.)"],
        correctAnswer: "Il rilevamento e la documentazione di eventuali tracce labili e/o elementi suscettibili di modificazioni (ad esempio odori, temperatura, ecc.)"
    },
    {
        question: "L’ADOZIONE DI MISURE TECNICHE TESE AD ASSICURARE LA CONSERVAZIONE, LA CONFORMITÀ E IMMODIFICABILITÀ DI DATI ACQUISITI NEL CORSO DI ISPEZIONI, PERQUISIZIONI E SEQUESTRI DERIVA DA:",
        answers: ["Disposizioni normative nazionali in attuazione della convenzione europea sul cybercrime del 2001", "Prassi giurisprudenziale consolidata", "Disposizioni normative in attuazione del Codice in materia di protezione dei dati personali del 2003", "Prassi di polizia giudiziaria"],
        correctAnswer: "Disposizioni normative nazionali in attuazione della convenzione europea sul cybercrime del 2001"
    },
    {
        question: "LA CONSTATAZIONE DI TRACCE TEMPORANEE QUALI FUMO ODORI E TEMPERATURA:",
        answers: ["Verrà riportata oralmente al responsabile del sopralluogo che la includerà nel verbale di sopralluogo", "Deve essere fotografata con la tecnica prevista", "Deve essere documentata ad opera degli OPI in apposita annotazione di PG", "Dovrà essere repertata a mezzo dell’apposito kit di rilevamento"],
        correctAnswer: "Deve essere documentata ad opera degli OPI in apposita annotazione di PG"
    },
    {
        question: "I METODI DI RICERCA DELLE TRACCE BIOLOGICHE SULLA SCENA DEL CRIMINE, SONO :",
        answers: ["Ottici", "Solo ottici e chimici", "Ottici, fisici e chimici", "Solo fisici e chimici"],
        correctAnswer: "Ottici, fisici e chimici"
    },
    {
        question: "NEL CASO IN CUI, IN FASE DI PRIMO INTERVENTO, SIA NECESSARIO SPOSTARE OGGETTI PRESENTI SULLA SCENA DEL CRIMINE SI PROCEDE:",
        answers: ["Senza tenere traccia delle alterazioni apportate", "Dando atto nella relativa verbalizzazione di ogni alterazione apportata", "Senza verbalizzare alcuna alterazione apportata", "Nessuna delle precedenti risposte"],
        correctAnswer: "Dando atto nella relativa verbalizzazione di ogni alterazione apportata"
    },
    {
        question: "IL LIVOR MORTIS È UN FENOMENO ABIOTICO CONSECUTIVO CHE VALUTA:",
        answers: ["Nessuna delle precedenti", "Lo stato di rigidità cadaverica conseguente al decesso", "La progressiva perdita di calore del corpo in relazione alla temperatura ambientale", "La formazione di macchie ipostatiche"],
        correctAnswer: "La formazione di macchie ipostatiche"
    },
    {
        question: "LA RATIO GIURIDICA DEL PRIMO INTERVENTO SULLA SCENA DEL CRIMINE:",
        answers: ["È quella di assolvere ad un obbligo previsto dal Regolamento Generale dell'Arma dei Carabinieri", "Rappresenta un opzione di carattere operativo", "Non è espressamente prevista", "È prioritariamente rivolta a curare che le tracce e le cose pertinenti al reato siano conservate e che lo stato dei cose non venga mutato prima dell’intervento del PM"],
        correctAnswer: "È prioritariamente rivolta a curare che le tracce e le cose pertinenti al reato siano conservate e che lo stato dei cose non venga mutato prima dell’intervento del PM"
    },
    {
        question: "NELLA CINTURAZIONE DELLA SCENA DEL CRIMINE GLI OPERATORI DEVONO REALIZZARE UN CENTRO DI COMANDO:",
        answers: ["Dove ricevere i giornalisti", "Deve consentire l’accesso, previa identificazione, solo al personale autorizzato e munito di DPI", "Da collocare esternamente alla prima zona o in prossimità del margine esterno di questa", "Da collocare tra la prima e la seconda zona"],
        correctAnswer: "Da collocare esternamente alla prima zona o in prossimità del margine esterno di questa"
    },
    {
        question: "I RILIEVI SONO:",
        answers: ["Atti ricognitivi aventi carattere di necessità ed urgenza, diretti a fissare gli elementi della deliberazione", "Atti ricognitivi aventi carattere di discrezionalità, diretti a fissare gli elementi dell'accertamento", "Nessuna delle precedenti", "Atti ricognitivi aventi carattere di necessità ed urgenza, diretti a fissare gli elementi dell’accertamento"],
        correctAnswer: "Atti ricognitivi aventi carattere di necessità ed urgenza, diretti a fissare gli elementi dell’accertamento"
    },
    {
        question: "PER IMPRONTE PAPILLARI SI INTENDONO QUELLE:",
        answers: ["Solo palmari e digitali", "Solo plantari", "Solo digitali", "Digitali, palmari e plantari"],
        correctAnswer: "Digitali, palmari e plantari"
    },
    {
        question: "COSA È LA SCENA DEL CRIMINE?",
        answers: ["Qualsiasi luogo dove sia avvenuto un furto", "Qualsiasi luogo che può essere associato con la commissione di un reato", "Il rinvenimento di un cadavere", "Qualsiasi luogo che non può essere associato con la commissione di un reato"],
        correctAnswer: "Qualsiasi luogo che può essere associato con la commissione di un reato"
    },
    {
        question: "PER L'IDENTIFICAZIONE DI UNA TRACCIA EMATICA SULLA SCENA DEL CRIMINE, SONO CONSIDERATI PIÙ ATTENDIBILI:",
        answers: ["I test biochimici e biomolecolari (cd. presuntivi e test confermativi)", "I metodi fisici", "I metodi ottici", "Le luci spettrografiche (cd. luci forensi)"],
        correctAnswer: "I test biochimici e biomolecolari (cd. presuntivi e test confermativi)"
    },
    {
        question: "CON IL TERMINE BLOODSTAIN PATTERN ANALYSIS CI SI RIFERISCE:",
        answers: ["Allo studio della morfologia, dimensioni, distribuzione e posizione delle macchie di sangue sulla scena del crimine", "All'analisi del DNA presente nelle tracce ematiche per identificare il soggetto", "Alla rilevazione delle impronte digitali sulle macchie di sangue", "Nessuna delle precedenti"],
        correctAnswer: "Allo studio della morfologia, dimensioni, distribuzione e posizione delle macchie di sangue sulla scena del crimine"
    },
    {
        question: "IN OCCASIONE DEL PRIMO INTERVENTO:",
        answers: ["Tutto deve essere necessariamente improntato alla massima improvvisazione", "È necessario che i militari raggiungono il posto in sicurezza valutando tutti i possibili rischi", "I militari giungono sul posto e limitatamente raccolgono le tracce", "È di estrema importanza accendere i lampeggianti e la sirena bitonale"],
        correctAnswer: "È necessario che i militari raggiungono il posto in sicurezza valutando tutti i possibili rischi"
    },
    {
        question: "L'ACCESSO ALLA BANCA DATI DEL DNA È CONSENTITO:",
        answers: ["Essenzialmente a chiunque, trattandosi di una banca dati pubblica", "All'AG, ma non alla PG", "Alla PG, ma non all'AG", "Alla PG e all’AG"],
        correctAnswer: "Alla PG e all’AG"
    },
    {
        question: "L'ATTIVITÀ DI CONSERVAZIONE:",
        answers: ["È limitata all'attività di carattere burocratico riferita agli atti del carteggio", "È riferibile alle tracce al corpo di reato ai luoghi ove il delitto è stato commesso", "È assolutamente libera da vincoli giuridici", "Non è riferibile alle tracce al corpo di reato ai luoghi ove il delitto è stato commesso"],
        correctAnswer: "È riferibile alle tracce al corpo di reato ai luoghi ove il delitto è stato commesso"
    },
    {
        question: "COS'È IL SOPRALLUOGO?",
        answers: ["La fase che avviene durante le indagini preliminari per individuare l'autore del reato", "Tutto ciò che viene posto in essere per congelare la scena del crimine", "Ai sensi dell’art 354 CPP, il sopralluogo è un atto di PG", "È quel complesso di attività poste in essere dalla PG, dal consulente tecnico del PM e della difesa, aventi natura tecnica e scientifica, esperibili sul luogo del delitto sia nell’immediatezza della scoperta del fatto di reato che nell’esecuzione di eventuali successivi accessi, finalizzate ad isolare, descrivere ed analizzare lo scenario, nonché ricercare esaminare e repertare le tracce ivi rinvenute"],
        correctAnswer: "È quel complesso di attività poste in essere dalla PG, dal consulente tecnico del PM e della difesa, aventi natura tecnica e scientifica, esperibili sul luogo del delitto sia nell’immediatezza della scoperta del fatto di reato che nell’esecuzione di eventuali successivi accessi, finalizzate ad isolare, descrivere ed analizzare lo scenario, nonché ricercare esaminare e repertare le tracce ivi rinvenute"
    },
    {
        question: "LE CARATTERISTICHE DI CLASSE RIFERITE AD UN BOSSOLO SONO:",
        answers: ["Il numero, l'andamento e l'ampiezza dei segni di estrazione ed espulsione del proiettile", "I segni lasciati dalla canna della pistola sul bossolo", "Il numero, l'andamento e l'ampiezza delle rigature trovate sul proiettile", "Segni lasciati dalla percussione, estrazione, espulsione e dal piano di culatta sul bossolo"],
        correctAnswer: "Segni lasciati dalla percussione, estrazione, espulsione e dal piano di culatta sul bossolo"
    },
    {
        question: "SE, ALL'ATTO DELL'INTERVENTO, IL PERSONALE PARAMEDICO O MEDICO È GIÀ SUL POSTO:",
        answers: ["Occorre determinare se sia sta modificata la posizione del corpo o di altri oggetti", "Occorre determinare se sia stato modificato il protocollo di emergenza", "Occorre determinare se sia stato modificato il piano di assistenza sanitaria", "Occorre determinare se sia stato modificato il tipo di intervento medico"],
        correctAnswer: "Occorre determinare se sia sta modificata la posizione del corpo o di altri oggetti"
    },
    {
        question: "AL FINE DI DESCRIVERE COMPIUTAMENTE UNA TRACCIA DI SANGUE, È NECESSARIO INDIVIDUARE E DESCRIVERNE:",
        answers: ["Dimensione, forma, distribuzione e concentrazione", "Colore, odore e consistenza", "Dimensione, forma e distribuzione", "Nessuna delle precedenti"],
        correctAnswer: "Dimensione, forma, distribuzione e concentrazione"
    },
    {
        question: "LA PRELIMINARE INDIVIDUAZIONE “SCENA DEL CRIMINE”, INTESA COME AREA DI INTERESSE DA PROTEGGERE, ANCHE MEDIANTE CINTURAZIONE RIENTRA TRA I COMPITI DEL PERSONALE:",
        answers: ["Addetto al sopralluogo", "Responsabile del sopralluogo", "Responsabile delle indagini", "Di primo intervento sulla \"scena del crimine”"],
        correctAnswer: "Di primo intervento sulla \"scena del crimine”"
    },
    {
        question: "TRA LE TECNICHE OTTICHE DI RICERCA DI UNA TRACCIA C’È:",
        answers: ["La tecnica della luce polarizzata e quella della luce fluorescente", "La tecnica della luce radente e quella della luce riflessa", "La tecnica della luce diffusa e quella della luce trasmessa", "La tecnica della luce ultravioletta e quella della luce infrarossa"],
        correctAnswer: "La tecnica della luce radente e quella della luce riflessa"
    },
    {
        question: "IN CASO DI SINISTRO STRADALE, SU COSA SI BASA IL REPERTAMENTO MERCEOLOGICO:",
        answers: ["Tracce di pneumatico, residui di vernice e frammenti plastici", "Tracce di pneumatico, freni e frammenti plastici", "Su videoriprese, frammenti plastici e freni", "Frammenti plastici, residui di vernice e tessuti"],
        correctAnswer: "Tracce di pneumatico, residui di vernice e frammenti plastici"
    },
    {
        question: "L'IMPIEGO DELL'EXAGON OBTI TEST È FINALIZZATO A COMPRENDERE SE LA TRACCIA ESAMINATA È COMPOSTA DAL:",
        answers: ["Carburante", "Sangue", "Sangue umano", "Residui dello sparo"],
        correctAnswer: "Sangue umano"
    },
    {
        question: "LE AREE IN CUI SI DIVIDE LA SCENA DEL CRIMINE AL MOMENTO DEL SOPRALLUOGO SONO:",
        answers: ["Zona di cratere o baricentro, area di comando delle operazioni e zona di pertinenza dei media", "Epicentro, baricentro e incentro", "Zona di cratere o epicentro, area di comando delle operazioni e zona di pertinenza dei media", "Zona di interesse investigativo, zona di pertinenza dell’AG, zona dedicata ai media e zona di passaggio per le autorità"],
        correctAnswer: "Zona di cratere o epicentro, area di comando delle operazioni e zona di pertinenza dei media"
    },
    {
        question: "LE ATTIVITÀ DI PRIMO INTERVENTO SONO GIURIDICAMENTE RICONDUCIBILI:",
        answers: ["Esclusivamente all’art. 55 CPP", "Al dettato normativo di cui all’art. 351 CPP", "All’art. 300 CPP, trattandosi di accertamenti tecnici irripetibili", "Alla previsione di cui all’art. 354 co. 1 CPP"],
        correctAnswer: "Alla previsione di cui all’art. 354 co. 1 CPP"
    },
    {
        question: "LA FUNZIONE ASSICURATIVA DELL'ATTIVITÀ DELLA PG CONSISTE NEL:",
        answers: ["Alterare la fonte di prova e nell'occultamento degli autori del reato", "Distruggere la fonte di prova e nella ricerca degli autori del reato", "Creare la fonte di prova e nell'incolpare innocenti del reato", "Assicurare la fonte di prova e nella ricerca degli autori del reato"],
        correctAnswer: "Assicurare la fonte di prova e nella ricerca degli autori del reato"
    },
    {
        question: "SULLA SCENA DEL CRIMINE OGNI MOVIMENTO ED OGNI CONTATTO:",
        answers: ["Deve essere improntato ad improvvisazione", "Non deve essere esclusivamente finalizzato ad un'attività indispensabile", "Deve essere condiviso con il PM", "Deve essere finalizzato ad un'attività ritenuta indispensabile"],
        correctAnswer: "Deve essere finalizzato ad un'attività ritenuta indispensabile"
    },
    {
        question: "LA BALISTICA SI OCCUPA DI:",
        answers: ["Studiare il moto del proiettile lanciato nell'acqua", "Studiare il moto del proiettile lanciato sulla Terra", "Studiare il moto del proiettile lanciato nell'aria", "Studiare il moto del proiettile lanciato nello spazio"],
        correctAnswer: "Studiare il moto del proiettile lanciato nello spazio"
    },
    {
        question: "L'ATTIVITÀ OF CONSERVAZIONE:",
        answers: ["È assolutamente libera da vincoli giuridici", "È riferibile alle tracce al corpo di reato ai luoghi ove il delitto è stato commesso", "È limitata all'attività di carattere burocratico riferita agli atti del carteggio", "Non è riferibile alle tracce al corpo di reato ai luoghi ove il delitto è stato commesso"],
        correctAnswer: "È riferibile alle tracce al corpo di reato ai luoghi ove il delitto è stato commesso"
    },
    {
        question: "NELL'AMBITO DI UN ACCERTAMENTO URGENTE, IL CAST-OFF:",
        answers: ["Fornisce informazioni solo sulla posizione della vittima, non sull'assalitore o sulla mano usata", "È irrilevante per la determinazione della reciproca posizione vittima-assalitore o della mano usata", "Non fornisce informazioni rilevanti sulla reciproca posizione vittima-assalitore o sulla mano usata", "Rappresenta un pattern estremamente importante nella determinazione della reciproca posizione vittima – assalitore, nonché della mano usata"],
        correctAnswer: "Rappresenta un pattern estremamente importante nella determinazione della reciproca posizione vittima – assalitore, nonché della mano usata"
    },
    {
        question: "NELLA CATENA DI CUSTODIA DEI REPERTI, TRA LE REGOLE GENERALI DA ADOTTARE TROVIAMO:",
        answers: ["La separazione di reperti e campioni di riferimento", "L’utilizzo dello stesso imballaggio per reperti e campioni di riferimento facenti capo allo stesso caso", "L’utilizzo dello stesso imballaggio per reperti e campioni di riferimento facenti capo alla stessa tipologia merceologica", "L’utilizzo di materiale da imballaggio reperito sul posto"],
        correctAnswer: "La separazione di reperti e campioni di riferimento"
    },
    {
        question: "NELLA SENTENZA DAUBERT VS MERREL DOW PHARMACEUTICALS VENIVA POSTO L'ACCENTO:",
        answers: ["Sulla definizione di sostanze psicotrope", "Sulla definizione dei parametri di ricerca dei mezzi di prova", "Sull'accettazione generale della prova scientifica", "Criteri di ammissione della testimonianza esperta"],
        correctAnswer: "Criteri di ammissione della testimonianza esperta"
    },
    {
        question: "LE TRACCE DA TRASFERIMENTO SONO:",
        answers: ["Sempre determinate dal contatto casuale di un oggetto con un altro", "Sempre determinate dal contatto di un oggetto con un altro", "Sempre determinate dall'assenza di contatto di un oggetto con un altro", "Sempre determinate dal contatto intenzionale di un oggetto con un altro"],
        correctAnswer: "Sempre determinate dal contatto di un oggetto con un altro"
    },
    {
        question: "IN MERITO ALL'ORGANIZZAZIONE E GESTIONE DEL SOPRALLUOGO TECNICO, COLUI CHE TRACCIA IL PERIMETRO DELLA ZONA E GARANTISCE LA NECESSARIA PROTEZIONE È:",
        answers: ["Il Comandante di Compagnia", "Il PM", "Il responsabile dell'indagine", "Il responsabile del sopralluogo"],
        correctAnswer: "Il responsabile del sopralluogo"
    },
    {
        question: "COSA FA IL BOMB SCENE MANAGER?",
        answers: ["Gestisce e coordina attività ed interventi nel luogo dell’attentato", "Designato dal PM, identifica chi ha piazzato l'ordigno esplosivo", "Pianifica gli attentati terroristici", "È il responsabile di disinnescare gli ordigni inesplosi"],
        correctAnswer: "Gestisce e coordina attività ed interventi nel luogo dell’attentato"
    },
    {
        question: "DOPO QUANTO TEMPO VENGONO DISTRUTTI I CAMPIONI BIOLOGICI NON UTILIZZATI?",
        answers: ["2 anni", "4 anni", "8 anni", "6 anni"],
        correctAnswer: "8 anni"
    },
    {
        question: "IN CASO DI REPERTAMENTO DI SOSTANZE STUPEFACENTI DI NATURA VEGETALE:",
        answers: ["Se il prodotto è fresco va fatto riscaldare e conservato a bassa temperatura", "Se il prodotto è fresco va fatto seccare e conservato a bassa temperatura", "Se il prodotto è secco va inumidito e conservato a bassa temperatura", "Se il prodotto è secco va conservato in idonea busta di plastica e non sigillato"],
        correctAnswer: "Se il prodotto è fresco va fatto seccare e conservato a bassa temperatura"
    },
    {
        question: "QUALI INFORMAZIONI SONO DESUMIBILI ALLO STUB:",
        answers: ["La presenza di residui organici e la composizione elementare di tracce inorganiche raccolte su determinate superfici", "Presenza di residui dello sparo e composizione elementare di tracce inorganiche raccolte su determinate superfici", "L'assenza di residui dello sparo e la composizione elementare di tracce organiche raccolte su determinate superfici", "La presenza di residui dello sparo e la composizione molecolare di tracce inorganiche raccolte su determinate superfici"],
        correctAnswer: "Presenza di residui dello sparo e composizione elementare di tracce inorganiche raccolte su determinate superfici"
    },
    {
        question: "PER L’EVIDENZIAZIONE DI IMPRONTE LATENTI, GLI OPERATORI APPLICANO IN ALTERNATIVA E/O CONGIUNTAMENTE LE SEGUENTI TECNICHE:",
        answers: ["Ottiche, fisiche e chimiche", "Ottiche, visive e fluorescenti", "Chimiche, positive e luminescenti", "Fisiche, ottiche e positive"],
        correctAnswer: "Ottiche, fisiche e chimiche"
    },
    {
        question: "L’IMPRONTA LASCIATA SU UN SUBSTRATO PUÒ ESSERE CONDIZIONATA:",
        answers: ["Solo dal substrato e dall’ambiente", "Solo dall'ambiente", "Solo dall'umidità dell’aria", "Dall’ambiente, dal substrato e dalle condizioni del soggetto"],
        correctAnswer: "Dall’ambiente, dal substrato e dalle condizioni del soggetto"
    },
    {
        question: "NELLA FOTOGRAFIA GIUDIZIARIA LE IMMAGINI ACQUISITE DEVONO ESSERE:",
        answers: ["In formato RAW", "Solo in formato JPG in quanto garantisce ottima qualità di riproduzione insieme ad un contenuto ingombro di memoria", "In formato PDF, allo scopo di impedirne la modificazione accidentale o colpevole", "In formato TIF"],
        correctAnswer: "In formato RAW"
    },
    {
        question: "TRA I SOGGETTI DA SOTTOPORRE A PRELIEVO DI CAMPIONE BIOLOGICO DI CUI ALL’ART 9 DELLA LEGGE ISTITUTIVA DELLA BANCA DATI NAZIONALE DEL DNA NON FIGURANO:",
        answers: ["Gli arrestati in flagranza", "I sottoposti a misura di prevenzione", "I soggetti al qual è applicata una misura di sicurezza detentiva", "I fermati perché indiziati di delitto"],
        correctAnswer: "I sottoposti a misura di prevenzione"
    },
    {
        question: "IL SOPRALLUOGO DEL MEDICO LEGALE È:",
        answers: ["Parte integrante del sopralluogo giudiziario e si svolge in sinergia con gli operatori di PG", "Alternativo al sopralluogo giudiziario", "Autonomo e successivo al sopralluogo giudiziario", "Precedente al sopralluogo giudiziario"],
        correctAnswer: "Parte integrante del sopralluogo giudiziario e si svolge in sinergia con gli operatori di PG"
    },
    {
        question: "LE TRACCE MORFOLOGICHE POSSONO ESSERE:",
        answers: ["Visibili e latenti", "Nessuna delle risposte precedenti", "Solo visibili", "Solo latenti"],
        correctAnswer: "Visibili e latenti"
    },
    {
        question: "L’ANALISI DELLA GENUINITÀ DI UN DOCUMENTO PUÒ ESSERE EFFETTUATA DA:",
        answers: ["Il laboratorio di Grafica del RIS", "Il laboratorio di Grafica del ROS", "Un perito calligrafico privato", "Un laboratorio di analisi chimiche"],
        correctAnswer: "Il laboratorio di Grafica del RIS"
    },
    {
        question: "L’ARRIVO SULLA SCENA DEL CRIMINE È CARATTERIZZATO DA UNA PRIMA FASE IN CUI I MILITARI:",
        answers: ["Si avvicinano al luogo di sicurezza, cercando di valutare ogni profilo di rischio con le necessarie cautele per garantire la loro stessa incolumità e prendendo nota dell’ora esatta dell’arrivo sulla scena", "Cinturano la zona provvedendo alla cd. cristallizzazione della scena del crimine, osservano con attenzione l’area per constatare i fatti, facendo un rapido apprezzamento e acquisendo informazioni immediatamente utili alle indagini", "Prestano immediato soccorso alle eventuali persone ferite nella considerazione che il soccorso delle vittime prevale rispetto alle esigenze investigative", "Assumono a sommarie informazione le persone informate"],
        correctAnswer: "Si avvicinano al luogo di sicurezza, cercando di valutare ogni profilo di rischio con le necessarie cautele per garantire la loro stessa incolumità e prendendo nota dell’ora esatta dell’arrivo sulla scena"
    },
    {
        question: "QUALI INFORMAZIONI SONO DESUMIBILI DAL REPERTAMENTO DI UN BOSSOLO?",
        answers: ["Modello arma impiegata, natura merceologica del munizionamento impiegato e esami micro comparativi per identificazione o esclusione", "Effetti conseguenti l'impatto del proiettile sul cadavere", "Modello dell'arma impiegata, natura merceologica del munizionamento impiegato e traiettoria del proiettile nello spazio", "Qualità organolettiche dell'arma e del munizionamento"],
        correctAnswer: "Modello arma impiegata, natura merceologica del munizionamento impiegato e esami micro comparativi per identificazione o esclusione"
    },
    {
        question: "LE TECNICHE DI “LAVAGGIO E TAMPONAMENTO” DELLE TRACCE DI ESPLOSIVO COMBUSTO PREVEDONO:",
        answers: ["L'utilizzo di tamponature con detergenti e disinfettanti", "L'utilizzo di tamponature con solventi organici e inorganici", "L'utilizzo di tamponature con soluzioni acide e basiche", "L’utilizzo di tamponature con acqua distillata ed acetone"],
        correctAnswer: "L’utilizzo di tamponature con acqua distillata ed acetone"
    },
    {
        question: "IL REPARTO DI DATTILOSCOPIA PREVENTIVA SI OCCUPA DELLA:",
        answers: ["Comparazione giudiziaria delle impronte ignote con quelle detenute presso l’AFIS", "Archiviazione informazioni IBIS", "Archiviazione dei cartellini foto-segnaletici nel sistema AFIS", "Raccolta biologica preventiva per l’identificazione personale"],
        correctAnswer: "Comparazione giudiziaria delle impronte ignote con quelle detenute presso l’AFIS"
    },
    {
        question: "NEL CASO DI RINVENIMENTO DI INGENTI QUANTITATIVI DI COCAINA?",
        answers: ["Si procede alla sola pesatura ed immediata distruzione dello stupefacente", "Si proceda al sequestro dell'intero quantitativo sottoponendo il campionamento al fine delle successive analisi del laboratorio", "Le operazioni di pesatura della sostanza lorda dove vanno avvenire presso enti certificativi statali", "Tutto lo stupefacente dovrà essere recapitato presso il laboratorio di analisi RISS/LASS per le operazioni di campionamento"],
        correctAnswer: "Si proceda al sequestro dell'intero quantitativo sottoponendo il campionamento al fine delle successive analisi del laboratorio"
    },
    {
        question: "IL NASTRO ADESIVO UTILIZZATO DA UN MALVIVENTE PER IMBAVAGLIARE LA VITTIMA DI UNA RAPINA IN ABITAZIONE, NEL CORSO DELLA QUALE NON SONO STATE USATE ARMI DA FUOCO, A QUALI ACCERTAMENTI DI LABORATORIO LO SOTTOPORRESTI:",
        answers: ["Accertamenti biologici, dattiloscopia e merceologici", "Accertamenti biologici, dattiloscopici e balistici", "Accertamenti biologici, grafici e chimici", "Accertamenti biologici, dattiloscopici e tecnologici informatici"],
        correctAnswer: "Accertamenti biologici, dattiloscopia e merceologici"
    },
    {
        question: "NELLA FASE DI PRIMO INTERVENTO SARÀ NECESSARIO GARANTIRE:",
        answers: ["Prima di ogni altra cosa l’afflusso dei giornalisti e del magistrato", "In primis l’afflusso dei superiori e del magistrato", "Innanzitutto l’incolumità degli operatori impegnati nella fase di primo accesso", "Prima di ogni altra cosa l’afflusso dei sanitari e del magistrato"],
        correctAnswer: "Innanzitutto l’incolumità degli operatori impegnati nella fase di primo accesso"
    },
    {
        question: "PARLANDO DI RILIEVI PLANIMETRICI, QUALE DELLE SEGUENTI AFFERMAZIONI NON È CORRETTA:",
        answers: ["Sono la proiezione ortogonale su un foglio dei punti rilevati sul terreno secondo una determinata scala di riduzione", "Consentono di indicare su un piano ortogonale i movimenti delle persone coinvolte", "Sono composti da uno schizzo planimetrico e da una planimetria in scala", "Sono costituiti dal fascicolo con le fotografie che documentano la scena del crimine"],
        correctAnswer: "Consentono di indicare su un piano ortogonale i movimenti delle persone coinvolte"
    },
    {
        question: "L’ANALISI MERCEOLOGICA È UN ACCERTAMENTO:",
        answers: ["Comparativo", "Alchemico", "Divinatorio", "Sensoriale"],
        correctAnswer: "Comparativo"
    },
    {
        question: "COS'È LA DETONAZIONE?",
        answers: ["È un meccanismo di trasformazione esplosiva che si propaga mediante la forza d’urto pressoria, dove il materiale che partecipa alla reazione, si decompone con grande rapidità attivando per impatto tutta la massa esplosiva", "È il momento iniziale dell'esplosione di un ordigno", "È il momento finale dell'esplosione di un ordigno", "È un processo di natura termica dove il materiale che partecipa alla reazione, riscaldato al di sopra della sua temperatura di decomposizione esplode"],
        correctAnswer: "È un meccanismo di trasformazione esplosiva che si propaga mediante la forza d’urto pressoria, dove il materiale che partecipa alla reazione, si decompone con grande rapidità attivando per impatto tutta la massa esplosiva"
    },
    {
        question: "LA BANCA DATI IBIS SERVE A:",
        answers: ["Svolgere attività di comparazione sui reperti balistici originali", "Acquisire immagini di bossoli e proiettili, utili ad una successiva attività di comparazione", "Acquisire immagini solo di proiettili per poi svolgere attività di comparazione", "Acquisire immagini solo di bossoli per poi svolgere attività di comparazione"],
        correctAnswer: "Acquisire immagini di bossoli e proiettili, utili ad una successiva attività di comparazione"
    },
    {
        question: "IL CONCETTO DEL TRIANGOLO DI INTERAZIONE:",
        answers: ["Consiste in un metodo utile alla conduzione di un rilievo planimetrico", "Consiste in un metodo di investigazione indiretta", "Consente di scegliere la procedura ideale per esaltare una impronta latente", "Consente di scegliere la procedura ideale per esaltare una impronta visibile"],
        correctAnswer: "Consente di scegliere la procedura ideale per esaltare una impronta latente"
    },
    {
        question: "IL REPERTAMENTO DI FORMAZIONI PILIFERE SI EFFETTUA:",
        answers: ["Fissandole con disgusto", "Fissandole con nastro adesivo su foglio di carta bianca", "Immergendole in acqua per la conservazione", "Bruciandole per analizzarne la composizione"],
        correctAnswer: "Fissandole con nastro adesivo su foglio di carta bianca"
    },
    {
        question: "OPERANDO ALL'INTERNO DI UNA SCENA DEL CRIMINE:",
        answers: ["È sempre necessario registrare la condizione di luci, elettrodomestici e sistemi informatici", "Documentare la condizione di luci, elettrodomestici e sistemi informatici del Comandante", "Non è mai necessario registrare le condizioni di luci, elettrodomestici e sistemi informatici", "La registrazione della condizione di luci, elettrodomestici e sistemi informatici è competenza del militati del RIS"],
        correctAnswer: "È sempre necessario registrare la condizione di luci, elettrodomestici e sistemi informatici"
    },
    {
        question: "QUAL È LA DEFINIZIONE DI CRIMINOLOGIA?",
        answers: ["Studio dell'origine criminale e delle ragioni storiche", "Disciplina che si occupa dello studio del reato in funzione dell’autore e della vittima. Inquadra la devianza in generale, quindi il soggetto deviante, il fenomeno sociale, la prevenzione e la repressione del fenomeno stesso", "Tecnica dell’investigazione criminale che studia il complesso dei mezzi, suggeriti dalle varie scienze, per l’accertamento del reato e la scoperta dell’autore ed alla quale appartiene una massa di nozioni di medicina legale, di dattiloscopia, di antropometria, di balistica giudiziaria, di grafometria, di tossicologia forense", "Scienza che studia le origini del reato e analizza il movente"],
        correctAnswer: "Disciplina che si occupa dello studio del reato in funzione dell’autore e della vittima. Inquadra la devianza in generale, quindi il soggetto deviante, il fenomeno sociale, la prevenzione e la repressione del fenomeno stesso"
    },
    {
        question: "UNA TRACCIA EMATICA UMIDA DEVE ESSERE:",
        answers: ["Asciugata prima di essere confezionata", "Asciugata dopo essere stata confezionata", "Riscaldata durante il confezionamento", "Riscaldata dopo essere stata repertata"],
        correctAnswer: "Asciugata prima di essere confezionata"
    },
    {
        question: "SECONDO I PROTOCOLLI DI SICUREZZA DELLA SCENA DEL CRIMINE NEL CORSO DEL PRIMO INTERVENTO:",
        answers: ["È sufficiente chiudere l’area senza accedervi", "È necessario video riprendere e fotografare la scena solo dopo ogni manipolazione", "È opportuno guidare i giornalisti secondo percorsi prestabiliti", "È necessario video riprende e fotografare la scena prima di ogni manipolazione"],
        correctAnswer: "È necessario video riprende e fotografare la scena prima di ogni manipolazione"
    },
    {
        question: "PER QUANTO TEMPO VENGONO CONSERVATI I PROFILI DEL DNA DI PERSONE DI CUI ALL'ART 9 DELLA LEGGE ISTITUTIVA DELLA BANCA DATI DNA?",
        answers: ["20 anni", "30 anni", "10 anni", "40 anni"],
        correctAnswer: "40 anni"
    },
    {
        question: "LA BANCA DATI NAZIONALE DEL DNA È STATA ISTITUITA IN SEGUITO:",
        answers: ["Al trattato di Prum", "Al trattato di Ginevra", "Al trattato di Locarno", "Al trattato di Lisbona"],
        correctAnswer: "Al trattato di Prum"
    },
    {
        question: "PER CIÒ QUE CONCERNE I RILIEVI PLANIMETRICI, I METODI DI MISURAZIONE UTILIZZABILI SONO I SEGUENTI:",
        answers: ["Coordinate equatoriali e trilaterazione", "Coordinate polari e cartesimale", "Coordinate polari e tripartizione", "Trilaterazione e ortogonale"],
        correctAnswer: "Trilaterazione e ortogonale"
    },
    {
        question: "TRA LE SUPERFICI POROSE POSSIAMO INCLUDERE:",
        answers: ["Vetro, carta e cartone", "Alcuni tessuti, cartone e legno trattato", "Carta, legno non trattato e cotone", "Legno trattato, alcuni tessuti e plastica"],
        correctAnswer: "Carta, legno non trattato e cotone"
    },
    {
        question: "UNA CORRETTA DOCUMENTAZIONE DELLA SCENA DEL CRIMINE:",
        answers: ["Deve essere effettuata ricorrendo a strumenti di registrazione video", "Avviene mediante una minuziosa descrizione di ogni singolo elemento presente", "Può essere svolta solo da reparti specializzati", "Si completa attraverso rilievi descrittivi, planimetrici e fotografici"],
        correctAnswer: "Si completa attraverso rilievi descrittivi, planimetrici e fotografici"
    },
    {
        question: "LA RICERCA DI “PERCORSI ALTERNATIVI” PER L'ACCESSO ALLA \"SCENA DEL CRIMINE” È PRINCIPALMENTE VOLTA A:",
        answers: ["Individuare la via di fuga dell'autore del crimine per le ricerche dello stesso", "Individuare l'area da cinturare per il congelamento della \"scena del crimine”", "Evitare di calpestare e quindi contaminare le aree ove verosimilmente potrebbero essere trovate tracce utilmente", "Impedire l'accesso del personale sanitario e di quello addetto al sopralluogo"],
        correctAnswer: "Evitare di calpestare e quindi contaminare le aree ove verosimilmente potrebbero essere trovate tracce utilmente"
    },
    {
        question: "IN CASO DI INCENDIO LE TRACCE QUE PIÙ PROBABILMENTE SI POSSONO CERCARE SULLA SCENA SONO:",
        answers: ["Solo tracce dell'innesco", "Tracce biologiche, tracce merceologiche e tracce ematiche", "Nessuna delle precedenti", "Le tracce dell’innesco, tracce dattiloscopiche e segni di effrazione"],
        correctAnswer: "Le tracce dell’innesco, tracce dattiloscopiche e segni di effrazione"
    },
    {
        question: "I LIVELLI DI REPERTAMENTO DI UN SISTEMA DIGITALE SONO:",
        answers: ["Il repertamento dell’oggetto fisico ed il repertamento logico dei dati/informazioni", "Nessuna delle precedenti risposte", "Il repertamento dell’oggetto fisico ed il repertamento dei dati/informazioni", "Il repertamento dell’oggetto fisico ed il repertamento del sistema operativo"],
        correctAnswer: "Il repertamento dell’oggetto fisico ed il repertamento logico dei dati/informazioni"
    },
    {
        question: "QUANDO IL SANGUE È SOTTOPOSTO AD UNA FORZA O AD UNA AZIONE MECCANICA:",
        answers: ["Ha come effetto una distribuzione casuale delle singole gocce", "Esso non fa registrare nessuna reazione, trattandosi di materiale liquido", "Ha come effetto una distribuzione ordinata delle singole gocce", "Ha come effetto una distribuzione ordinata, limitatamente ad alcune gocce"],
        correctAnswer: "Ha come effetto una distribuzione casuale delle singole gocce"
    },
    {
        question: "COME VENGONO CLASSIFICATE LE MACCHIE DI SANGUE?",
        answers: ["Non possono essere classificate", "A spruzzo e effusive", "Latenti, semi latenti e visibili", "Passive o per gravità, attive o a spruzzo (spatter) e alterate"],
        correctAnswer: "Passive o per gravità, attive o a spruzzo (spatter) e alterate"
    },
    {
        question: "LA CD. “PROFONDITÀ DI CAMPO” È DATA DAL:",
        answers: ["Diaframma", "Otturatore", "Esposimetro", "Qualità del sensore"],
        correctAnswer: "Diaframma"
    },
    {
        question: "NELL’EFFETTUAZIONE DI UN PRELIEVO FINALIZZATO ALLA RICERCA DEI RESIDUI DELLO SPARO, DEVO UTILIZZARE UNO SPECIFICO KIT:",
        answers: ["Solo in alcuni casi", "Si, sempre", "No, mai", "Solo se disponibile"],
        correctAnswer: "Si, sempre"
    },
    {
        question: "I MECCANISMI DI TRASFERIMENTO DELLE FIBRE SONO:",
        answers: ["Nessuna delle risposte precedenti", "Trasferimento tramite teletrasporto", "Trasferimento libero, per frizione e da contatto", "Trasferimento per frizione e contatto"],
        correctAnswer: "Trasferimento libero, per frizione e da contatto"
    },
    {
        question: "LE SCRITTURE LATENTI SONO:",
        answers: ["Segni grafici visibili ad occhio nudo sulla superficie di un oggetto", "--", "Segni grafici prodotti con l'utilizzo di strumenti meccanici come penne e matite", "Segni grafici prodotti per pressione o tramite l’uso di inchiostri particolari"],
        correctAnswer: "Segni grafici prodotti per pressione o tramite l’uso di inchiostri particolari"
    },
    {
        question: "NEL CONFEZIONAMENTO DI UN REPERTO:",
        answers: ["Non si deve indicare la pericolosità dello stesso", "Si devono adottare solo gli accorgimenti minimi, necessari a garantire la catena di custodia", "È sufficiente aver cura di scegliere un involucro adeguato", "È necessario tra le altre cose procedere a compilare dettagliatamente l’etichetta identificativa del plico"],
        correctAnswer: "È necessario tra le altre cose procedere a compilare dettagliatamente l’etichetta identificativa del plico"
    },
    {
        question: "PER CONTAMINAZIONE PRIMARIA SI INTENDE:",
        answers: ["Inquinamento delle tracce per trasferimento", "Contatto diretto o mediato tra vittima e sospettato nei medesimi locali", "Mancata pulizia degli strumenti, equipaggiamenti e accessori", "Inquinamento della scena con materiali, oggetti e tracce non compatibili con il crimine"],
        correctAnswer: "Inquinamento della scena con materiali, oggetti e tracce non compatibili con il crimine"
    },
    {
        question: "IL PRINCIPIO DELLA CAPILLARITÀ:",
        answers: ["È una misura della propensione del sangue a imbibire un indumento ed è il risultato delle interazioni fra le molecole del liquido e di un solido sulla loro superficie di separazione", "È relativo alla distribuzione dei Reparti dell'Arma sul territorio nazionale", "Ha attinenza con le operazioni di repertamento dei capelli e dei peli", "È correlato alla necessità di operare capillarmente nella fase di ricerca dei reperti sulla scena del crimine"],
        correctAnswer: "È una misura della propensione del sangue a imbibire un indumento ed è il risultato delle interazioni fra le molecole del liquido e di un solido sulla loro superficie di separazione"
    },
    {
        question: "IN ASSENZA DELL'UFFICIALE DI PG, SULLA SCENA DEL CRIMINE, IL SOPRALLUOGO:",
        answers: ["È consentito solo al PM in condizioni di necessità ed urgenza", "È consentito anche agli agenti di PG in condizioni di necessità ed urgenza", "È vietato anche agli agenti di PG in condizioni di necessità ed urgenza", "È consentito solo ai cittadini in condizioni di necessità ed urgenza"],
        correctAnswer: "È consentito anche agli agenti di PG in condizioni di necessità ed urgenza"
    },
    {
        question: "LE FASI DEL SOPRALLUOGO SONO:",
        answers: ["Orientamento ed ipotesi temporanea, incontro con gli organi di informazione, sviluppo delle attività di ricerca e conclusione delle attività", "Orientamento ed ipotesi temporanea, preparazione, sviluppo delle attività di ricerca e conclusione delle attività", "Incontro con la stampa, orientamento ed ipotesi temporanea, preparazione, sviluppo delle attività di ricerca e conclusione delle attività", "Orientamento ed ipotesi temporanea, preparazione, sviluppo delle attività di ricerca, conclusione delle attività e incontro con la stampa"],
        correctAnswer: "Orientamento ed ipotesi temporanea, preparazione, sviluppo delle attività di ricerca e conclusione delle attività"
    },
    {
        question: "DOPO QUANTO TEMPO IL CADAVERE RAGGIUNGE LA TEMPERATURA AMBIENTALE?",
        answers: ["18 ore", "12 ore", "6 ore", "24 ore"],
        correctAnswer: "24 ore"
    },
    {
        question: "SULLA SCENA DEL CRIMINE, UNA TRACCIA EMATICA, SI PUÒ PRESENTARE IN FORMA:",
        answers: ["Liquida, gelatinosa e gassosa", "Liquida, semiliquida o essiccata", "Gassosa, liquida e solida", "Liquida, cristallina e polverosa"],
        correctAnswer: "Liquida, semiliquida o essiccata"
    },
    {
        question: "NEL REPERTAMENTO DI ARMI, TROVATE IMMERSE IN ACQUE O LIQUIDI, SI DEVE:",
        answers: ["Utilizzare un asciugacapelli a bassa potenza", "Lasciare asciugare l'arma in condizioni naturali senza l'intervento di alcun agente esterno", "Far asciugare l'arma appoggiandola sopra al radiatore di una stanza", "Far asciugare l'arma mediante l'impiego di speciali forni in dotazione a tutte le stazioni carabinieri"],
        correctAnswer: "Lasciare asciugare l'arma in condizioni naturali senza l'intervento di alcun agente esterno"
    },
    {
        question: "LE TRACCE DI SITUAZIONE INDICANO:",
        answers: ["Lo stato delle cose in relazione all’ambiente circostante", "Lo stato delle cose in relazione all'ambiente immaginario", "Lo stato delle cose in relazione all'ambiente precedente", "Lo stato delle cose in relazione all'ambiente futuro"],
        correctAnswer: "Lo stato delle cose in relazione all’ambiente circostante"
    },
    {
        question: "DOVENDO RILEVARE UN'EFFRAZIONE PRESENTE SULLA SCENA DEL CRIMINE:",
        answers: ["Questa va fotografata e descritta solo se ritenuto necessario, senza alcun obiettivo di identificazione dello strumento", "Questa non va né fotografata né descritta, in quanto non rilevante ai fini investigativi", "Questa va fotografata e descritta solo parzialmente, senza alcun obiettivo di identificazione dello strumento", "Questa va sempre fotografata e descritta nella sua totalità, allo scopo di risalire all’identificazione dello strumento che l'ha prodotta"],
        correctAnswer: "Questa va sempre fotografata e descritta nella sua totalità, allo scopo di risalire all’identificazione dello strumento che l'ha prodotta"
    },
    {
        question: "QUALI SONO I RIFERIMENTI NORMATIVI DELLE ATTIVITÀ DI PRIMO INTERVENTO?",
        answers: ["Accordi di Schengen e codice di procedura penale", "COM e Turom", "Codice penale e Turom", "Codice di procedura penale e circolari dell’Arma dei Carabinieri"],
        correctAnswer: "Codice di procedura penale e circolari dell’Arma dei Carabinieri"
    },
    {
        question: "NEL DESCRIVERE IL CADAVERE, SUL VERBALE DI SOPRALLUOGO, È:",
        answers: ["Necessario riportare le proprie valutazioni sulla causa del decesso", "Necessario distinguere l'osservazione del cadavere nella posizione rilevata da quella successiva al suo spostamento/rimozione", "Necessaria esclusivamente l'osservazione della posizione rilevata", "Vietato descrivere il cadavere"],
        correctAnswer: "Necessario distinguere l'osservazione del cadavere nella posizione rilevata da quella successiva al suo spostamento/rimozione"
    },
    {
        question: "AI SENSI DELLA LEGGE 85/2009 SI DEFINISCE CAMPIONE BIOLOGICO:",
        answers: ["Il materiale biologico acquisito sulla scena di un delitto o comunque di cose pertinenti al reato", "La quantità di sostanza biologica prelevata da un reperto acquisito sulla scena del crimine", "La quantità di sostanza biologica prelevata sulla persona sottoposta a tipizzazione del profilo del DNA", "Il materiale biologico acquisito all'interno dell'abitazione dell'indagato nell'immediatezza del fatto"],
        correctAnswer: "La quantità di sostanza biologica prelevata sulla persona sottoposta a tipizzazione del profilo del DNA"
    },
    {
        question: "LA COPIA FORENSE DI UNA MEMORIA DI MASSA SI ESEGUE:",
        answers: ["Attraverso la cancellazione dei tools forensi", "Attraverso specifici tools forensi", "Attraverso qualsiasi software di clonazione", "Attraverso il semplice copia/incolla dei file"],
        correctAnswer: "Attraverso specifici tools forensi"
    },
    {
        question: "IL REPARTO DI DATTILOSCOPIA PREVENTIVA SI OCCUPA DELLA:",
        answers: ["Raccolta biologica preventiva per l’identificazione personale", "Archiviazione dei cartellini foto segnaletici nel sistema AFIS", "Archiviazione informazioni IBIS", "Comparazione giudiziaria delle impronte ignote con quelle detenute presso l’AFIS"],
        correctAnswer: "Comparazione giudiziaria delle impronte ignote con quelle detenute presso l’AFIS"
    },
    {
        question: "QUAL È LA DEFINIZIONE DI VAPORE?",
        answers: ["Rapida trasformazione di sostanze solide, liquido o gassose in acqua", "sbagliata", "Lenta trasformazione di sostanze solide, liquido o gassose in vapore", "Rapida trasformazione di sostanze solide, liquidi o gassose in vapore"],
        correctAnswer: "Rapida trasformazione di sostanze solide, liquidi o gassose in vapore"
    }
];

window.crim1Data = crim1Data;