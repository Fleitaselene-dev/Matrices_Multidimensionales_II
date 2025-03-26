
//Matriz de datos
console.log("--Menú--")
let matriz = []


function mostrarMenu(){
    console.log("1. Ingresar nueva persona")
    console.log("2. Mostrar todos los datos")
    console.log("3. Filtrar por DNI")
    console.log("4. Salir")
}


while(true){
    mostrarMenu()
    let option = prompt("Elige una opcion:")
    //Opcion 4 Salir de la operacion
    if (option == 4){
        console.log("Salir");
        break;
    }
    //Ingresar un nuevo usuario
    if (option == 1){
    console.log("Para salir ingrese: Terminado")
    let nombre = prompt("Ingrese su nombre:")
    if(nombre == "Terminado") 
        break;
    let apellido = prompt("Ingrese su apellido:")
    let dni = prompt("Ingrese su dni:")
    
    //Lista de numero telefonico
    let numero = []
    while(true){
      let numeroTelefonico = prompt("Ingrese su numero telefonico")
      if(numeroTelefonico == "Terminado")
        break;
    numero.push(numeroTelefonico)}

    //Lista de hijos
    let hijos = []
    while(true){
        console.log("Si no tiene hijos seleccione 0, \npara salir escriba 'Terminado")
        let hijo = prompt("Ingrese nombre de sus hijos")
        if(hijo === "0" || hijo === "Terminado")
            break;
        hijos.push(hijo)

    }
    matriz.push([nombre, apellido, dni, numero, hijos])
    console.log("Persona agregada con exito")
  }
  //Mostrar los datos de usuario
  if (option == 2){
    console.log("Listas de Personas")
    matriz.forEach(persona => {
        console.log(`Nombre: ${persona[0]} ${persona[1]}, DNI: ${persona[2]}`);
        console.log(`Teléfonos: ${persona[3].join(", ")}`);
        if (persona[4].length === 0) {
            console.log("No tiene hijos");
        } else {
            console.log(`Hijos: ${persona[4].join(", ")}`);
        }
    });}
    //Mostrar los datos de usuario segun el DNI
  if(option == 3) {
    let filtrarDni = prompt("Ingrese el DNI a buscar:")
    //Recorre la matriz y devuelve el elemento de matriz que sea de igual valor al que ingreso el usuario
    let personaEncontrada = matriz.find(persona => persona[2] === filtrarDni);
       if( personaEncontrada){
        console.log(`Nombre: ${personaEncontrada[0]} ${personaEncontrada[1]}`);
        console.log(`DNI: ${personaEncontrada[2]}`);
        console.log(`Teléfonos: ${personaEncontrada[3].join(", ")}`);
        console.log(`Hijos: ${personaEncontrada[4].length > 0 ? personaEncontrada[4].join(", ") : "No tiene hijos"}`);
    }else{ 
        //Si lo que ingreso el usuario no coincide con ningun elemento de matriz
            console.log("No se ha encontrado el DNI")
        }      
    } else {
        //Numero ingresado no coincide con ninguna de las opciones
        console.log("Error. Ingrese un número válido");     
    }
}