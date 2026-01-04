# Gam3r.store - formação.dev full stack / cod3r - 2024

<img src="./img/imagehome.png" width="100%" alt="Home da loja" />
<br />
<img src="./img/image.png" width="100%" alt="Detalhes do produto" />

projeto e-commerce desenvolvido com Next.js (Frontend) e NestJS (Backend), utilizando TurboRepo para gerenciamento do monorepo.

- Node.js
- PostgreSQL 


 Instale as dependências na raiz do projeto:
   ```bash
   npm install
   ```


O projeto utiliza Prisma com PostgreSQL.

### opção 1: via docker 

basta rodar na raiz:

```bash
docker-compose up -d
```
subirá um container com o PostgreSQL pronto para uso.

### Opção 2: PostgreSQL Local

PostgreSQL no Windows:
1. Certifique-se que o serviço do Postgres está rodando.
2. Crie um banco de dados chamado `gstore`.

## Configuração do Ambiente

1. Crie o arquivo `.env` em `apps/backend/.env` (se não existir).
2. Configure a variável `DATABASE_URL`.

exemplo para docker ou Local (com senha 'password'):
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/gstore?schema=public"
```

### migrations e seed

com o banco rodando e o .env configurado, execute os comandos abaixo para criar as tabelas e popular o banco:

```bash
cd apps/backend
npx prisma migrate dev
npx prisma db seed
cd ../..
```

volte para a raiz do projeto e inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O TurboRepo iniciará:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3005](http://localhost:3005)

## estrutura do projeto

- apps/frontend: aplicação next.js (Loja virtual)
- apps/backend: API NestJS
- packages/core: lógica de negócios compartilhada 
- packages/ui: componentes de UI compartilhados
