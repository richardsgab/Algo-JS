var da1 = (Math.floor((Math.random() * 6) + 1));
var da2 = (Math.floor((Math.random() * 6) + 1));
var da3 = (Math.floor((Math.random() * 6) + 1));

console.log(da1, da2, da3);

function compareDados(da1, da2, da3){
    if((da1 == da2) && (da1 == da3)){
        console.log("All dices are the same!")
    }
    else if((da1 == da2) || (da1 == da3) || (da2 == da3)){
        console.log("Two of three are the same")
    }
    else {
        console.log("None of three")
    }
}

compareDados(da1, da2, da3);