# js-simon

Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

1. Creo un array vuoto che dovrà contenere i 5 numeri casuali
2. Creo una const che si allacci all'elemento html che dovrà contenere i numeri
3. Tramite metodo while genero 5 numeri casuali diversi tra loro
4. Inietto sul documento HTML i numeri generati
5. Creo un Timeout che vada a far sparire i numeri dopo 30 secondi
6. Creo un altro Timeout che dopo 30 secondi mi chieda di inserire i numeri visti a schermo tramite prompt
