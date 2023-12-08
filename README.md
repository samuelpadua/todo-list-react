# Desafio -> Lista de Tarefas em React

O objetivo deste desafio é criar uma lista de tarefas com armazenamento persistente de dados. A lista de tarefas deve ser estilizada com [Tailwind CSS](https://tailwindcss.com/) e, também, suportar a adição/conclusão de tarefas.

Não existem regras ou limitações na UI/UX da aplicação, ela deve ser pensada para o usuário e conter uma separação visual clara dos componentes. O resultado final deve garantir uma interface: intuitiva, simples e funcional.

## Requisitos Funcionais

1. Adicionar tarefas a uma pilha;
2. Marcar tarefas como concluídas;
3. Na exibição da lista de tarefas:
   * As tarefas adicionadas devem ser ordernadas com a mais recente ao topo;
   * As tarefas concluídas devem ser ordernadas com a mais antiga ao topo.
4. No cabeçalho da aplicação, exibir a quantidade de tarefas adicionadas, concluídas (porcentagem) e pendentes (porcentagem);
   * Para as tarefas pendentes, se a porcentagem for `>= 50%` deve ser exibida em **vermelho**, caso contrário, em **verde**;
   * Para as tarefas concluídas, se a porcentagem for `>= 50%` deve ser exibida em **verde**, caso contrário, em **vermelho**.
5. O estado da lista de tarefas deve ser salvo/carregado automaticamente no armazenamento local;
6. Tornar possível migrar do modo claro para o modo escuro e vice-versa.

## Requisitos Não Funcionais

1. Utilizar NextJS, Tailwind e os React Hooks;
2. Utilizar `useEffect`, `useState`, `useCallback` e `useMemo` corretamente;
3. Seguir o padrão de projeto com ESLint, Prettier e organizar os recursos do projeto em pastas dentro de `/src/core`;
4. Utilizar Redux ou Contexto para gerenciar o estado da aplicação *- com TypeScript*;
5. As definições de tipos devem ser aplicadas em todos os componentes, funções e hooks;
6. Apresentar uma boa interface de usuário.

## Limitações de Desenvolvimento

1. Nenhuma consulta adicional a biblioteca do React, NextJS ou similares é permitida;
2. Somente a documentação oficial do [Tailwind CSS](https://tailwindcss.com/) pode ser consultada;
3. O padrão do ESLint e Prettier aplicado ao projeto deve ser respeitado e os arquivos de configuração não devem ser alterados;
4. Não é permitido adicionar libs de componentes do React ou similares.
