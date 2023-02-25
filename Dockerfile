FROM node:16.14.0-alpine

WORKDIR /home/blogApp

COPY package*.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
