## CSS

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
