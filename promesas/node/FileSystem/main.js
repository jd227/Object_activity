import fs from 'fs';

// Leer el archivo JSON existente
fs.readFile('data.json', 'utf-8', (error, data) => {
    if (error) {
        console.error('Hubo un error al leer el archivo', error);
        return;
    }

    let jsonData;
    try {
        // Parsear el contenido del archivo existente
        jsonData = JSON.parse(data);
    } catch (parseError) {
        console.error('Error al parsear el JSON', parseError);
        return;
    }

    // Nuevos datos a agregar al archivo existente
    const nuevosDatos = {
        "hobbies": ["programación", "lectura", "ciclismo"],
        "email": "juan.perez@nada.com"
    };

    // Agregar los nuevos datos al JSON existente
    Object.assign(jsonData, nuevosDatos);

    // Escribir de nuevo el archivo JSON existente
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf-8', (writeError) => {
        if (writeError) {
            console.error('Hubo un error al escribir el archivo', writeError);
        } else {
            console.log('Datos agregados correctamente');
        }
    });

    // Datos para el nuevo archivo JSON
    const nuevosDatosParaNuevoArchivo = {
        "nombre": "Ana López",
        "edad": 28,
        "ciudad": "Barcelona",
        "profesión": "Diseñadora gráfica",
        "hobbies": ["dibujo", "fotografía", "viajar"],
        "email": "ana.lopez@nada.com"
    };

    // Escribir el nuevo archivo JSON
    fs.writeFile('nuevo_data.json', JSON.stringify(nuevosDatosParaNuevoArchivo, null, 2), 'utf-8', (writeError) => {
        if (writeError) {
            console.error('Hubo un error al crear el nuevo archivo', writeError);
        } else {
            console.log('Nuevo archivo creado correctamente');
        }
    });
});
