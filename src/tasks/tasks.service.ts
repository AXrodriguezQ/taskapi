// Importa el decorador `Injectable` desde el paquete '@nestjs/common'.
import { Injectable } from '@nestjs/common';
// Importa el decorador `InjectModel` desde el paquete '@nestjs/mongoose'.
import { InjectModel } from '@nestjs/mongoose';
// Importa la clase `Model` desde el paquete 'mongoose'.
import { Model } from 'mongoose';
// Importa los DTOs `CreateTaskDto` y `UpdateTaskDto` desde los archivos correspondientes.
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
// Importa el modelo `Task` desde el archivo 'task.schema'.
import { Task } from '../schemas/task.schema';

// Define el servicio `TasksService` utilizando el decorador `Injectable`.
@Injectable()
export class TasksService {
    // Constructor del servicio que inyecta el modelo `Task` como una dependencia.
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    // Método para obtener todas las tareas.
    findAll() {
        return this.taskModel.find(); // Utiliza el método `find` del modelo para buscar todas las tareas en la base de datos.
    }

    // Método para crear una nueva tarea.
    async create(createTask: CreateTaskDto) {
        const newTask = new this.taskModel(createTask); // Crea una nueva instancia de la tarea utilizando el modelo.
        return newTask.save(); // Guarda la nueva tarea en la base de datos.
    }

    // Método para obtener una tarea por su ID.
    async findOne(id: string) {
        return this.taskModel.findById(id); // Utiliza el método `findById` del modelo para buscar una tarea por su ID.
    }

    // Método para actualizar una tarea existente.
    async update(id: string, task: UpdateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, task, { new: true }); // Utiliza el método `findByIdAndUpdate` del modelo para actualizar una tarea por su ID.
    }

    // Método para eliminar una tarea por su ID.
    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id); // Utiliza el método `findByIdAndDelete` del modelo para eliminar una tarea por su ID.
    }
}
