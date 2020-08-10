# Imagem de Origem
FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY . .

RUN npm install
RUN npm install create-react-app -g
RUN npm install axios
RUN npm install react-router-dom
EXPOSE 3000

# start app
CMD ["npm", "start"]

