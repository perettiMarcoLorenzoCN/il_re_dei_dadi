# Gruppo
    [1. Naccarato Matteo
    2.Nicosia Francesco
    3.Pano Nicolò
    4.Peretti Marco Lorenzo]

# Epica

[Applicazione che simula il gioco da tavolo "Il re dei dadi"]

## Story login (Priorità : 5)

[                                                                                                                               Pomodori
    - Login as a guest = tramite pulsante non si fa l'accesso e si ha un ID casuale                                                 1
    - Login with google = Tramite pulsante si accede o registro con account google                                                  4
    - Login with our account = Tramite pulsante si apre una finestra e si seleziona con accountIlReDeiDadi (accedi o registrati)    1
    - Login Discord = tramite pulsante si apre una finestra e si seleziona con account Discord                                      2
    - Form login = parte grafica per l'interfaccia di login                                                                         3
    - Form registrazione = parte grafica per l'interfaccia di registrazione                                                         3

]

## Story menù partita (Priorità : 1)

[                                                                                                                               Pomodori   
    - menù impostazioni = Interfaccia che si avvia quando il giocatore preme su il pulsante "gioca partita" 
    e permette di scegliere le impostazioni della partita (N.giocatori/n.cpu/modalità partita)                                      1
    - tipologia partità = l'utente seleziona la modalità di gioco (Singleplayer, Multiplayer online, locale)                        1
    - pulsante per la condivisione dell'ID partita = A video appare un numero identificativo della partita 
    che può essere condiviso con amici                                                                                              1
    - pulsante cerca partita = Finestra in cui inserire il codice ID ricevuto da un amico                                           1
    - pulsante carica partita = Permette di riprendere una partita precedentemente cominciata                                       1
]

## Story Tutorial(Priorità : 8)

[                                                                                                                               Pomodori
    - Video tutorial iniziale (+ accessibili nelle impostazioni) = Video descrittivo in cui si spiegano le regole di gioco          4
    - Manuale istruzione accessibile durante la partita = tramite pulsante l'utente riesce ad accedere a tutte le regole del gioco  8
    - Pulsante skip per il Video = Permette di saltare il video tutorial se si sa già giocare                                       1
]

## Story partita (Priorità : 0)
[                                                                                                                               Pomodori   
    - Mescolare le carte = parte grafica che mostra il mescolamento di un mazzo                                                     2
    - Lancio dei dadi = parte grafica che mostra il lancio dei dadi e il risultato                                                  2
    - Pesca = parte grafica che trasferisce la prima carta dal mazzo alla mano                                                      2
    - Preparazione del tavolo = parte grafica in cui viene preparato il tavolo da gioco                                             2
    - Scelta carta dalla mano = Con il cursore l'utente sceglie la carta che dopo il click verrà illuminata                         1
    - pulsante ricomincia partita = premendo esc appare una piccola finestra che contiene un pulsante per ricominciare la partita   1
    - Salva ed esci = premendo esc appare una piccola finestra che contiene un pulsante per salvare e uscire dalla partita          4         
    - Esci = premendo esc appare una piccola finestra che contiene un pulsante per uscire dalla partita perdendo automaticamente    2
    - Messaggio vittoria/sconfitta = Pop-up che indica il nome del giocatore che ha vinto                                           2
    - Limite turno = tempo massimo di giocata per turno, alla fine di questo timer il giocatore pescherà automaticamente            2
    - Menù per tornare alla home o ricominciare una nuova partita = menù che compare premendo esc                                                                  2
]

## Story singleplayer (Priorità : 80)

[                                                                                                                               Pomodori   
    - Modalità facile = modalità in cui la cpu lancia i dadi e passa il turno
    - Modalità medio = modalità in cui la cpu rilancia i dadi massimo 2 volte
    - Modalità difficile = lancia i dadi e ragiona su cosa deve fare per vincere
]