# Use uma imagem base
FROM node:alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do seu projeto para o contêiner
COPY . .

# Instale as dependências do seu projeto
RUN yarn install

# Construa o aplicativo
RUN yarn build

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Inicie o aplicativo
CMD ["yarn", "start"]
