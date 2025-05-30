# Étape 1 : build
FROM node:18 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Étape 2 : serveur nginx
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

# Configuration nginx (optionnel)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
