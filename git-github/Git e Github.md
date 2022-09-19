# Git e Github

A chave SSh será "guardada" no site do Github em: Settings -> SSH and GPG keys.

https://docs.github.com/pt/authentication/connecting-to-github-with-ssh

#### Primeiro gera uma chave SSH no terminal:

```
ssh-keygen -t ed25519 -C "your_email@example.com"
Generating public/private algorithm key pair.
Enter a file in which to save the key (/home/you/.ssh/algorithm): [Press enter]
//crie uma senha segura
```

OBS: no curso de Git da DIO o professor abre e copia a chave ssh:

```
cd /home/vinicius/.ssh/
ls
cat id_ed25519.pub
//Ele copia a chave e cola na pagina do github na parte de new SSH Key
```

#### Adicionando sua chave SSH ao agente ssh

Antes de adicionar uma nova chave SSH ao agente ssh para gerenciar suas chaves, você deve ter verificado as chaves SSH existentes e gerado uma nova chave SSH.

Ativa o agente:

```
$ eval "$(ssh-agent -s)"
> Agent pid 59566
ssh-add ~/.ssh/id_ed25519
//inserir a senha segura
```

## Iniciando um novo projeto em nova pasta

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

Fazendo pull (problema com a versão remota da versão local)

```
git pull origin master
```

## Clonando um projeto de outro repositório usando SSH.

Cria uma pasta reservada para o clone, abre ela no terminal;

Copia o SSH do github e cola com o seguinte código:

```
~/pasta$ git clone <SSHdoGitHub>
```

Ele vai reclamar do Host, que é um host diferente, e pergunta se deseja adicionar a assinatura desse host.  Se sim digita **yes**, caso não, digita **no**.

**OBS: olhar futuramente submodules e subtrees, o que é?

Referências: https://git-scm.com/docs/git/pt_BR

