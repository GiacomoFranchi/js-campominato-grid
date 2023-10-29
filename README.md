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
1. creare un eventListener che si attiva al click del bottone play
2. associare alla classe .container la costante griglia
3. dichiarare la const box che conterra le singole celle
4. creare un cilco for con i = al numero minimo e i minore del numero massimo di celle
  - all'interno del ciclo creo una variabile che uso per creare un <div> in HTMl
  aggiungo a <div> la classe box , grazie a classList.add.
  - assegno alla costante box i valori di i a ogni ciclo così da avere n div pari al numero massimo
5. creare un event listener al click su box
  - allo specifico elemento cliccato assegno la classe blue e riporto a console il contenuto drl div

6. creare altri 2 event listener sul click dei bottoni (Play L2 e Play L3)
  - ripeto i punti precedenti per ciascun event listener cambiando i vlairi min e max e la classe ".box"


## Output
utilizzare il comando append per associare alla costante container la costante box
così da visualizzare la griglia nel file HTML
