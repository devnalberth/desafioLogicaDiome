# 🦸 Classificador de Nível de Herói

Desafio de lógica de programação da [DIO](https://www.dio.me/): a partir da quantidade de experiência (XP) de um herói, o programa determina em qual nível ele está e exibe o resultado no console.

## 🎯 Objetivo

Criar uma variável com o nome do herói e outra com a sua quantidade de experiência. Com base nesse valor, usar estruturas de decisão para classificar o herói em um dos níveis abaixo e mostrar a mensagem:

```
O Herói de nome {nome} está no nível de {nivel}
```

## 🏆 Tabela de níveis

| Experiência (XP)     | Nível      |
| -------------------- | ---------- |
| Até 1.000            | Ferro      |
| 1.001 a 2.000        | Bronze     |
| 2.001 a 5.000        | Prata      |
| 5.001 a 7.000        | Ouro       |
| 7.001 a 8.000        | Platina    |
| 8.001 a 9.000        | Ascendente |
| 9.001 a 10.000       | Imortal    |
| 10.001 ou mais       | Radiante   |

## 🧠 Conceitos aplicados

- **Variáveis**: `let` para guardar o nome, a experiência e o nível do herói.
- **Operadores de comparação**: `<=` e `>=` para checar os limites de cada faixa.
- **Operador lógico**: `&&` para combinar o limite inferior e o superior de uma faixa.
- **Estruturas de decisão**: cadeia de `if` / `else if` / `else` para escolher o nível.
- **Template literals**: interpolação com `` `${}` `` para montar a mensagem final.

## 🚀 Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# clone o repositório
git clone <url-do-repositorio>
cd LÓGICA

# execute o programa
node index.js
```

Saída esperada com os valores padrão (`Mario`, 4000 XP):

```
O Herói de nome Mario está no nível de Prata
```

Para testar outros heróis, altere as variáveis no início de [index.js](index.js):

```js
let nomeHeroi = "Mario";
let experienciaHeroi = 4000;
```

## 🧪 Exemplos

| Herói   | XP     | Resultado  |
| ------- | ------ | ---------- |
| Mario   | 4000   | Prata      |
| Link    | 800    | Ferro      |
| Samus   | 7500   | Platina    |
| Kratos  | 12000  | Radiante   |

> Se o valor de experiência não se encaixar em nenhuma faixa (por exemplo, um valor que não seja número), o nível exibido será **"Não identificado"**.

## 📁 Estrutura do projeto

```
.
├── index.js    # lógica de classificação do herói
└── README.md   # documentação do projeto
```

## 👤 Autor

Desenvolvido por **Nalberth** ([@devnalberth](https://github.com/devnalberth)) durante os estudos na DIO.
