FROM node:12
WORKDIR /home/samghalee1/Chatbot_Server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [" node", "app.js"]