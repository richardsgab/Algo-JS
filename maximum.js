let a;
let b;
let c;

function maxiNum(a, b, c){
    if((a > b) && (a > c)){
        console.log("Maximum number is " + a)
    }
    else if((b > a) && (b > c)){
        console.log("Maximum number is " + b)
    }
    else {
        console.log("Maximum number is " + c)
    }
}

a= 5;
b= 13;
c= 17;

maxiNum(a,b,c);