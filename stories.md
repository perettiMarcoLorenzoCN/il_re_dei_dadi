# Gruppo
1. Naccarato Matteo
2. Nicosia Francesco
3. Pano Nicolò
4. Peretti Marco Lorenzo

# Epica
Applicazione che simula il gioco da tavolo "Il re dei dadi"


# Stories:
# A. Story per autenticazione
    In una pagina Home è possibile cliccare su un pulsante Login / Registrati presente in alto a destra, tramite il quale si può accedere ad una schermata per visualizzare il proprio account oppure per crearne uno nuovo. Nel primo caso si può navigare su un’interfaccia grafica che consente la modifica dei dati utili al gioco (immagine del profilo, username), di quelli anagrafici (nome, cognome) e quelli relativi alla gestione del proprio account (e-mail e password). Nel secondo, invece, vengono richiesti i dati sopracitati in modo da poter creare il profilo del giocatore.

# B. Story per giocare
    Per poter iniziare a giocare è necessario creare un account oppure semplicemente accedere come ospite, in questo caso viene richiesto solamente di digitare uno username temporaneo. Dopo questo passaggio è possibile cliccare su un pulsante Crea partita, tramite il quale si accede ad un’interfaccia su cui è possibile specificare il numero di giocatori della partita (da x a y) e successivamente avviarla.

# C. Tutorial
    Nel caso in cui sia la prima partita dell’utente, si mostra la simulazione (tutorial) di un turno in modo da comprende la gestione e le meccaniche del gioco.

# D. Preparazione del gioco
    All’inizio della partita si avvia un’animazione che mostra la suddivisione delle carte di gioco nei vari mazzi: luogo (dorso verde), punizione (dorso rosso) e abitanti (dorso azzurro). A questo punto, attraverso un’altra animazione automatica, il gruppo delle carte viene suddiviso in base al colore del lato anteriore e successivamente le carte abitanti vengono mischiate e cinque di esse distribuite (tramite animazione) nella “mano” dei diversi giocatori. Questo processo si conclude con il mescolamento delle carte punizione.

# E. Lancio dei dadi
    Al momento del proprio turno compaiono al centro dello schermo sei dadi da lanciare, all’utente basta fare un click con il mouse sull’immagine per poterli effettivamente lanciare e vedere il risultato. Dopo il lancio si apre un menù di scelta per la prossima azione: nuovo tentativo (max.3), togli dei dadi, aggiungi dei dadi.

# F. Manuale
    Ogniqualvolta l’utente lo desidera, è possibile cliccare su un’immagine presente in alto a destra (raffigurante un libro) per poter consultare il manuale di istruzioni del gioco. Per spostarsi tra le pagine del documento si utilizzano delle frecce presenti nella parte bassa del libro, mentre per chiudere basta cliccare sulla scritta chiudi posizionata nell’angolo in alto a sinistra della pagina che si sta consultando.

# G. Pesca
    Per pescare delle carte è semplicemente richiesto il click sul mazzo su cui si desidera eseguire l’azione (simulata da un’animazione al di sopra del mazzo e evidenziata da una “luce” intorno al mazzo da cui è possibile pescare).

# H. Ricomincia/Termina partita
    In alto a sinistra, durante la partita vera e propria, sono presenti una serie di pulsanti: Ricomincia e Termina partita: cliccando il primo, viene eseguito un reset della partita corrente e ne viene iniziata una nuova; il secondo, invece, fa apparire un menù a schermo (Salva partita/Abbandona senza salvare), dove il primo permette di salvare lo stato della partita corrente per poi poterla riprendere in seguito, mentre il secondo consente di lasciare il game e tornare direttamente nella Home iniziale.
