FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install -g npm@9.7.2

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]