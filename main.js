let userName = prompt('Bienvenido ingrese su nombre')
let usdValue = 550
let menu = true

function usdCalculator(price, usdValue) {
    if (price <= 0) return 'Ingrese un valor positivo mayor a 0'
    return price * usdValue
}

while (menu) {
    let opt = prompt('Bienvenido ' + userName + '. Eliga una opcion \n 1- Calculadora dolares/pesos \n 2- Cambiar el valor del dolar (El valor actual es de: ' + usdValue +')' + '\n 0- Salir')
    switch (opt){
        
        case '0':
        menu = false
        break;

        case '1':
        let price = prompt('Por favor ingrese el precio en dolares del producto que desee calcular en pesos') 
        alert('El valor que consulto en pesos es de: ' + usdCalculator(price, usdValue))
        break;

        case '2':
        usdValue = prompt('Ingrese el valor del Dolar por el que desea reemplazar el valor actual, el valor actual es: ' + usdValue)    
        break;

        default:
        alert('Ingrese una opcion valida')
        break;
    }
}