# Desafio para vaga de desenvolvedor Mobile ON GO
## Considerações Gerais

* Sua aplicação Web deverá ser desenvolvida em React Native + Typescript.

* Devemos ser capazes de executar sua solução em uma VM limpa, com scripts de automatização de tarefas como Make, Shell Script ou similares. Esses scripts devem ser suficientes para rodarmos sua solução.

* Windows 10, Android

* No seu README, você deverá fazer uma explicação sobre a solução encontrada, tecnologias envolvidas e instrução de uso da solução. 

* É interessante que você também registre ideias que gostaria de implementar caso tivesse mais tempo.

## Problema

Imagine que você ficou responsável por contruir um Aplicativo que seja capaz de registrar alguns Endereços do seu cliente para uso em outras áreas futuramente. Seu cliente também deseja que na solução ele possa visualizar esses registros de forma clara.

Documentação da API: https://documenter.getpostman.com/view/3812853/TzK15ZxU

## Requisitos

* Sua solução deverá ser capaz de controlar a autenticação do usuário através de login

* A Cidade e Estado devem ser capturada automaticamente pelo CEP Informado.

* Para visualização desses dados, sua solução deve possuir:
    * Uma Listagem que mostre todos os registros de Terminais.
    * Uma Página detalhada dos dados do Terminal

* Sua Aplicação deverá permitir pesquisas pelo nome dos Terminais

* Sua Aplicação deverá exibir um mapa com marcador para que seja posicionado e capturado a Latitude e Longitude exata e também pode ser capturada pela localização atual do dispositivo.

* Sua solução deve permitir que o usuário altere dados de determinado Terminal

* Sua Aplicação deverá utilizar API's como ViaCep, IBGE, entre outras para consulta e preenchimento automatico de dados de Estado, cidade a partir do CEP Informado.

## Diferenciais

* Utilização de Redux + Axios

* Utilização de React Hooks

* Desenvolver testes automatizados ( storybook, entre outras bibliotecas que desejar e tiver conhecimento )

## Avaliação

Nossa equipe de desenvolvedores irá avaliar código, simplicidade da solução, testes unitários, arquitetura e automatização de tarefas.

Tente automatizar ao máximo sua solução. Isso porque no caso de deploy em vários servidores, não é interessante que tenhamos que entrar de máquina em máquina para instalar cada componente da solução.

Em caso de dúvida, entre em contato com o responsável pelo seu processo seletivo.
