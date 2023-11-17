/* Crea una funzione safeParseJSON che prende una stringa e tenta di
 analizzarla come JSON. Se l'analisi fallisce, la funzione 
 dovrebbe restituire null invece di generare un errore. 
 Inoltre, la funzione dovrebbe stampare in console se 
 l'analisi è stata un successo o meno. */
/* 
 function safeParseJSON(stringa){
    let risultato = null;
    try{
       const oggetto= JSON.parse(stringa);
       risultato = oggetto
       console.log('annalisi andata a buon fine');

    }catch{
        console.log('annalisi non andata a buon fine');
    }
    
    return risultato;
 };
 let stringaJSON=`["latte", "mele", "carne", "uova"]`;
 const test =safeParseJSON(stringaJSON);
 console.log(test); */

/* const safeParseJSON = (stringa) => {
    try {
        const obj = JSON.parse(stringa);
        return obj;
    } catch (errore) {
        const result = null;
        return result;
    }
}
const jsonStringa = `{
    "nome":'tizio',
    "age":21 
}
`;
const result = safeParseJSON(jsonStringa);
console.log(result);
 */

/*----------------------------------------- ESERCIZIO 2----------------------- */


/*  Crea una funzione chiamata logElements che prende un array e 
stampa in console ogni elemento utilizzando il metodo .forEach(). */
/*  
   
   const logElements=(array) =>{
    array.forEach( element => {
        console.log(element);
    });
 }
  const array2=["pane", "acqua", "latte"];
  logElements(array2) */

/*  logElements è stata definita utilizzando arrow function 
 L'arrow function viene utilizzata sia per la funzione principale logElements, 
 che per la funzione passata al metodo forEach. Entrambe le funzioni sono 
 scritte in una forma più compatta usando le arrow function. */



/* ----------------------ESERCIZIO3----------------------------------- */
/*   Scrivi una funzione chiamata divide che prende due parametri, dividendo e divisore. 
  Se il divisore è 0, genera un nuovo errore con il messaggio "Impossibile dividere per zero". 
  Altrimenti, restituisci il risultato della divisione. */

/* const divide = (dividendo, divisore) => {
    try {
        if (divisore === 0) {
            throw new Error('non puoi dividere per 0');

        } 
        return dividendo / divisore;

        
    }catch(error){
        console.error(error)
        return null;
        
    }
}
const test = divide(10, 0);
console.log(test); */


/* -----------------------ESRCIZIO 4----------------------------------- */

/* 
    Scrivi una funzione processNumbers che prende un array, 
    convalida che contenga solo numeri e restituisce un nuovo array 
    con ogni numero elevato al quadrato. Se un elemento dell'array non è un numero,
    genera un errore indicando a quale indice si trova il valore non numerico. */


/*  const processNumbers = function(array){
    array.forEach((element, i ) => {
     if(typeof element !== 'number'){
         throw new Error(`l'elemenro di indice ${i} non e un numero`)
     }
    });

    const numeriQuadrati = array.map((num) =>{
      return num **2;
    return numeriQuadrati;
    });  
    
 }
 const arrayProva =[1, 2, 4, 22, 56, 69];
 const test = processNumbers(arrayProva);
 console.log(test); */

/* ------------------------Esercizio 5--------------------------------- */
/* 
    Scrivi una funzione mapWithIndex che prende un array e restituisce un 
    nuovo array in cui ogni elemento è una stringa che contiene l'elemento 
    originale e il suo indice, formattato come "Elemento [indice]: [elemento]" */
/* 
    const mapWithIndex = (array) =>{
    const arrayMappato= array.map((elem, i) =>{
     return `elemento ${i} : ${elem}`;
    });
     return arrayMappato;
    }
    const teams =["heat", " lakers", "raptors", "nuggets"];
    const test = mapWithIndex(teams);
    console.log(test); */

/* ------------------------ESERCIZIO 6---------------------------------- */

/*  Crea una funzione removeShortWords che prende un array di stringhe e una
 lunghezza minima. Dovrebbe restituire un nuovo array contenente solo le 
 stringhe che sono più lunghe della lunghezza minima. Usa .filter() e 
 assicurati che la funzione non tenga conto delle maiuscole e minuscole */
/* 
    const removeShortWords = (array, min) =>{
     const arrayFiltrsto = array.filter((stringa) => stringa.length > min)
     return arrayFiltrsto;
    }
    const stringhe = ["hello", "morning", "hey", "piscina", "bau"];
    const test = removeShortWords(stringhe, 5);
    console.log(test); */
