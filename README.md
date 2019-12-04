# Prueba Backend Imaginamos

API rest de la prueba técnica para backend en **Imaginamos**

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

## Autor

Edwin García  
spark.com.co@gmail.com

## Licencia

MIT - Ver [LICENSE](./LICENSE) para más detalles
