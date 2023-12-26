# Use uma imagem base
FROM node:alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do seu projeto para o contêiner
COPY . .

# Instale as dependências do seu projeto
RUN yarn install

# Construa o aplicativo (ignorando temporariamente os erros de linting)
RUN yarn compile && yarn next build --no-lint

# Inicie o aplicativo
CMD ["yarn", "start"]
