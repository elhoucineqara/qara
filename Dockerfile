# Étape 1 : Build de l'application
FROM node:18 AS builder

# Dossier de travail
WORKDIR /app

# Copier les fichiers
COPY . .

# Installer les dépendances
RUN npm install

# Builder le projet (avec SvelteKit + adapter-static)
RUN npm run build

# Étape 2 : Serveur nginx pour servir le site statique
FROM nginx:alpine

# Supprimer le contenu par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers du build vers nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copier la config nginx personnalisée (optionnel)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port HTTP
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
