# Frontend Build
FROM node:9-alpine

WORKDIR /src

COPY ./package.json ./yarn.lock /src/

RUN set -x \
    && yarn

COPY . /src/

RUN set -x \
    && yarn lint \
    && yarn build

# Imagem final
FROM node:9-alpine

WORKDIR /src

ENV BASE_DIR=./build

COPY --from=0 /src/dist /src/
COPY --from=1 /src/build /src/build

CMD ["node", "server.js"]