function oddOrEven () {
    let resultado = {
        pares: [],
        impares: []
    }
    for(let i = 0; i <= 20; i++){
        const resto = i % 2;

        if(resto){
            resultado.pares.push(i)
        } else {
            resultado.impares.push(i)
            }
        }
        return resultado;
    }

console.log(oddOrEven());


// module.exports = oddOrEven;