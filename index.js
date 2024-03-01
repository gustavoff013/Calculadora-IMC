const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('input-name').value;
    const altura = document.getElementById('input-altura').value;
    const peso = document.getElementById('input-peso').value;
    const resultado = document.getElementById('resultado');

    let resultCalculo = null;
    
    if(nome === '' || altura === '' || peso === ''){
        resultado.textContent = 'Preencha os campos!!!'
        } else {
             resultCalculo = peso / (altura ** 2);
            resultado.textContent = `${nome} seu imc é ${resultCalculo.toFixed(1)}`
      }
}

calcular.addEventListener('click', imc); // o método addEventListener recebe como primeiro parâmetro o nome do evento, e como segundo parâmetro a função a ser executada.*/
