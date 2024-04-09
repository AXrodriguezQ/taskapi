// Importa los decoradores y clases necesarias desde '@nestjs/common' y los DTOs.
import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service'; // Importa el servicio de tareas.
import { CreateTaskDto } from '../dto/create-task.dto'; // Importa el DTO para crear tareas.
import { UpdateTaskDto } from '../dto/update-task.dto'; // Importa el DTO para actualizar tareas.

// Define el controlador 'TasksController' con la ruta base 'tasks'.
@Controller('tasks')
export class TasksController {
    // Constructor que inyecta el servicio de tareas.
    constructor(private readonly taskService: TasksService) {}

    // Método para manejar las solicitudes GET a la ruta base 'tasks'.
    @Get()
    findAll() {
        return this.taskService.findAll(); // Llama al método 'findAll' del servicio para obtener todas las tareas.
    }

    // Método para manejar las solicitudes GET a una tarea específica por su ID.
    @Get(':id')
    async findOne(@Param('id') id:string) {
        const task = await this.taskService.findOne(id); // Llama al método 'findOne' del servicio para obtener una tarea por su ID.
        if (!task) {
            throw new NotFoundException('Task not found'); // Lanza una excepción si la tarea no se encuentra.
        }
        return task; // Devuelve la tarea encontrada.
    }

    // Método para manejar las solicitudes POST a la ruta base 'tasks'.
    @Post()
    async create(@Body() body: CreateTaskDto) {
        try {
            return await this.taskService.create(body); // Intenta crear una nueva tarea llamando al método 'create' del servicio.
        } catch (error) {
            if ( error.code === 11000 ) {
                throw new ConflictException('Task already exists'); // Lanza una excepción si la tarea ya existe.
            }
            throw error; // Lanza cualquier otro error.
        }
    }

    // Método para manejar las solicitudes PUT a una tarea específica por su ID.
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
        const task = await this.taskService.findOne(id); // Llama al método 'findOne' del servicio para obtener una tarea por su ID.
        if (!task) {
            throw new NotFoundException('Task not found'); // Lanza una excepción si la tarea no se encuentra.
        }
        return this.taskService.update(id, body); // Llama al método 'update' del servicio para actualizar la tarea.
    }

    // Método para manejar las solicitudes DELETE a una tarea específica por su ID.
    @Delete(':id')
    @HttpCode(204) // Establece el código de respuesta HTTP a 204 (No Content).
    async delete(@Param('id') id:string) {
        const task = await this.taskService.delete(id); // Llama al método 'delete' del servicio para eliminar la tarea.
        if (!task) {
            throw new NotFoundException('Task not found'); // Lanza una excepción si la tarea no se encuentra.
        }
        return task; // Devuelve la tarea eliminada.
    }
}
