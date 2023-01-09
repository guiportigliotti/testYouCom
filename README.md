Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Teste Prático Landing Page youcom

Caso queira testar o servidor de desenvolvimento, execute o seguinte comando no terminal:

```bash
npm run dev
```
Caso queira testar o servidor de produção, execute os seguintes comandos no terminal:

```bash
npm run build

npm start
```

Acesse [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado

## Requisitos funcionais

Todos os requisitos funcionais solicitados foram implementados, é consumido um total de 100 produtos da API pública “DummyJSON”, utilizando a seguinte URL: '[https://dummyjson.com/products?limit=100](https://dummyjson.com/products?limit=100)' é passado o parâmetro *limit=100* para limitar a uma quantidade maior que a padrão da API de 30 produtos.

Os produtos mostrados na *landing page* estão limitados somente para artigos de vestuário, calçados e acessórios de moda, como solicitado. Após é realizado a verificação de estoque para mostrar somente produtos com uma quantia igual ou superior a 10 em estoque.

A validação de descontos também está funcional, todos os produtos que possuem desconto são calculados e renderizados em suas respectivas *product box*, artigos de calçados possuem uma validação extra para serem calculados somente se o desconto for de até 15%, caso o desconto seja superior, é mostrado somente o valor de lista do produto.

Existe um botão em formato de coração em cada *product box*, o qual serve para adicionar os produtos como favorito. A ideia inicial era utilizar o *sessionStorage* em conjunto para salvar os dados de quais produtos foram adicionados como favorito, para quando a página fosse recarregada esses produtos renderizassem com o botão preenchido, sinalizando que aquele produto já estava adicionado como favorito e vice e versa, porém, houveram alguns erros durante a implementação e utilização do *sessionStorage*, fazendo com que o botão funcione somente indicando que o produto está adicionado como favorito até que a página seja recarregada.

## Requisitos não funcionais

Como descrito anteriormente, não foi finalizado 100% da implementação do *sessionStorage*, foi possível criar dois ganchos para a utilização do mesmo (*getSessionStorage.ts* e *setSessionStorage.ts*), mas durante os testes o funcionamento dos dois ganchos não se mostrou totalmente funcional como o esperado.

Também foi definido o SSG do nextJs para 30 segundos de revalidação, porém, ao testar a funcionalidade no servidor de produção da aplicação a mesma não está funcional, a página continua recarregando os dados a cada *reload* e não a cada 30 segundos conforme definido.
