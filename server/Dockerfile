FROM node:12.13-alpine

WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm install

# Copy app config files
COPY tsconfig.json tsconfig.build.json ./

# Copy lint and prettier config files
COPY .prettierrc ./

# Copy app sources
COPY src src/

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start:prod"]