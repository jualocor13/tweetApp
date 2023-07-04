FROM node:16.17.1 AS build
WORKDIR /app/front-end
COPY package.json ./
RUN npm install --force
COPY . .
RUN npm run build --prod

FROM nginx:1.17.1-alpine
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/front-end/dist/basket-league .