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

### Align-items

Trata do alinhamento dos flex itens de acordo com o eixo do container. O alinhamento é diferente para quando os itens estão em colunas ou linhas.
Permite o alinhamento central no eixo vertical.

**center**: alinhamento dos itens ao centro;
**stretch**: (padrão) os flex itens cresçam igualmente;
**flex-start**: alinhamento dos itens no início;
**flex-end**: alinhamento dos itens no final
**baseline**: alinhamento de acordo com a linha base da tipografia dos itens.


### Align-content

**stretch**: (padrão) os flex itens cresçam igualmente;
**center**: alinhamento dos itens ao centro;
**flex-start**: alinhamento dos itens no início;
**flex-end**: alinhamento dos itens no final
**space-between**: cria um espaçamento igual entre os elementos.
**space-around**: os espaçamentos do meio são duas vezes maiores que o inicial e final.

## Flex-items

### Flex-grow

### Flex-basis

### Flex-shrink

### Flex
É o atalho ou abreviação de escrita para as propriedades: grow, basis e shrink.
grow: 1, basis: auto, shrink: 0.

 flex: 1;
grow: 1, shrink: 1, basis: 0

 flex: 2;
grow: 2, shrink: 1, basis: 0

### Align-self
É a propriedade que estabelece o alinhamento de modo individual sobre um determinado item.

**auto**:(padrão) irá respeitar a definição de aligh-items do container.
**flex-start**: ao início do container;
**flex-end**: ao final do container;
**center**: relativo ao centro de acordo com o eixo;
**stretch**: ocupa todo os espaço relativo;
**baseline**: utiliza a linha base da tipografia