# FROM node:20.10.0-alpine AS feimage

# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json /app/package.json
# RUN npm install
# RUN npm install @vue/cli@3.7.0 -g
# COPY . /app
# RUN npm run build

# FROM nginx:1.23-alpine
# COPY --from=feimage /app/dist /usr/share/nginx/html
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# Multi-stage build
FROM node:20.10.0-alpine AS feimage

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN yarn install
RUN yarn global add @vue/cli@3.7.0
COPY . /app
RUN yarn build

# Tahap kedua: Membangun image Nginx
FROM nginx:1.23-alpine

# Salin output build dari tahap pertama ke direktori kerja Nginx
COPY --from=feimage /app/dist /usr/share/nginx/html

# Ekspos port 80
EXPOSE 80

# Perintah yang akan dijalankan ketika kontainer dimulai
CMD ["nginx", "-g", "daemon off;"]
