# PASO 1 -NODE JS
FROM node:20-alpine as builder
WORKDIR /TAREAS
COPY . .
RUN npm install
RUN npm run build

# PASO 2 NGINX
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /TAREAS/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]