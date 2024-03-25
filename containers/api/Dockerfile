FROM node:20-alpine

WORKDIR /usr/src/app


RUN npm install -g pnpm@8.15.1

## copy pnpm lock file
##COPY pnpm-lock.yaml $APP/pnpm-lock.yaml

COPY . .

RUN apk add --update --no-cache python3 py3-pip g++ make

RUN pnpm install --frozen-lockfile

RUN pnpm build

# make sure run after pnpm build completed to avoid break system packages
# Push client(only support pure text message)
RUN pip install apprise --break-system-packages

# remove unused source file
# RUN rm -rf src

EXPOSE 3030

CMD ["pnpm", "start:docker"]