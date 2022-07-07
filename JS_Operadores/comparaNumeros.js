function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1,num2){
    if(num1===num2){
       primeiraFrase = `Os numero ${num1} e ${num2} são iguais`;
    }else{
        primeiraFrase = `Os numero ${num1} e ${num2} não são iguais`;
    }
    return primeiraFrase;
}

function criaSegundaFrase(num1,num2){
    const soma= num1+num2;
    if(soma<10&&soma<20){
       segundaFrase = `Sua soma é ${soma}, que é menor que 10 e menor que 20.`;
    }else{
        if(soma>10&&soma<20){
            segundaFrase = `Sua soma é ${soma}, que é maior que 10 e menor que 20.`;
        }else{
            segundaFrase = `Sua soma é ${soma}, que é maior que 10 e maior que 20.`;
        }
    }
    return segundaFrase;
}

console.log(comparaNumeros(10, 5));