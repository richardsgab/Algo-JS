let full = 10;
let redu = 8;
let jour;

function prixJour(jour){
    if (full==jour){
        console.log("You pay " +full+ "€ sorry!")        
    }
    else {
        console.log("You pay only " +redu+ "€!")
    }
}

jour= 10;

prixJour(jour);