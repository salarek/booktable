FROM node:fermium-buster-slim

WORKDIR /usr/src/front

COPY package*.json ./
COPY yarn.lock ./
# COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn","serve"]
