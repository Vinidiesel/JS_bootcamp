function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    })
}

const arr = [1,6];

console.log(somaNumeros(arr));