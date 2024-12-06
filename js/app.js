document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, introduce valores válidos para peso y altura.');
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
    const imcSpan = document.getElementById('imc');
    const estado = document.getElementById('estado');
    const estadoImg = document.getElementById('estadoImg');

    imcSpan.textContent = imc.toFixed(2);

    let estadoSalud = '';
    let imagen = '';

    if (imc < 18.5) {
        estadoSalud = 'Bajo peso';
        imagen = './img/BajoPeso.jpg';
        estado.style.color = 'blue';
    } else if (imc >= 18.5 && imc < 24.9) {
        estadoSalud = 'Normal';
        imagen = './img/normal.jpg'; 
        estado.style.color = 'green';
    } else if (imc >= 25 && imc < 29.9) {
        estadoSalud = 'Sobrepeso';
        imagen = './img/sobrepeso.jpg'
        estado.style.color = 'orange';
    } else {
        estadoSalud = 'Obesidad';
        imagen = './img/Obesidad.jpg';
        estado.style.color = 'red';
    }

    estado.textContent = estadoSalud;
    estadoImg.src = imagen;
    estadoImg.alt = estadoSalud;
    estadoImg.style.display = 'block';
    resultado.style.display = 'block';
});

