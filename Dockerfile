# Usar una imagen de Node.js como base
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Compilar la aplicación de React
RUN npm run build

# Instalar un servidor web estático para servir la aplicación de React
RUN npm install -g serve

# Exponer el puerto en el que la aplicación será servida
EXPOSE 3000

# Comando para correr la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]

