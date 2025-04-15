//escribe un programa que pida un número y diga si es divisible en 2

let num = parseInt(prompt('Escribe un número que te guste para saber si es divisible en 2:'))

if (num % 2 === 0){
    document.writeln('El número es divisible en 2 (es par)')
}
else{
    document.writeln('El número no es divisible en 2 (no es par)')
}