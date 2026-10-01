# 🍔 PedeZap

Cardápio digital desenvolvido para facilitar a visualização de produtos e a realização de pedidos pelo WhatsApp. O projeto utiliza HTML, CSS e JavaScript, com uma interface simples, organizada e responsiva.

## 🚀 Funcionalidades

* Exibição de produtos em um cardápio digital.
* Organização dos produtos por categorias:

  * Lanches
  * Salgados
  * Fritos
  * Doces
  * Bebidas
* Pesquisa de produtos pelo nome.
* Filtro de produtos por categoria.
* Adição de produtos ao carrinho.
* Controle da quantidade de cada produto.
* Remoção de itens do carrinho.
* Cálculo automático do valor total do pedido.
* Finalização do pedido pelo WhatsApp.
* Interface adaptável para computadores e dispositivos móveis.

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

## 📂 Estrutura do projeto

```text
pedezap-v1/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/GuilhermeImada2810/pedezap.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd pedezap
   ```

3. Abra a pasta no Visual Studio Code.

4. Execute o arquivo `index.html` no navegador ou utilize a extensão Live Server para visualizar a aplicação durante o desenvolvimento.

## 📱 Configuração do WhatsApp

Para receber os pedidos no número correto, abra o arquivo `script.js` e localize a variável `numeroWhatsApp`.

Substitua o número de exemplo pelo telefone da loja, incluindo o código do Brasil e o DDD, sem espaços ou caracteres especiais.

Exemplo:

```javascript
const numeroWhatsApp = "5516999999999";
```

O número acima é apenas ilustrativo. Substitua-o pelo telefone real do estabelecimento.

## 📄 Arquivos principais

* **index.html:** contém a estrutura da página, o cardápio, as categorias, a pesquisa e o carrinho.
* **style.css:** define as cores, os estilos dos componentes, o layout e a responsividade.
* **script.js:** controla os produtos, os filtros, a pesquisa, as quantidades, o carrinho e o envio dos pedidos pelo WhatsApp.

## 🎯 Objetivo do projeto

O PedeZap tem como objetivo facilitar o atendimento de pequenos estabelecimentos por meio de um cardápio digital intuitivo, permitindo que os clientes consultem produtos, organizem seus pedidos e entrem em contato com a loja pelo WhatsApp.

O projeto também permite aplicar conhecimentos de desenvolvimento web, lógica de programação, estilização de interfaces e controle de versão.

## 🔮 Melhorias futuras

* Integração com banco de dados.
* Painel administrativo para gerenciamento dos produtos.
* Cadastro, edição e exclusão de itens.
* Controle de disponibilidade dos produtos.
* Persistência do carrinho de compras.
* Publicação da aplicação na internet.

## 👨‍💻 Autor

**Guilherme Imada**

GitHub: [GuilhermeImada2810](https://github.com/GuilhermeImada2810)

Repositório: [PedeZap](https://github.com/GuilhermeImada2810/pedezap)

---

Desenvolvido com HTML, CSS e JavaScript. 🚀
