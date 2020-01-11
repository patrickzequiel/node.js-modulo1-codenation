function calculoIMC(peso, altura){
    const resultado =  peso / (altura**2)
    const imc = resultado.toFixed(2)

    if (imc < 20) {
        console.log(`O seu IMC ${imc} significa ABAIXO DO PESO!`);
      } else if (imc >= 20 && imc < 25) {
        console.log(`O seu IMC ${imc} significa PESO NORMAL!`);
      } else if (imc >= 25 && imc < 30) {
        console.log(`O seu IMC ${imc} significa ACIMA DO PESO!`);
      } else if (imc >= 30 && imc < 34) {
        console.log(`O seu IMC ${imc} significa QUE CÊ TÁ CAMINHANDO PRO ABATE, LEITÃO!`);
      } else {
        console.log(`O seu IMC ${imc} significa que VOCÊ É UM ZÉ GORDÃO, BROTHER`);
      }
}

calculoIMC(82, 1.75)