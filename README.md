# Desafio -> Lista de Tarefas em React

O objetivo deste desafio é criar uma lista de tarefas com armazenamento persistente de dados. A lista de tarefas deve ser estilizada com [Tailwind CSS](https://tailwindcss.com/) e, também, suportar a adição/conclusão de tarefas.

Não existem regras ou limitações na UI/UX da aplicação, ela deve ser pensada para o usuário e conter uma separação visual clara dos componentes. O resultado final deve garantir uma interface: intuitiva, simples e funcional.

## Requisitos Funcionais

1. **[Obrigatório]** Adicionar tarefas a uma pilha;
2. **[Obrigatório]** Marcar tarefas como concluídas;
3. No cabeçalho da aplicação, exibir a quantidade de tarefas adicionadas, concluídas (porcentagem) e pendentes (porcentagem);
   * Para as tarefas pendentes, se a porcentagem for `>= 50%` deve ser exibida em **vermelho**, caso contrário, em **verde**;
   * Para as tarefas concluídas, se a porcentagem for `>= 50%` deve ser exibida em **verde**, caso contrário, em **vermelho**.
4. Na exibição da lista de tarefas:
   * As tarefas adicionadas devem ser ordernadas com a mais recente ao topo;
   * As tarefas concluídas devem ser ordernadas com a mais antiga ao topo.
5. O estado da lista de tarefas deve ser salvo/carregado automaticamente no armazenamento local;
6. Tornar possível migrar do modo claro para o modo escuro e vice-versa.

## Requisitos Não Funcionais

1. **[Obrigatório]** Utilizar `useEffect`, `useState`, `useCallback` e `useMemo` no projeto;
2. **[Obrigatório]** Seguir o padrão de projeto com ESLint, Prettier e organizar os recursos do projeto em pastas dentro de `/src/core`;
3. **[Obrigatório]** Utilizar Redux ou Contexto para gerenciar o estado da aplicação *- com TypeScript*;
4. **[Obrigatório]** As definições de tipos *- com TypeScript -* devem ser aplicadas em todos os componentes, funções e hooks;
5. Apresentar uma boa interface de usuário.

## Limitações de Desenvolvimento

1. É permitido consulta somente às documentações oficiais do [React](https://react.dev/), [Redux](https://redux.js.org/), [NextJS](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) e [Tailwind CSS](https://tailwindcss.com/);
2. Não é permitido o uso de ferramentas de inteligência artificial (como Chat GPT ou Github Copilot) e nem consultas no Google, fóruns ou similares;
3. Os arquivos de configuração não devem ser alterados, se necessário utilize o arquivo `.vscode/settings.json` para alinhar as configurações do seu VSCode com as configurações do projeto (ESLint, Prettier, etc);
4. Não é permitido adicionar nenhuma dependência ao projeto, somente as que já estão instaladas.
