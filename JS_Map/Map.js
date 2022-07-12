const meuArray = [1,2,3,4,5];

function mutiplicacao(arr){
    return meuArray.map(function(item){
        return item*2;
    });
}

console.log(mutiplicacao(meuArray));

console.log(meuArray);