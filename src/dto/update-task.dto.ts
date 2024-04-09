// Importa los decoradores de validación desde el paquete 'class-validator'.
import { IsBoolean, IsOptional, IsString } from "class-validator";

// Define la clase 'UpdateTaskDto', que representa el DTO para actualizar una tarea existente.
export class UpdateTaskDto {
    // Decorador `@IsString()` que valida que el valor del campo 'title' sea de tipo string.
    @IsString()
    // Decorador `@IsOptional()` que indica que el campo 'title' es opcional.
    @IsOptional()
    title?: string; // Propiedad 'title' de tipo string (opcional).

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
