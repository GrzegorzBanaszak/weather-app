# Etap 1: Budowanie aplikacji
FROM node:20-alpine AS builder

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiowanie plików konfiguracyjnych i instalacja zależności
COPY package*.json ./
RUN npm install

# Skopiowanie pozostałych plików źródłowych
COPY . .

# Ustawienie zmiennej środowiskowej
ARG VITE_API_WEATHER_API_KEY
ENV VITE_API_WEATHER_API_KEY=57f84e94ed1a24289730c9eb34aaf4c1

# Budowanie aplikacji
RUN npm run build

# Etap 2: Serwowanie aplikacji za pomocą nginx
FROM nginx:1.21-alpine

# Kopiowanie zbudowanej aplikacji z poprzedniego etapu
COPY --from=builder /app/dist /usr/share/nginx/html

# Konfiguracja nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Eksponowanie portu
EXPOSE 80

# Uruchomienie nginx
CMD ["nginx", "-g", "daemon off;"]