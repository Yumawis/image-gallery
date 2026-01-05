# 📸 Image Gallery

Aplicación web full-stack para la carga y visualización de imágenes, que permite a los usuarios subir fotos desde una interfaz web y acceder a una galería personal asociada a su correo electrónico.
Las imágenes se presentan en un formato de mosaico o galería, facilitando su visualización.

---

## ⚙️ Tecnologías utilizadas

**Frontend:**
- ⚛️ React.js
- ⚡ Vite.js
- 💅 Styled Components / Material UI
- 🧩 Formik (para formularios)

**Backend:**
- 🧪 Node.js
- 🚀 Express.js
- 🧪 Mongoose (para MongoDB)
- 🔄 Cors
- 🟢 Nodemon

---

## 🚀 Instalación y ejecución

### 1️⃣ Clona el repositorio
```bash
git clone https://github.com/Yumawis/image-gallery.git
cd image-gallery
```

### 2️⃣ Instala las dependencias
Instala las del **frontend** y **backend** por separado:
```bash
cd frontend
pnpm install

cd ../backend
pnpm install
```

### 3️⃣ Ejecuta el backend
```bash
pnpm dev
```
Esto levantará el servidor Express en el puerto configurado (por defecto 5000).

### 4️⃣ Ejecuta el frontend
```bash
cd ../frontend
pnpm run dev
```
Esto iniciará la aplicación React.js (por defecto en `http://localhost:5173`).

---

## 🧩 Ejemplo de uso

1. El usuario ingresa a la aplicación.
2. Se autentica con su correo electrónico si no está registrado se puede registrar.
3. Luego de ingresar se verá una pantalla que muestra en forma de mosaico las imágenes registradas en caso de tener imágenes.
4. Para subir una nueva imagen, desde la pagina principal hacer click en el botón de añadir imagen, este abrirá un modal.
5. En el modal se sube la imagen desde los archivos del usuario.
6. Automáticamente la imagen se verá reflejada en el mosaico. 

---

## 🧑‍💻 Autor

**Yury Martinez**  
Fullstack & UI Designer  
📍 Colombia  
💼 [GitHub](https://github.com/Yumawis) 
