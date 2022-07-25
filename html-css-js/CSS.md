## CSS

Atalhos:

div.flex-container + Tab

```html
<div class="flex-container"> </div>
```

div.exemplo*3

```html
<div class="exemplo"></div>
<div class="exemplo"></div>
<div class="exemplo"></div>
```



### Display Flex

Qualquer tag sendo ela: div, span, h1, h2, ... a, aplicando o display: flex torna ela um elemento tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex items.

```css
.flex{
	display: flex;
}
```

O comportamento padrão do display flex é: O comportamento de cada item dentro do container vai ocupar apenas o **máximo do seu conteúdo**, e s**e abrigar dentro desse container** respeitando a **orientação em linha**. Podendo mudar  esse comportamento depois.

### Flex Direction

O comportamento padrão do flex direction é a **orientação horizontal**.

```css
/* row (padrão) / row-reverse / column / column-reverse */
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;
```

### Flex-Wrap

Propriedade que define se os itens devem ou não quebrar a linha. Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

**nowrap**: é o padrão, não permite quebra de linha.

**wrap**: permite quebra de linha assim que um dos flex itens não puder mais ser compactado.

**wrap-reverse**: permite quebra de linha assim que um dos flex itens não puder mais ser compactado, porém, na direção contrária da linha acima.

```css
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;
```

### Flex-flow

É a junção do Flex Direction + Flex-Wrap em uma mesma linha.

Ex: 

```css
exemplo {
    flex-flow: row-reverse wrap;
}
```

### Justify-Content

Se encarrega de alinhar os itens dentro do container de acordo com a direção pretendida e também trata da distribuição de espaçamento entre eles.
OBS: Caso seus itens esteja pcupando 100% de todo o container, ela não se aplica.

**flex-start**: início do container. 

**flex-end**: final do container.

**center**: ao centro do container.

**space-between**: cria um espaçamento igual entre os elementos.

**space-around**: os espaçamentos do meio são duas vezes maiores que o inicial e final.