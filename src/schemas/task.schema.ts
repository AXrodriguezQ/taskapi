// Importa los decoradores y funciones necesarios desde el paquete '@nestjs/mongoose'.
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// Define el esquema de la colección 'tasks' en la base de datos.
@Schema({
    timestamps: true // Agrega campos 'createdAt' y 'updatedAt' para rastrear las fechas de creación y actualización.
})
export class Task {
    // Decorador `@Prop` que define las propiedades del esquema.
    @Prop({
        unique: true, // Indica que el campo 'title' debe ser único en la colección.
        required: true, // Indica que el campo 'title' es obligatorio.
        trim: true // Elimina los espacios en blanco alrededor del valor del campo 'title'.
    })
    title: string; // Propiedad 'title' de tipo string.

    // Decorador `@Prop` que define las propiedades del esquema.
    @Prop({
        trim: true // Elimina los espacios en blanco alrededor del valor del campo 'description'.
    })
    description: string; // Propiedad 'description' de tipo string.

    // Decorador `@Prop` que define las propiedades del esquema.
    @Prop({
        default: false // Establece el valor predeterminado del campo 'done' como false.
    })
    done: boolean; // Propiedad 'done' de tipo booleano.
}

// Exporta el esquema de Mongoose para el modelo `Task` utilizando `SchemaFactory`.
export const TaskSchema = SchemaFactory.createForClass(Task);
