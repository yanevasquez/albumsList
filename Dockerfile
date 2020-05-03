
FROM node:lts-alpine

WORKDIR /app

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

RUN npm run build

CMD ["npm", "run", "serve"]