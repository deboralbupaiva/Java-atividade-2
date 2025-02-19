function contarCaracteres(str) {
    let contagem = {};
    for (let char of str) {
        contagem[char] = (contagem[char] || 0) + 1;
    }
    return contagem;
}
console.log(contarCaracteres("meia"));