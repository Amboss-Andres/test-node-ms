FROM node:19.2.0-alpine3.15 AS base

WORKDIR /app

COPY .yarn ./.yarn/
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

COPY src ./src

EXPOSE 4000

FROM base AS test

COPY . .

CMD ["yarn", "test:ci"]

FROM base AS prod

COPY tsconfig.json ./
COPY types ./types

ENV NODE_ENV production

RUN ["yarn", "build"]
CMD ["node", "dist/main.js"]
