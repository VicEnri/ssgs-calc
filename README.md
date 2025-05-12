# Progetto SSGS Calc

Questo progetto è una semplice calcolatrice da riga di comando sviluppata in Node.js. Questo progetto è stato creato per fornire un'applicazione interattiva che consente agli utenti di eseguire operazioni matematiche di base e avanzate direttamente dal terminale.

## Funzionalità

- **Operazioni supportate**:
  - Addizione
  - Sottrazione
  - Moltiplicazione
  - Divisione
  - **Potenza** (funzionalità aggiuntiva)
- **Interazione tramite riga di comando**:
  - L'utente può selezionare un'operazione e inserire i numeri richiesti.
- **Gestione degli errori**:
  - Controlli per input non validi (es. numeri non validi o divisione per zero).
- **Sessione continua** (funzionalità aggiuntiva):
  - L'utente può eseguire più operazioni nella stessa sessione fino a quando non sceglie di uscire.

## Requisiti

- **Node.js**: Versione 18 o superiore.

## Installazione

1. Clona il repository
2. Installa le dipendenze:
```bash
npm install
```

## Test

Il progetto utilizza Jest come framework per i test unitari. I test sono definiti nel file `calculator.test.js` e coprono tutte le funzioni matematiche presenti in `calculator.js`.

### Test presenti

- `add()`: Verifica che la somma di due numeri sia corretta.
- `subtract()`: Verifica che la sottrazione di due numeri sia corretta.
- `multiply()`: Verifica che il prodotto di due numeri sia corretto.
- `divide()`: Verifica che la divisione di due numeri sia corretta.
- `divide() con divisione per zero`: Verifica che venga generato un errore quando si tenta di dividere per zero.
- `power()`: Verifica che il calcolo della potenza sia corretto.

### Esecuzione dei test

Per eseguire i test, utilizza il seguente comando:
```bash
npm test
```
Jest eseguirà tutti i test definiti nel file `calculator.test.js` e mostrerà un riepilogo dei risultati, indicando quali test sono passati e quali sono falliti.

I Test dovrebbero generare il seguente output:
```
PASS  ./calculator.test.js
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |
 calculator.js  |     100 |      100 |     100 |     100 |
----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.234s
```

## Esempio di utilizzo

1. Avvia il programma:
```bash
npm start
```

2. Seleziona un'operazione dal menu (es. 1 per l'addizione o 5 per la potenza).
3. Inserisci i numeri richiesti.
4. Visualizza il risultato.
5. Ripeti o scegli 6 per uscire.

## Funzionalità aggiuntive

### Calcolo delle potenze

L'opzione 5 nel menu consente di calcolare la potenza di un numero base elevato a un esponente. Ad esempio, inserendo 2 come base e 3 come esponente, il risultato sarà 8 (2³).

### Richieste multiple nella stessa sessione

Dopo ogni operazione, il programma torna al menu principale, consentendo all'utente di eseguire un'altra operazione senza dover riavviare il programma.

## Struttura del progetto

- `app.js`: File principale che gestisce l'interazione con l'utente.
- `calculator.js`: Modulo che contiene le funzioni matematiche.
- `calculator.test.js`: File di test per verificare la correttezza delle funzioni matematiche.

## Pipeline CI
### Trigger

La pipeline si attiva su:

- `Push` al branch main
- `Pull request` verso il branch main

### Configurazione

La pipeline utilizza:
- **actions/setup-node@v4** per configurare Node.js.
- **Node.js 20.x**, una versione LTS attualmente supportata.

### Steps
- `Checkout repository:` Usa l'azione actions/checkout@v3 per clonare il repository.
- `Setup Node.js:` Usa l'azione actions/setup-node@v3 per installare Node.js versione 16.
- `Install dependencies:` Esegue npm install per installare le dipendenze del progetto.
- `Run tests:` Esegue npm test per eseguire i test definiti nel progetto.
- `Generate coverage report:` Esegue npx jest --coverage per generare un report di copertura dei test.
- `Upload coverage report:` Usa l'azione actions/upload-artifact@v4 per caricare il report di copertura generato nella directory coverage/.
