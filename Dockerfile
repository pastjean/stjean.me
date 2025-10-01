FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production && npm i --save-dev lightningcss-linux-x64-musl

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]