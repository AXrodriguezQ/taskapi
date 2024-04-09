// Importa la clase `Module` desde el paquete '@nestjs/common'.
import { Module } from '@nestjs/common';
// Importa el módulo `TasksModule` desde el archivo './tasks/tasks.module'.
import { TasksModule } from './tasks/tasks.module';
// Importa el módulo `MongooseModule` desde el paquete '@nestjs/mongoose'.
import { MongooseModule } from '@nestjs/mongoose';

// Decorador `@Module` que define el módulo principal de la aplicación.
@Module({
  // Declara los módulos importados por este módulo.
  imports: [
    TasksModule, // Importa el módulo `TasksModule`.
    // Importa el módulo `MongooseModule` y configura la conexión a la base de datos MongoDB.
    // Utiliza el método `forRoot` para establecer la URI de conexión.
    MongooseModule.forRoot('mongodb://localhost:27017/'),
  ],
})
export class AppModule {} // Exporta la clase `AppModule`.
