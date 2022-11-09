FROM node:16
WORKDIR /client
COPY ./client .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]