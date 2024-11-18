function bissextile(a) {
    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
        return "année bissextile"; 
    } else {
        return "année non  bissextile"; 
    }
}

function PrixBillet(age) {
    let prix;

    if (age <= 12) {
        prix = 10;  
    } else if (age >= 13 && age <= 17) {
        prix = 15;  
    } else {
        prix = 20;  
    }

    return prix;
}

function Fibonacci(n) {
    if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    }
    return Fibonacci(n-1) + Fibonacci(n-2);
}

function Palindrome(str) {
    let i=0
    let j=str.length()
    while(i<j){
        if(str[i]===!str[j]){return "n est pas palindrome"}
    }
return "la chaine est palindrome"
}

function puissance(n,p){
if (p=1){return (n)}
else{return(puissance(n*n,p-1))}}