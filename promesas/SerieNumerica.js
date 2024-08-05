// let variablesResultado = [];
// let resultado = 1;
// for (let i = 1; i <= 10; i++) {
//     resultado = i + resultado;  
//     console.log(resultado);
// }

// callback hell to promise...
const numero = [];
let N1 = 1;
let N2 = 1;

const nuevoNumero = () => new Promise(resolve => {
    setTimeout(() => {
        const suma = N1 + N2;
        numero.push(suma);
        resolve(`Agregado: ${suma}`);
        N1 += 1;
        N2 = suma; 
    }, 3000);
});

nuevoNumero()
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    })
    .then(resultado => {
        console.log(resultado);
        console.log(numero);
        return nuevoNumero();
    });
    
