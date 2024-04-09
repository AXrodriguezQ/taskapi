// Importa los decoradores de validación desde el paquete 'class-validator'.
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

// Define la clase 'CreateTaskDto', que representa el DTO para crear una nueva tarea.
export class CreateTaskDto {
    // Decorador `@IsString()` que valida que el valor del campo 'title' sea de tipo string.
    @IsString()
    // Decorador `@IsNotEmpty()` que valida que el campo 'title' no esté vacío.
    @IsNotEmpty()
    title: string; // Propiedad 'title' de tipo string.

    // Decorador `@IsString()` que valida que el valor del campo 'description' sea de tipo string.
    @IsString()
    // Decorador `@IsOptional()` que indica que el campo 'description' es opcional.
    @IsOptional()
    description?: string; // Propiedad 'description' de tipo string (opcional).

    // Decorador `@IsBoolean()` que valida que el valor del campo 'done' sea de tipo booleano.
    @IsBoolean()
    // Decorador `@IsOptional()` que indica que el campo 'done' es opcional.
    @IsOptional()
    done?: boolean; // Propiedad 'done' de tipo booleano (opcional).
}
