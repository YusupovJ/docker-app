FROM node:24-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "npm", "run", "dev" ]

FROM node:24-alpine AS build
WORKDIR /app
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
WORKDIR /app
COPY --from=build /app/dist /usr/share/nginx/html
