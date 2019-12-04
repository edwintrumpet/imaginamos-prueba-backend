# Prueba Backend Imaginamos

API rest de la prueba técnica para backend en **Imaginamos**

## Sitio Web

https://prueba-backend-imaginamos.now.sh/

## Instalación

```shell
npm i
```

Usar el archivo `.env.example` para construir el archivo `.env` en el que van las variables de entorno.

Antes de usar se deben ingresar algunos drivers en la base de datos, con el siguiente comando se pueden agregar los usuarios que tenemos en los archivos de mocks

```shell
DEBUG=app* node src/scripts/mongo/seedDrivers.js
```

## Scripts

- `npm run dev`  
Inicia el servidor en modo desarrollo
- `npm start`  
Inicia el servidor en modo producción
- `npm run test`  
Ejecuta los tests
- `npm run cover`  
Ejecuta en terminal el software que evalua la cobertura de los tests
- `npm run report`  
Ejecuta en una página web el software que evalua la cobertura de los tests
- `npm run lint`  
Muestra los errores marcados por la configuración de nuestro linter
- `npm run lint:fix`  
Corrige todos los errores para que el código esté bajo el estandar del linter

En el directorio `src/scripts/mongo` se encuentran scripts para alimentar la base de datos con los valores dados en los mocks

## Rutas

|método|endpoint|parámetros|valores
|:-----:|:-----:|:-----:|:-----:|
|GET|`/api/deliveries/:userId`|params|**userId**: Un id en formato hexadecimal de 24 carácteres|
|||query|**year**: Año en formato de 4 dígitos|
|||query|**month**: Primeras tres letras del mes en inglés empezando con mayúscula, solo funciona si está acompañado de _year_|
|||query|**day**: Número del día (1-31), solo funciona si está acompañado de _year_ y _month_|
|POST|`/api/deliveries`|body|ver el siguiente json|

```
{
    "name": {
        "firstName": // String
        "lastName": // String
    },
    "email": // email
    "phone": // string
    "address": // string
    "deliveryDate": {
        "year": // Número de 4 dígitos
        "month": // Primeras tres letras del mes en inglés empezando con mayúscula
        "day": // Número del día (1-31)
        "hour": // Hora (0-23)
        "minute": // Minuto (0-59)
    },
    "waitTime": // Número (1-8) que indica la franja de entrega en horas
}
```

## Funcionamiento

Inicialmente deben existir drivers en la base de datos, cuando un cliente use el endpoint del método _POST_ se le asignará uno de los drivers de forma aleatoria y se almacenarán los datos de la entrega en la base de datos.  
Si el cliente ya está registrado con su email se usará su cuenta antigua y se agregará la dirección si es diferente. Si no existe además de agregar la entrega se agregará el cliente a la base de datos.

El driver podrá obtener la lista de los pedidos asignados a él por medio del endpoint del método _GET_ y filtrar por fecha

## Autor

Edwin García  
spark.com.co@gmail.com

## Licencia

MIT - Ver [LICENSE](./LICENSE) para más detalles
