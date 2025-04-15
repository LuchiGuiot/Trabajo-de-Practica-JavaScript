//escribe un programa que pida 3 numeros y escriba en la pantalla cual es el mayor de los tres

let num1 = parseInt(prompt('Ingrese un número:')), num2 = parseInt(prompt('Ingrese un segundo número:')), num3 = parseInt(prompt('Ingrese un tercer número:'))

if (num1 > num2 && num3){
    document.writeln('El número más grande es: '+ num1)
}
else if (num2 > num1 && num3){
    document.writeln('El número más grande es: '+ num2)
}
else{
    document.writeln('El número más grande es: '+ num3)
}