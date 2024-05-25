# Proyecto Final To Do List

## Este proyecto esta creado con React, Bootstrap, Scss

## Instalacion directamente instalando todas las dependencias.
1. clonar el repositorio de github
2. Luego hacer la instalacion de de node.js puede ser descargado de la pagina de internet, la version mas estable y reciente
3. Intalar Bootstrap, con el siguiente comando: npm install react-bootstrap bootstrap--save
4. Luego instalamos sass con el comando: npm install sass --save
3. Para iniciar el servidor usamos: npm start y veremos corriendo el programa en el puerto 3000

## Instalacion con Contenedor Docker
1. Instalamos Docker desde la pagina oficial, segun nuestro sistema operativo, desde el siguiente enlace:
    https://www.docker.com/products/docker-desktop/

2. Cargamos la imagen de Node.Js con los siguientes comandos:
    FROM node:20-alpine as builder
    WORKDIR /TAREAS
    COPY . .
    RUN npm install
    RUN npm run build

3. Intalacion de imagen de NGINX
    FROM nginx:1.19.0
    WORKDIR /usr/share/nginx/html
    RUN rm -rf ./*
    COPY --from=builder /TAREAS/build .
    ENTRYPOINT [ "nginx","-g","daemon off;" ]

4. Levantar el contenedor, usando la carpeta src, que fue donde quedo el archivo dockerfile.
    docker build -f src/dockerfile -ty docker-react-image:1.0 .

5. Para usar el contenedor, con el siguiente codigo:
    docker run -p4000:80 --name docker-react-contaniner docker-react-image:1.0 .
    