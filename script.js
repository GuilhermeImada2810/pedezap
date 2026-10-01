// Cadastre os produtos da loja neste array.
// Troque pelo número da loja com código do país e DDD, sem espaços ou símbolos.
const numeroWhatsApp = "5511999999999";

const produtos = [
  {
    id: 1,
    nome: "X-Burger da Vila",
    descricao: "Hambúrguer artesanal, queijo, alface e molho da casa.",
    preco: 1890,
    categoria: "Lanches"
  },
  {
    id: 2,
    nome: "Misto quente",
    descricao: "Pão na chapa com queijo e presunto.",
    preco: 1200,
    categoria: "Lanches"
  },
  {
    id: 3,
    nome: "Coxinha de frango",
    descricao: "Massa douradinha com recheio cremoso de frango.",
    preco: 750,
    categoria: "Salgados"
  },
  {
    id: 4,
    nome: "Pão de queijo",
    descricao: "Feito com queijo meia-cura, quentinho e macio.",
    preco: 600,
    categoria: "Salgados"
  },
  {
    id: 5,
    nome: "Brigadeiro gourmet",
    descricao: "Brigadeiro de chocolate com cacau e granulado.",
    preco: 650,
    categoria: "Doces"
  },
  {
    id: 6,
    nome: "Brownie da casa",
    descricao: "Brownie de chocolate com casquinha crocante.",
    preco: 900,
    categoria: "Doces"
  }
];

const chaveCarrinho = "pedezap-carrinho";

// Recupera apenas quantidades válidas dos produtos cadastrados.
function carregarCarrinho() {
  try {
    const carrinhoSalvo = JSON.parse(localStorage.getItem(chaveCarrinho) || "{}");
    const carrinhoCarregado = {};

    produtos.forEach(function (produto) {
      const quantidade = carrinhoSalvo[produto.id];

      if (Number.isInteger(quantidade) && quantidade > 0) {
        carrinhoCarregado[produto.id] = quantidade;
      }
    });

    return carrinhoCarregado;
  } catch (erro) {
    return {};
  }
}

// Grava o carrinho atual no navegador.
function salvarCarrinho() {
  localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
}

const carrinho = carregarCarrinho();

// Mostra os valores em reais sem perder os centavos.
function formatarPreco(valorCentavos) {
  const reais = Math.floor(valorCentavos / 100);
  const centavos = String(valorCentavos % 100).padStart(2, "0");
  return `R$ ${reais},${centavos}`;
}

// Cria uma seção para cada categoria encontrada nos produtos.
function mostrarProdutos() {
  const listaProdutos = document.querySelector("#lista-produtos");
  const categorias = {};

  produtos.forEach(function (produto) {
    if (!categorias[produto.categoria]) {
      categorias[produto.categoria] = [];
    }
    categorias[produto.categoria].push(produto);
  });

  Object.keys(categorias).forEach(function (nomeCategoria) {
    const secao = document.createElement("section");
    const titulo = document.createElement("h3");
    const lista = document.createElement("div");

    secao.className = "categoria";
    titulo.textContent = nomeCategoria;
    lista.className = "lista-itens";
    secao.appendChild(titulo);

    categorias[nomeCategoria].forEach(function (produto) {
      const item = document.createElement("article");
      const detalhes = document.createElement("div");
      const nome = document.createElement("h4");
      const descricao = document.createElement("p");
      const preco = document.createElement("span");
      const compra = document.createElement("div");
      const controles = document.createElement("div");
      const botaoMenos = document.createElement("button");
      const quantidade = document.createElement("span");
      const botaoMais = document.createElement("button");

      item.className = "produto";
      detalhes.className = "detalhes-produto";
      nome.textContent = produto.nome;
      descricao.textContent = produto.descricao;
      preco.className = "preco";
      preco.textContent = formatarPreco(produto.preco);
      compra.className = "produto-compra";
      controles.className = "controles-quantidade";
      botaoMenos.type = "button";
      botaoMenos.className = "botao-quantidade";
      botaoMenos.textContent = "−";
      botaoMenos.setAttribute("aria-label", "Diminuir " + produto.nome);
      botaoMenos.disabled = true;
      quantidade.className = "quantidade-produto";
      quantidade.id = "quantidade-" + produto.id;
      quantidade.textContent = "0";
      botaoMais.type = "button";
      botaoMais.className = "botao-quantidade";
      botaoMais.textContent = "+";
      botaoMais.setAttribute("aria-label", "Adicionar " + produto.nome);

      botaoMenos.addEventListener("click", function () {
        alterarQuantidade(produto.id, -1);
      });
      botaoMais.addEventListener("click", function () {
        alterarQuantidade(produto.id, 1);
      });

      detalhes.appendChild(nome);
      detalhes.appendChild(descricao);
      controles.appendChild(botaoMenos);
      controles.appendChild(quantidade);
      controles.appendChild(botaoMais);
      compra.appendChild(preco);
      compra.appendChild(controles);
      item.appendChild(detalhes);
      item.appendChild(compra);
      lista.appendChild(item);
    });

    secao.appendChild(lista);
    listaProdutos.appendChild(secao);
  });
}

// Atualiza a quantidade mostrada em cada produto.
function atualizarControles() {
  produtos.forEach(function (produto) {
    const quantidade = carrinho[produto.id] || 0;
    const textoQuantidade = document.getElementById("quantidade-" + produto.id);
    const botaoMenos = textoQuantidade.previousElementSibling;

    textoQuantidade.textContent = quantidade;
    botaoMenos.disabled = quantidade === 0;
  });
}

// Monta o resumo do carrinho e soma os valores em centavos.
function atualizarCarrinho() {
  const listaCarrinho = document.querySelector("#itens-carrinho");
  const textoQuantidade = document.querySelector("#quantidade-itens");
  const textoTotal = document.querySelector("#total-carrinho");
  const botaoEnviar = document.querySelector("#botao-enviar");
  const ids = Object.keys(carrinho);
  let totalItens = 0;

  listaCarrinho.textContent = "";

  if (ids.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "item-vazio";
    vazio.textContent = "Seu carrinho está vazio.";
    listaCarrinho.appendChild(vazio);
  }

  ids.forEach(function (id) {
    const produto = produtos.find(function (item) {
      return item.id === Number(id);
    });
    const quantidade = carrinho[id];
    const linha = document.createElement("div");
    const nome = document.createElement("span");
    const subtotal = document.createElement("span");
    const subtotalCentavos = produto.preco * quantidade;

    totalItens += quantidade;
    linha.className = "item-carrinho";
    nome.textContent = quantidade + "x " + produto.nome;
    subtotal.textContent = formatarPreco(subtotalCentavos);
    linha.appendChild(nome);
    linha.appendChild(subtotal);
    listaCarrinho.appendChild(linha);
  });

  textoQuantidade.textContent = totalItens + (totalItens === 1 ? " item" : " itens");
  textoTotal.textContent = formatarPreco(calcularTotal());
  botaoEnviar.disabled = ids.length === 0;
  atualizarControles();
}

// Calcula o valor do pedido sem converter centavos para reais.
function calcularTotal() {
  let totalCentavos = 0;

  Object.keys(carrinho).forEach(function (id) {
    const produto = produtos.find(function (item) {
      return item.id === Number(id);
    });
    totalCentavos += produto.preco * carrinho[id];
  });

  return totalCentavos;
}

// Soma ou remove uma unidade do produto escolhido.
function alterarQuantidade(id, mudanca) {
  const novaQuantidade = (carrinho[id] || 0) + mudanca;

  if (novaQuantidade <= 0) {
    delete carrinho[id];
  } else {
    carrinho[id] = novaQuantidade;
  }

  salvarCarrinho();
  atualizarCarrinho();
}

// Prepara o texto do pedido e abre uma conversa no WhatsApp.
function enviarPedido(evento) {
  evento.preventDefault();

  const nomeCliente = document.querySelector("#nome-cliente").value.trim();
  const observacao = document.querySelector("#observacao").value.trim();
  const ids = Object.keys(carrinho);

  if (ids.length === 0) {
    return;
  }

  if (nomeCliente === "") {
    alert("Digite seu nome para enviar o pedido.");
    document.querySelector("#nome-cliente").focus();
    return;
  }

  const linhasPedido = ["Olá! Quero fazer um pedido:"];

  ids.forEach(function (id) {
    const produto = produtos.find(function (item) {
      return item.id === Number(id);
    });
    const quantidade = carrinho[id];
    const subtotal = formatarPreco(produto.preco * quantidade);

    linhasPedido.push(quantidade + "x " + produto.nome + " — " + subtotal);
  });

  linhasPedido.push("Total: " + formatarPreco(calcularTotal()));
  linhasPedido.push("Nome: " + nomeCliente);
  linhasPedido.push("Obs: " + (observacao || "nenhuma"));

  const mensagem = linhasPedido.join("\n");
  const linkWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagem);

  window.open(linkWhatsApp, "_blank");
}

mostrarProdutos();
atualizarCarrinho();
document.querySelector("#form-pedido").addEventListener("submit", enviarPedido);
