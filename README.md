# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Objetivo do projeto](#2-objetivo-do-projeto)
* [3. Interface com o usuário](#3-interface-com-usuário)
* [4. Definição de layout](#4-definição-layout)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.




## 2. Objetivo do projeto

Este projeto tem como objetivo o fornecimento de uma ferramenta rápida codificadora/decodificadora de mensagens, que permite que o usuário tenha sua mensagem cifrada ou decifrada de forma simples e rápida. 
Voltado para pessoas que desejam se comunicar entre si sem que terceiros entendam.




## 3. Interface com o usuário

A interface permite ao usuário:

* Eleger um número offset (chave secreta) indicando quantas posições de deslocamento de caracteres 
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada ou decifrada.
* Ver o resultado da mensagem cifrada ou decifrada.




## 4. Definição de layout

O processo de criação foi desenvolvido, buscando oferecer ao usuário uma experiência intuitiva e prática. 
Foi definido como plano de fundo uma imagem temática de um cadeado e a cor azul foi priorizada para transmitir tranquilidade e serenidade ao usuário.

