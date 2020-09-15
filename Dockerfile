FROM node:13.12

ENV NODE_ENV dev
RUN npm i -g npm@latest

RUN mkdir /build /app
ADD package.json /build

WORKDIR /build
RUN yarn install

ADD . /app
WORKDIR /app
RUN cp -r /build/node_modules /app/node_modules

CMD npm start
