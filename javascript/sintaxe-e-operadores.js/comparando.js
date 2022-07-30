function comparacao(num1, num2) {
    const igual = (num1 === num2) ? 'são' : 'não são';

    let soma = num1 + num2;
    let compara20, compara10;
    if (soma > 20) {
        compara20 = 'maior'
    } else {
        compara20 = 'menor'
    }

    if (soma > 10) {
        compara10 = 'maior'
    } else {
        compara10 = 'menor'
    }
    return `Os numeros ${num1} e ${num2} ${igual} iguais. Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20".`
}

// Com funções separadas e concatenando Strings

function comparaNumeros (num1, num2) {
    const frase1 = primeiraFrase(num1, num2);
    const frase2 = segundaFrase(num1, num2);

    return `${frase1}${frase2}`
}

function primeiraFrase (num1, num2){
    let igual = 'não são';

    if(num1 === num2) {
        igual = 'são'
    }

    return `Os números ${num1} e ${num2} ${igual} iguais. `
}

function segundaFrase (num1, num2) {
    const soma = num1 + num2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20) {
        resultado20 = 'maior'
    }
    
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20".`
}


console.log(comparacao(1, 2))
console.log(comparaNumeros(1, 2))

// Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.