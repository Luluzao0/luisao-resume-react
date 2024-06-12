# Use uma imagem base mínima para construção
FROM node:20-alpine AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Instale as dependências do sistema necessárias para o `sharp`
RUN apk add --no-cache \
  g++ \
  make \
  python3 \
  libc6-compat

# Copie apenas os arquivos necessários para instalar as dependências
COPY package.json yarn.lock ./

# Instale as dependências do projeto, incluindo sharp
RUN yarn install --frozen-lockfile

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Construa o aplicativo
RUN yarn build

# Remova node_modules para reinstalar apenas as dependências de produção
RUN rm -rf node_modules && yarn install --production --frozen-lockfile

# Adicione um comando para listar os arquivos na pasta /app para verificar a presença da pasta .next
RUN ls -la /app

# Use uma imagem base mínima para produção
FROM node:20-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Instale as dependências do sistema necessárias para o `sharp` no ambiente de produção
RUN apk add --no-cache \
  libc6-compat

# Copie apenas os arquivos necessários da fase de construção
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Inicie o aplicativo
CMD ["yarn", "start"]
