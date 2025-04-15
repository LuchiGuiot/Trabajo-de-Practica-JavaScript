//escribe un programa que pida dos numeros y escriba en la pantalla cual es el mayor

let num1 = parseInt(prompt('Ingresa un número')), num2 = parseInt(prompt('Ingresa un segundo número'))

if (num1 > num2){
    document.writeln('El número más grande es: '+ num1)
}
else{
    document.writeln('El número más grande es: '+ num2)
}
