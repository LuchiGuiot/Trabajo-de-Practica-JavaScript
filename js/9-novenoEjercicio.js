//escribe un programa que pida una frase y escriba las vocales que aparecen. nota: tener en cuenta la funcion lenght y substring o charAr (developer mozilla)

const frase = prompt("Introduce una pequeña frase:").toLowerCase()
let vocales = ""

for (let i = 0; i < frase.length; i++) {
  let letra = frase.charAt(i)
  if ("aeiouáéíóúü".includes(letra) && !vocales.includes(letra)) {
    vocales += letra + " "
  }
}

document.writeln("Vocales encontradas: ", vocales.trim() || "No hay vocales")