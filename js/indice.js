function esPrimo(numero){
    let divisores = 0;
    for (let i = 0; i <= numero; i++) {
        if(numero % i == 0){
            divisores++;
        }        
    }
    return divisores == 2;
}

function calcular() {
    const numero = parseInt(document.getElementById('numero').value);

    document.getElementById('resultado').innerHTML = `El número ` + numero + ` ` + (esPrimo(numero)? 'es primo': 'no es primo');
    
    return false;
}

function limpiar() {
    document.getElementById('formulario').reset();
    document.getElementById('resultado').innerHTML = '';
}
