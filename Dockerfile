FROM node

EXPOSE 8080
VOLUME ["/app"]

WORKDIR /app

RUN npm i web3
RUN npm i solc@0.8.4
RUN npm i @openzeppelin/contracts
RUN npm i cors

CMD npm run start