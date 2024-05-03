FROM node:21.7.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 5173

CMD [ "npm", "run", "dev" ]