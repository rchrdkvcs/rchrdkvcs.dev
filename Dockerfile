FROM node:24-alpine AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM build AS production
COPY --from=build /app/.output /app
EXPOSE 80/tcp
ENTRYPOINT [ "node", "./server/index.mjs" ]
