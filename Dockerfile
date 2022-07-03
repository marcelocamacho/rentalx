FROM node
WORKDIR /usr/app
COPY package.json .
RUN apt-get -qy update && \
    apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" upgrade && \
    apt-get install -qq -y yarn && \
    yarn
COPY . .
EXPOSE 3333
CMD ["yarn", "dev"]

#docker build -t rentalx .