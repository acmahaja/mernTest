FROM node:16
WORKDIR /server
COPY ./server .
RUN npm install
EXPOSE 3001
CMD ["npm", "run", "start"]