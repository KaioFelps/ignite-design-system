Mais informações em:
https://www.notion.so/Design-System-7e74157c49eb47c6884903ec7aee2d35

# Components

- [x] text
- [x] heading
- [x] box
- [x] button
- [x] textinput
- [x] textarea
- [x] checkbox
- [x] avatar
- [x] multistep

```json
"devDependencies": {
    "@ignite-ui/tokens": "*",
    "tsup": "^6.5.0",
    "typescript": "^4.9.5"
}
```

No exemplo acima utilizamos nossa própria biblioteca, e como usaremos no modelo monorepo, utilizamos * ao invés da versão para não especificar a versão, mas usar a versão mais recente salva localmente, não uma estática.

Uma **vantagem** do monorepo é que todas as dependências são gerenciadas de forma global: ao invés de ter as bibliotecas *typescript* e *tsup* instaladas duas vezes, temo-as apenas uma vez instaladas no package.json do diretório *root*, e uma única pasta node_modules que compartilhará os módulos entre ambos os pacotes.