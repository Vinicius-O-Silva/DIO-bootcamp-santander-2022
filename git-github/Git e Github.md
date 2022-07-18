# Git e Github

Primeiro gera uma chave SSH no terminal;

Depois conecta ela no agente SSH do site do github;

iniciando uma nova pasta

```
git init
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git add *
git commit -m "descrição do commit"
git remote add origin git@github.com:Vinicius-O-Silva/bootcamp-santander-2022.git
git push -u origin main
```

Comando para verificar o status do repositório

```
git status
git log
```

Verificação da lista de comandos:

```
git config --list
```

Dica para alterar o nome da branch padrão:

```
git branch -m "main"
```

Verificar o quais remote que tenho e o outro mostra se realmente estou conectado

```
git remote
git remote -v
```

**OBS: olhar futuramente submodules e subtrees, o que é?

Referências: https://git-scm.com/docs/git/pt_BR

