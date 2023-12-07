# Desafio 4  Escola DNC

Crie um repositório e garanta acesso fácil a seu projeto

Ferramentas para o Desenvolvimento

| HTML | CSS | REACT | SASS | VITE | JAVASCRIPT |
| --- | --- | --- | --- | --- | --- |

Antes de prosseguir com o projeto, é imprescindível realizar a instalação das dependências do React/Vite:

```jsx
npm install
npm run dev
```

# **1 - Criação da Branch**

Para iniciar o plano de aprimoramento da página, foi criada a branch "desafio4" para a implementação de testes e ajustes específicos.

# **2 - Oportunidade de Aprimoramento**

Identificou-se a possibilidade de incluir um campo de pesquisa para otimizar a busca na lista de tarefas.

Embora a lista atual tenha poucos itens, é previsto que, com a expansão, localizar um item específico na lista poderia tornar-se desafiador. Com essa melhoria, a busca de um item desejado será facilitada, bastando inserir algumas palavras-chave.

# **3 - Criação de componente Search.jsx**

Após a análise da oportunidade de aprimoramento, foi implementado um novo componente (Search.jsx) para proporcionar maior flexibilidade ao usuário na busca de informações. Agora, é possível realizar pesquisas de forma mais simples, utilizando palavras-chave.

```jsx
<div className='search' > 
      <h2>Pesquisar</h2>
      <input type="text"
      value={search} 
      onChange={(e)=> setSearch(e.target.value)}
      placeholder='Digite para Pesquisar'/>

    </div>
```

# **4 - Arquivo Gitignore**

Um processo essencial para o desafio é ocultar, por meio do arquivo .gitignore, alguns arquivos desnecessários para determinados usuários, proporcionando uma entrega apenas do necessário para interação com o projeto. Seguem abaixo os arquivos específicos a serem ignorados: guiaTodoList.txt

# 5 **- Transferência de Informações para a Branch (desafio4)**

Após concluir o desenvolvimento das melhorias na página, chegou o momento de integrar as alterações na branch 'desafio4'. De acordo com o objetivo do desafio, que consiste em trabalhar exclusivamente com a branch secundária e manter a principal ('main') intacta, não foi necessário aplicar o comando merge entre as branches.
