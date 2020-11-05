# PRUEBAS TEAM GOANYWHERE REDSIS

Las siguientes pruebas deberán cargarsé en este repositorío, creando una rama con la siguiente convención: pruebasReedsis/nombre-apellido

# A tener en cuenta

1. Las pruebas pueden ser desarrolladas en el lenguaje de programación de su preferencia.
2. La entrega debe realizarsé como maximo el martes 20 de Octubre a las 15:00, cualquier entrega realizada despues de este horario no será tenida en cuenta
3. Para validar la fecha y hora de entrega se tendrá en cuenta únicamente la hora y fecha registradas por GitHub.
4. **Opcionalmente** se recomienda agregar un Readme con las instrucciones de ejecución de los programas
5. Documentar el codigo escrito en cada uno de los ejercicios

# PRUEBA 1

Desarrolle un programa que reciba como parametro un numero de 10 digitos y lo convierta a letras de acuerdo a la siguiente definición:

- 0 = S
- 1 = U
- 2 = T
- 3 = P 
- 4 = A
- 5 = G
- 6 = M
- 7 = E
- 8 = L
- 9 = C

Ejemplo: Parametro: 0055667788 ---> SSGGMMEELL
El programa debe arrojar un excepción en caso de que se ingrese un numero de menos de 10 digito o mas de 10 digitos

# PRUEBA 2

Desarrolle un programa que calcule el valor correcto del siguiente problema. El valor puede ser presentado en pantalla de línea de comandos, no se requiere interface gráfica.

Problema:

Una tripleta pitagórica es un conjunto de tres números naturales (enteros positivos), 
a < b < c, para los cuales:

a2 + b2 = c2

Por ejemplo, 32+ 42 = 9 + 16 = 25 = 52

Existe exactamente una tripleta pitagórica para la cual a + b + c = 1000.

Encontrar el producto de a*b*c de esta triple pitagórica en especifico.

# PRUEBA 3

Desarrolle un cliente REST que consuma el siguiente WebService, **OPCIONALMENTE** presente el resultado en un Frontend html basico.
 
- Documentación de consumo: https://securetransfer.redsis.com/rest/forms/v1/teamGoAny/payload?help=true 
- User: ingresoRedsis
- Password: Qwerty0909$

# PRUEBA 4

Desarrolle un programa que contenga un método, de nombre escribirMes, que reciba por parámetro el número correspondiente a un mes del año y la letra correspondiente al día de la semana en que cae el día 1 de ese mes (‘L’ para lunes, ‘M’ para martes, ‘X’ para miércoles…). El método escribirá en un archivo un calendario para ese mes, que estará formado por todos los días del mes seguidos de la letra correspondiente al día de la semana en que caen. El método comprobará que los parámetros recibidos son correctos y obtendrá el nombre, concatenando a la palabra mes el número de mes recibido como extensión.

Ejemplo: Si el método recibe el valor 3 (que representa el mes de marzo), y la letra ‘M’, indicando que el 1 de marzo es martes, el método obtendrá el nombre de archivo “mes3.txt” y lo escribirá con un calendario así:

1M2X3J4V5S…………………….31J

