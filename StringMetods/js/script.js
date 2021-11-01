// Task 2
console.log(match("HEllo","hello"))
function match(a,b) {
    if(a.toLowerCase()==b.toLowerCase()){
        return true;
    }
    
}
// Task 3
console.log(ctoa("A"))
function ctoa(a) {
    return a.charCodeAt(0)
    
}
// Task 4
console.log(stringcase("HeLLO"))
function stringcase(a) {
    if(a==a.toUpperCase()){
        return "Boyukdur";
    }
    else if(a==a.toLowerCase()){
        return "kicikdir";
    }
    else{
        return "ne boyukdir ne kicik"
    }
}
// Task 5
console.log(Go(1))
function Go(a) {
    let b="";
    for (let i = 0; i < a; i++) {
        b+="-" 
    }
    return b;
}
// Task 6
console.log(numberSyllables("buf-fet-rt"))
function numberSyllables(word) {
    return word.split("-").length
}
// Task 7
console.log(howmanytimes(5))
function howmanytimes(a) {
    let b="";
    return "Ed" + b.padStart(a,"a") + "bit"
}
// Task 8
console.log(integral(5))
function integral(a) {
    let int=1;
    for (let i = 1; i <= a; i++) {
        int*=i
    }
    return int
}
// Task 9













// Task 10
function alphabet(a) {
    let z="";
    let b= a.split("").sort();
   for (let i = 0; i < b.length; i++) {
       z+=b[i]
       
   }
   return z;
}
console.log(alphabet("alphabet"))