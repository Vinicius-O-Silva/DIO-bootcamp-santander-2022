// solução 1
function verificaPalindromo(string) {
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

let myVar;

console.log("----- Solução 1 -----");

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("gato"));
console.log(verificaPalindromo(""));
console.log(verificaPalindromo(myVar));

// solução 2

function verificaPalindromo2(string){
    if(!string) return "String inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log("----- Solução 2 -----");
console.log(verificaPalindromo2("abba"));
console.log(verificaPalindromo2("abbba"));
console.log(verificaPalindromo2("gato"));
