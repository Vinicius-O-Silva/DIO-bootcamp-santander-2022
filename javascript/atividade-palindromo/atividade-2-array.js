function trocaArray(arr) {
    if(!arr) return -1; 
    if(!arr.length) return -1;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log("Você já é zero!!");
        } else if (arr[i] % 2 === 0){
            console.log(`Substituindo ${arr[i]} por 0`)
            arr[i] = 0;
        } else {
            console.log(`${arr[i]} é ímpar`);
        }
    }

    return arr;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(trocaArray(array));
let teste2 = [0, 0, 3, 8, 8, 12, 17];
console.log(trocaArray(teste2));
console.log("---------");
console.log(trocaArray([]));
console.log(trocaArray(null));
console.log(trocaArray(undefined));
console.log(trocaArray(false));