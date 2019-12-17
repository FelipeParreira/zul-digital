#####################
# DEVELOPMENT IMAGE #
#####################

# Pull base image
FROM node:12.13 AS builder

# Set environment variables
ENV TWEETS_API_URL https://n8e480hh63o547stou3ycz5lwz0958.herokuapp.com
ENV TWEETS_API_VERSION 1.1
ENV TWEETS_API_TOKEN_POSTFIX auth
ENV TWEETS_API_TWEETS_POSTFIX statuses/home_timeline.json

# Set work directory
WORKDIR /code

# Install dependencies
COPY ./package.json ./package-lock.json /code/
RUN npm install

# Copy project
COPY ./src ./tests /code/

# Run starting command
CMD ["npm", "run", "start-dev"]

#####################
# PRODUCTION IMAGE #
#####################

# Pull base image
FROM node:12.13 AS prod

# Set environment variables
# env variables should usually come from the deployment process
ENV TWEETS_API_URL https://n8e480hh63o547stou3ycz5lwz0958.herokuapp.com
ENV TWEETS_API_VERSION 1.1
ENV TWEETS_API_TOKEN_POSTFIX auth
ENV TWEETS_API_TWEETS_POSTFIX statuses/home_timeline.json

# Set work directory
WORKDIR /code

# Install dependencies
COPY ./package.json ./package-lock.json /code/
RUN npm install --only=production

# Copy source code
COPY src /code

# Run starting command
CMD ["npm", "run", "start"]