# PedeZap

Catálogo digital simples para lanchonetes, doceiras e pequenas lojas. Os produtos são agrupados por categoria, podem ser adicionados ao carrinho e enviados como pedido pelo WhatsApp.

## Como rodar

1. Abra o arquivo `index.html` no navegador.
2. Escolha os produtos usando os botões `+` e `−`.
3. Informe seu nome e, se quiser, uma observação.
4. Clique em **Enviar pedido** para abrir o WhatsApp com a mensagem pronta.

O carrinho fica salvo no armazenamento local do navegador. Ele permanece disponível no mesmo navegador e dispositivo.

## Tecnologias

- HTML
- CSS
- JavaScript puro
- `localStorage` do navegador

Não é necessário instalar programas, bibliotecas ou dependências para abrir o catálogo.

## Personalização

- Em `script.js`, edite o array `produtos`. O preço deve ser informado em centavos: `1250` representa R$ 12,50.
- Troque a constante `numeroWhatsApp` pelo número da loja, com código do país e DDD, sem espaços ou símbolos.
- Em `index.html`, altere o nome e as informações da loja.
- Em `style.css`, a variável `--cor-destaque` define a cor principal.

## Próximos passos

- Testar o catálogo com os produtos e o número reais da loja em diferentes celulares.
- Definir informações de entrega, horários e formas de pagamento.
- Avaliar uma integração com serviços externos caso seja necessário gerenciar pedidos, estoque ou pagamentos.
