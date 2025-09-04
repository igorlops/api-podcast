# Podcast Manager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listas os episódios podcasts em sessões de categoria
- [saúde, fitness, mentalidade, humor]
- Filtrar episódeios por nome de podcast

## Como

### Feature:
Listas os episódios podcasts em sessões de categoria

#### Como vou implementar
Vou retornar em uma api rest o nome do podcast, nome do episódeio, imagem de capa, link, categoria

```js
[
    {
        "podcastName":"flow",
        "episode":"CBUM - Flow #319",
        "videoID":"pQSuQmUfS30"
        "cover":"https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link":"https://www.youtube.com/watch?v=pQSuQmUfS30"
        "category": ["saúde","bodybuilder"]
    },
    {
        "podcastName":"flow",
        "episode":"CBUM - Flow #319",
        "videoID":"pQSuQmUfS30"
        "cover":"https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link":"https://www.youtube.com/watch?v=pQSuQmUfS30"
        "category": ["saúde","bodybuilder"]
    },
    
]
```


Parei em Criando a Service