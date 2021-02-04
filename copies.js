let cc;
let ptot;

function howMuch(cc){
    if(cc <= 10){
        ptot= ( cc * 0.12)
    }
    else if(10 < cc <= 20){
        ptot= ( cc * 0.11)
    }
    else {
        ptot= ( cc * 0.10)
    }
}
console.log("You pay" + ptot + "euro");

howMuch(10);
