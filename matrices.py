#Matriz multidimencional

print("--Menú--")

matriz = []
#Funcion opciones de menu
def opciones_menu():
   print("1. Ingresar nueva persona")
   print("2. Mostrar todos los datos")
   print("3. Filtrar por DNI")
   print("4. Salir")
   

while True:
   #Devuelve la funcion
   opciones_menu()

   option = input("Eligue una opcion del menu:")
   #Opcion 4 el usuario sale de la operacion
   if option == "4":
      print("Salir")
      break
  #El usuario ingresa todos sus datos
   if option == "1":
    print("Ingrese sus datos(Para salir escriba: 'Terminado'")
    nombre = input("Ingrese su nombre:")
    if nombre == "Terminado":
      print("A salido")
      break
    apellido = input("Ingrese su apellido:")
    dni = input("Ingrese su dni:")
   
   #Cargas de numero telefonico
    numero = []
    while True:
     print("Para salir escriba:'Terminado'")
     numero_telefono = input("Ingrese su numeor de telefono:")
     if numero_telefono == "Terminado":
        print("A salido")
        break
     #Se agrega numero de telefono a la lista numero
     numero.append(numero_telefono)
    
    #Lista de hijos de usuario
    hijos = []
    while True:
       print("Si no tiene hijos seleccione 0, Para salir escriba 'Terminado'")
       hijo = input("Ingrese nombre de sus hijos:")
       if hijos == 0 or hijo == "Terminado":
          break
       #Se guardan los valores ingresados en la matriz hijos
       hijos.append(hijo)
    #Se almacenan todos los datos ingresados en una matriz
    matriz.append([nombre, apellido, dni, numero, hijos])
    print("Persona agregada con exito")
 
 #Muestra al usuario los datos ingresados
   if option == "2":
       for persona in matriz:
        print(f"Nombre: {persona[0]} {persona[1]}, DNI: {persona[2]}")
        print(f"Teléfonos: {', '.join(persona[3])}")
        print(f"Hijos: {', '.join(persona[4]) if len(persona[4]) > 0 else 'No tiene hijos'}")
   
   #Filtra los datos de acuerdo a un DNI especifico
   if option == "3":
       filtrar_dni = input("Ingrese el DNI a buscar: ")
       buscar_dni = next((persona for persona in matriz if persona[2] == filtrar_dni), None)
       if buscar_dni:
        print(f"Nombre: {buscar_dni[0]} {buscar_dni[1]}")
        print(f"DNI: {buscar_dni[2]}")
        print(f"Teléfonos: {', '.join(buscar_dni[3])}")
        print(f"Hijos: {', '.join(buscar_dni[4]) if len(buscar_dni[4]) > 0 else 'No tiene hijos'}")
     
