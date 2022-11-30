FROM node

WORKDIR /usr/app
COPY package.json  ./

RUN yarn
COPY prisma ./prisma
COPY .env ./
RUN  npx prisma generate
COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
