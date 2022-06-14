FROM node:14

WORKDIR /app

RUN npm install -g gatsby-cli
COPY package*.json ./
RUN yarn install
COPY . ./
CMD ["npm", "start"]

