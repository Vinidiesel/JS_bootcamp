function verificaPalindromo(string){
    if(!string)return;


    stringSemEspaco = string.replace(/' '/g, '');
    stringInvertida = stringSemEspaco.split("").reverse().join("");
    return stringInvertida === stringSemEspaco;
}

console.log(verificaPalindromo("lava esse aval"));