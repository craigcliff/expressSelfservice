FROM node:carbon

ADD . /app
WORKDIR /app

RUN npm install

ARG APP_NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}
RUN npm run build

EXPOSE 3003

CMD ["npm", "run", "start"]