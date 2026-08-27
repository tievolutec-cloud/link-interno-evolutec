# LinkHub Evolutec — versão simples

Projeto de página de links moderna, sem banco de dados, sem Supabase, sem login e sem confirmação de e-mail.

## Como editar

Abra o arquivo:

```text
data/site.ts
```

Nele você altera:

- nome;
- usuário;
- descrição;
- logo;
- links;
- categorias;
- ícones;
- etiquetas;
- cores dos cards.

Para trocar a logo, substitua o arquivo:

```text
public/logo.svg
```

Você também pode usar PNG ou JPG. Nesse caso, coloque a imagem na pasta `public` e atualize o campo `avatar` em `data/site.ts`.

## Publicar na Vercel

1. Crie um repositório vazio no GitHub.
2. Envie todos os arquivos deste projeto para a raiz do repositório.
3. Na Vercel, clique em **Add New → Project**.
4. Importe o repositório.
5. Clique em **Deploy**.

Não precisa cadastrar variáveis de ambiente.

## Criar outra página

Duplique o repositório ou envie uma nova cópia deste projeto para outro repositório. Depois altere somente `data/site.ts` e a logo.

Exemplos:

- `link.evolutec.org` → página pública;
- `interno.evolutec.org` → links internos;
- outro projeto → página de um cliente.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.
