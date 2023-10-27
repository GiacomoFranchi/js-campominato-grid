# ESERCIZIO
## Descrizione
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Svolgimento

**Logica del programma**
1. creare una funzione che prende come valori il numero minimo e massimo di caselle della nosra griglia
    - per i = al numero minimo, finchè i <= numero massimo aggiungere alla variabile grigliaNum `<div class="box">${num}</div>` dove num è uguale a "i"
    -far ritornare dalla funzione la variabile grigliaNum
2. creare un eventListener che si attiva al click del bottone play
3. associare alla classe .container la costante griglia
4. dichiarare la funzione grigliaGioco e associare il risultato della funzione alla costante "griglia" cosi da creare la tabella in html