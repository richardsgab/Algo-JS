let s;
let m;
let h;


function segu(h, m, s){
    return ((h*720)+(m*60)+s)
}

h=1;
m=10;
s=25;

console.log(segu(h,m,s));