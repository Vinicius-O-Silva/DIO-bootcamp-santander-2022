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

console.log(comparacao(1, 19))

// Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.