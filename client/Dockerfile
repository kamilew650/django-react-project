FROM node:12.13-alpine

WORKDIR /usr/website

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY src src/
COPY public public/


EXPOSE 3000

CMD ["yarn", "start"]