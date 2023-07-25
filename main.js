let userName = prompt('Bienvenido ingrese su nombre')
let usdValue = 550
let menu = true

function usdCalculator(price, usdValue) {
    if (price <= 0) return 'Ingrese un valor positivo mayor a 0'
    return price * usdValue
}

while (menu) {
    let opt = prompt('Bienvenido, ' + userName + '. Eliga una opción \n 1- Calculadora dólares/pesos \n 2- Cambiar el valor del dólar (El valor actual es de: ' + usdValue +')' + '\n 3- Salir')
    switch (opt){
        
        
        case '1':
            let price = prompt('Por favor ingrese el precio en dólares del producto que desee calcular en pesos') 
            alert('El valor que consultó en pesos es de: ' + usdCalculator(price, usdValue))
            break;
            
        case '2':
            usdValue = prompt('Ingrese el valor del Dólar por el que desea reemplazar el valor actual. El valor actual es: ' + usdValue)    
            break;
                
        case '3':
            menu = false
            break;
            
        default:
        alert('Ingrese una opción valida')
        break;
    }
}