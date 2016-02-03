FROM klickrent/minimalnode:4.24

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install request

# Bundle app source
COPY . /usr/src/app

CMD [ "npm", "start" ]
