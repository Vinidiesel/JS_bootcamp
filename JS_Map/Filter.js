const meuArray = [1,2,6,4,5];

function numerosPares(arr){
    return arr.filter(function(item){
        return item % 2===0;
    })
}
console.log(numerosPares(meuArray));