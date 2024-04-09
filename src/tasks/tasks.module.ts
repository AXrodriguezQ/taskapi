// Importa el decorador `Module` desde el paquete '@nestjs/common'.
import { Module } from '@nestjs/common';
// Importa el controlador `TasksController` y el servicio `TasksService` desde los archivos correspondientes.
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
// Importa el módulo `MongooseModule` desde el paquete '@nestjs/mongoose'.
import { MongooseModule } from '@nestjs/mongoose';
// Importa el modelo `Task` y el esquema `TaskSchema` desde el archivo 'task.schema'.
import { Task, TaskSchema } from 'src/schemas/task.schema';

// Define el módulo 'TasksModule'.
@Module({
  // Importa el esquema `TaskSchema` como un modelo de Mongoose y lo registra en el contexto de este módulo.
  imports: [MongooseModule.forFeature([{name: Task.name, schema: TaskSchema}])],
  // Define los controladores que pertenecen a este módulo.
  controllers: [TasksController],
  // Define los servicios que pertenecen a este módulo.
  providers: [TasksService]
})
export class TasksModule {} // Exporta la clase 'TasksModule'.
