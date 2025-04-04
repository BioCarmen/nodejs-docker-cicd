FROM node:14.15.4-alpine3.10 AS builder
WORKDIR /usr/src/app
ADD app/. .
RUN npm install && npm run build

FROM node:14.15.4-alpine3.10
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
RUN npm install pm2 -g
COPY README.md .
CMD ["pm2-runtime", "dist/server.js"]
EXPOSE 3025