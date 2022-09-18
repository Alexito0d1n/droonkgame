FROM node:18-alpine3.15

# set working directory
WORKDIR /app

# add app
COPY . .

# install app dependencies
RUN yarn install
RUN yarn run build

# start
CMD ["yarn", "run",  "start"]
