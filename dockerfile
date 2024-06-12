# Use uma imagem base mínima para construção
FROM node:20-alpine AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie apenas os arquivos necessários para instalar as dependências
COPY package.json yarn.lock ./

# Instale as dependências do projeto
RUN yarn install --frozen-lockfile

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Construa o aplicativo
RUN yarn build

# Adicione um comando para listar os arquivos na pasta /app para verificar a presença da pasta .next
RUN ls -la /app

# Use uma imagem base mínima para produção
FROM node:20-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie apenas os arquivos necessários da fase de construção
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Inicie o aplicativo
CMD ["yarn", "start"]


#MINHAS ALTERAÇÕES FORAM PARA OTIMIZAR A BUILD DA APLICAÇÃO.