// Importa la clase `NestFactory` desde el paquete '@nestjs/core'.
import { NestFactory } from '@nestjs/core';
// Importa la clase `AppModule` desde el archivo './app.module'.
import { AppModule } from './app.module';
// Importa la clase `ValidationPipe` desde el paquete '@nestjs/common'.
import { ValidationPipe } from '@nestjs/common';

// Función asincrónica `bootstrap` que inicializa la aplicación NestJS.
async function bootstrap() {
  // Crea una instancia de la aplicación llamando al método `create` de `NestFactory`
  // y pasando la clase `AppModule`.
  const app = await NestFactory.create(AppModule);
  
  // Habilita el CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde
  // otros dominios. Esto permite que el servidor acepte solicitudes de origen cruzado.
  app.enableCors();
  
  // Establece un prefijo global para todas las rutas de la aplicación. 
  // En este caso, todas las rutas comenzarán con '/api'.
  app.setGlobalPrefix('api');
  
  // Aplica un pipe de validación global a la aplicación.
  // Esto asegura que los datos recibidos en las solicitudes se validen automáticamente
  // según las reglas definidas en las clases DTO (Data Transfer Object).
  app.useGlobalPipes(new ValidationPipe());
  
  // Escucha en el puerto 3000 para manejar las solicitudes entrantes.
  await app.listen(3000);
}

// Llama a la función `bootstrap` para iniciar la aplicación.
bootstrap();
