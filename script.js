document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('#calc-form');

  const nomeInput = document.querySelector('#nome');
  const nomeError = document.querySelector('#nome-error');

  const alturaInput = document.querySelector('#altura');
  const alturaError = document.querySelector('#altura-error');

  const pesoInput = document.querySelector('#peso');
  const pesoError = document.querySelector('#peso-error');

  const resultado = document.querySelector('#resultado');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = nomeInput.value;
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!nome) {
      nomeError.style.display = 'block';
      return;
    } else {
      nomeError.style.display = 'none';
    }

    if (!altura) {
      alturaError.style.display = 'block';
      return;
    } else {
      alturaError.style.display = 'none';
    }

    if (!peso) {
      pesoError.style.display = 'block';
      return;
    } else {
      pesoError.style.display = 'none';
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let categoria;

    if (imc < 18.5) {
      categoria = 'Abaixo do peso';
      resultado.style.backgroundColor = '#ffff00';
    } else if (imc < 25) {
      categoria = 'Peso normal';
      resultado.style.backgroundColor = '#00ff00';
    } else if (imc < 30) {
      categoria = 'Sobrepeso';
      resultado.style.backgroundColor = '#ffa500';
    } else if (imc < 35) {
      categoria = 'Obesidade grau I';
      resultado.style.backgroundColor = '#ff0000';
    } else if (imc < 40) {
      categoria = 'Obesidade grau II';
      resultado.style.backgroundColor = '#ff0000';
    } else {
      categoria = 'Obesidade grau III';
      resultado.style.backgroundColor = '#ff0000';
    }

    resultado.innerHTML = `
      <p>Olá, ${nome}</p>
      <p>Seu IMC: <strong>${imc}</strong></p>
      <p>Você está na Categoria: <strong>${categoria}</strong></p>
    `;

    resultado.style.display = 'block';

    document.getElementById('categoria').value = categoria;

    let dados = new FormData(formulario);
    let dadosJson = JSON.stringify(Object.fromEntries(dados));
    localStorage.setItem('dados', dadosJson);

    for (let [key, value] of dados.entries()) {
      console.log(key, '=', value);
    }
  });
});
