
# CRUD de Empresas con Angular, Node.js y MongoDB

![imagen](https://github.com/user-attachments/assets/00a39153-5bf8-4b91-bdbb-3712f6b27ce4)


## Descripción
Este proyecto consiste en un CRUD (Crear, Leer, Actualizar, Eliminar) de empresas, desarrollado utilizando Angular para el front-end y Node.js con Express para la construcción de la API. Los datos de las empresas se almacenan en MongoDB.
![imagen](https://github.com/user-attachments/assets/e6f3f034-2f71-4df1-82e9-b1f1ee8b495c)
![imagen](https://github.com/user-attachments/assets/e38ff7e8-0047-4b31-9d35-3949c2b72a60)
![imagen](https://github.com/user-attachments/assets/ae33506a-39cf-4475-ab29-5b50297db832)
![imagen](https://github.com/user-attachments/assets/b2c7f5e5-0472-4617-9329-a3e75d3f6c68)


## Requerimientos del Proyecto

### Backend
- Se debe construir una API con las siguientes características:
  1. Métodos HTTP implementados:
     - `GET`: Para obtener la lista de empresas y los detalles de una empresa específica.
     - `POST`: Para crear una nueva empresa.
     - `PUT`: Para actualizar los datos de una empresa existente.
     - `DELETE`: Para eliminar una empresa.
  2. Almacenamiento de datos de la empresa en una base de datos (utilizando MongoDB).
  3. Los campos para utilizar serán:
     - Nombre Comercial
     - Razón Social
     - Teléfono
     - Correo Electrónico
     - NIT
     - Estado
     - Dirección

### Frontend
- Instrucciones para el desarrollo del front-end utilizando Angular:
  1. **Mostrar el registro creado sin refrescar la página**:
     - La aplicación debe actualizar la lista de empresas de forma dinámica al crear, actualizar o eliminar una empresa.
  2. **Lista general de empresas**:
     - La lista debe mostrar todos los registros de empresas.
     - El fondo del registro debe cambiar según su numeración de registro:
       - Registros impares: color celeste.
       - Registros pares: color verde.
  3. **Pantalla de detalles de la empresa**:
     - Al hacer clic en una empresa, debe mostrarse una pantalla diferente con la información detallada de la empresa.
  4. **Edición de campos**:
     - Se debe permitir la edición de todos los campos excepto el correo electrónico.
  5. **Validación de campos y manejo de errores**:
     - La aplicación debe validar que todos los campos obligatorios se completen y manejar errores adecuadamente.
  6. **Diseño y maquetación**:
     - La interfaz debe seguir el diseño proporcionado.
  7. **Código en GitHub**:
     - El código fuente del proyecto debe ser subido a un repositorio en GitHub.

## Tecnologías Utilizadas
- **Frontend**: Angular 15
- **Backend**: Node.js, Express
- **Base de datos**: MongoDB

## Librerías a Instalar

### Backend
Para el backend, asegúrate de instalar las siguientes librerías en el directorio del backend:
moongose-cors
```bash
cd backend
npm install express mongoose cors body-parser
```

### Frontend
Para el frontend, asegúrate de instalar las siguientes librerías en el directorio del frontend:

```bash
cd frontend
ng add @angular/material
npm install @angular/forms @angular/http
```

## Instrucciones de Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/VivianRocio1996/Prueba-Angular-v2.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd Prueba-Angular-v2
   ```

3. Instala las dependencias del backend:
   ```bash
   cd company-management-backend
   npm install
   ```

4. Instala las dependencias del frontend:
   ```bash
   cd ../company-management-frontend
   npm install
   ```

5. Inicia el servidor del backend:
   ```bash
   cd backend
   node app.js
   ```

6. Inicia la aplicación del frontend:
   ```bash
   cd ../company-management-frontend
   ng serve
   ```
