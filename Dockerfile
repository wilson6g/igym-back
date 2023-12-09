FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./

RUN npm install

COPY ./src ./src

RUN npm run build

CMD ["npm", "run", "start:prod"]