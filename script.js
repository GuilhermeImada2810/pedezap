"use strict";

const numeroWhatsApp = "5511999999999"; // Troque pelo número real da loja.
const CHAVE_CARRINHO = "pedezap_carrinho_v2";

const produtos = [
  // LANCHES
  { id: 1, nome: "X-Burger", descricao: "Hambúrguer, queijo, molho especial e pão macio.", preco: 1800, categoria: "Lanches", emoji: "🍔" },
  { id: 2, nome: "X-Salada", descricao: "Hambúrguer, queijo, alface, tomate e maionese.", preco: 2000, categoria: "Lanches", emoji: "🥬" },
  { id: 3, nome: "X-Bacon", descricao: "Hambúrguer, queijo, bacon crocante e molho da casa.", preco: 2500, categoria: "Lanches", emoji: "🥓" },
  { id: 4, nome: "X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon e salada.", preco: 2900, categoria: "Lanches", emoji: "🍔" },
  { id: 5, nome: "Hambúrguer Artesanal", descricao: "Blend bovino, queijo, cebola caramelizada e molho especial.", preco: 3200, categoria: "Lanches", emoji: "🍔" },
  { id: 6, nome: "Misto-Quente", descricao: "Pão na chapa, presunto e queijo derretido.", preco: 1200, categoria: "Lanches", emoji: "🥪" },
  { id: 7, nome: "Sanduíche Natural de Frango", descricao: "Frango cremoso, alface e cenoura.", preco: 1400, categoria: "Lanches", emoji: "🥪" },
  { id: 8, nome: "Cachorro-Quente", descricao: "Pão, salsicha, molho, milho, batata palha e condimentos.", preco: 1500, categoria: "Lanches", emoji: "🌭" },
  { id: 9, nome: "Americano", descricao: "Presunto, queijo, ovo, alface e tomate.", preco: 1700, categoria: "Lanches", emoji: "🥪" },

  // SALGADOS
  { id: 10, nome: "Coxinha de Frango", descricao: "Massa dourada com recheio cremoso de frango.", preco: 700, categoria: "Salgados", emoji: "🍗" },
  { id: 11, nome: "Coxinha com Catupiry", descricao: "Frango temperado com recheio cremoso.", preco: 850, categoria: "Salgados", emoji: "🍗" },
  { id: 12, nome: "Empada de Frango", descricao: "Massa amanteigada com recheio de frango.", preco: 750, categoria: "Salgados", emoji: "🥧" },
  { id: 13, nome: "Esfiha de Carne", descricao: "Massa macia e recheio de carne temperada.", preco: 700, categoria: "Salgados", emoji: "🥟" },
  { id: 14, nome: "Esfiha de Queijo", descricao: "Massa assada com queijo derretido.", preco: 700, categoria: "Salgados", emoji: "🧀" },
  { id: 15, nome: "Enroladinho de Salsicha", descricao: "Massa assada recheada com salsicha.", preco: 650, categoria: "Salgados", emoji: "🌭" },
  { id: 16, nome: "Pão de Queijo", descricao: "Porção individual, assada e quentinha.", preco: 500, categoria: "Salgados", emoji: "🧀" },
  { id: 17, nome: "Quibe Assado", descricao: "Carne temperada com trigo e ervas.", preco: 700, categoria: "Salgados", emoji: "🥙" },

  // FRITOS
  { id: 18, nome: "Pastel de Queijo", descricao: "Massa crocante com queijo derretido.", preco: 1000, categoria: "Fritos", emoji: "🥟" },
  { id: 19, nome: "Pastel de Carne", descricao: "Recheio de carne moída bem temperada.", preco: 1000, categoria: "Fritos", emoji: "🥟" },
  { id: 20, nome: "Pastel de Frango com Catupiry", descricao: "Frango temperado com creme de queijo.", preco: 1300, categoria: "Fritos", emoji: "🥟" },
  { id: 21, nome: "Bolinha de Queijo", descricao: "Porção individual de salgado frito.", preco: 600, categoria: "Fritos", emoji: "🧀" },
  { id: 22, nome: "Kibe Frito", descricao: "Casquinha crocante e recheio temperado.", preco: 700, categoria: "Fritos", emoji: "🥙" },
  { id: 23, nome: "Batata Frita Pequena", descricao: "Batatas crocantes com sal.", preco: 1200, categoria: "Fritos", emoji: "🍟" },
  { id: 24, nome: "Batata Frita com Cheddar", descricao: "Batatas fritas cobertas com cheddar cremoso.", preco: 2000, categoria: "Fritos", emoji: "🍟" },

  // DOCES
  { id: 25, nome: "Brigadeiro", descricao: "Docinho tradicional de chocolate granulado.", preco: 350, categoria: "Doces", emoji: "🍫" },
  { id: 26, nome: "Beijinho", descricao: "Doce de coco finalizado com coco ralado.", preco: 350, categoria: "Doces", emoji: "🥥" },
  { id: 27, nome: "Brownie de Chocolate", descricao: "Brownie macio com sabor intenso de chocolate.", preco: 900, categoria: "Doces", emoji: "🍫" },
  { id: 28, nome: "Fatia de Bolo de Cenoura", descricao: "Bolo fofinho com cobertura de chocolate.", preco: 850, categoria: "Doces", emoji: "🍰" },
  { id: 29, nome: "Fatia de Bolo de Chocolate", descricao: "Bolo de chocolate com cobertura cremosa.", preco: 1000, categoria: "Doces", emoji: "🍰" },
  { id: 30, nome: "Pudim", descricao: "Fatia de pudim com calda de caramelo.", preco: 900, categoria: "Doces", emoji: "🍮" },
  { id: 31, nome: "Açaí 300 ml", descricao: "Açaí servido no copo.", preco: 1600, categoria: "Doces", emoji: "🍧" },

  // BEBIDAS
  { id: 32, nome: "Água Mineral 500 ml", descricao: "Água mineral sem gás.", preco: 350, categoria: "Bebidas", emoji: "💧" },
  { id: 33, nome: "Refrigerante Lata 350 ml", descricao: "Consulte as opções disponíveis na loja.", preco: 650, categoria: "Bebidas", emoji: "🥤" },
  { id: 34, nome: "Refrigerante 600 ml", descricao: "Refrigerante gelado para acompanhar seu lanche.", preco: 850, categoria: "Bebidas", emoji: "🥤" },
  { id: 35, nome: "Suco Natural 300 ml", descricao: "Consulte os sabores disponíveis.", preco: 800, categoria: "Bebidas", emoji: "🧃" },
  { id: 36, nome: "Café Expresso", descricao: "Café servido quentinho.", preco: 500, categoria: "Bebidas", emoji: "☕" }
];

const categorias = ["Lanches", "Salgados", "Fritos", "Doces", "Bebidas"];

const estado = {
  categoria: "Todos",
  pesquisa: "",
  carrinho: carregarCarrinho()
};

const elementos = {
  lista: document.getElementById("listaProdutos"),
  categorias: document.getElementById("categoriasMenu"),
  pesquisa: document.getElementById("pesquisaProduto"),
  contadorProdutos: document.getElementById("contadorProdutos"),
  itensCarrinho: document.getElementById("itensCarrinho"),
  contadorCarrinho: document.getElementById("contadorCarrinho"),
  totalCarrinho: document.getElementById("totalCarrinho"),
  nome: document.getElementById("nomeCliente"),
  observacao: document.getElementById("observacaoPedido"),
  formulario: document.getElementById("formPedido"),
  botaoEnviar: document.getElementById("botaoEnviar"),
  mensagemStatus: document.getElementById("mensagemStatus"),
  atalhoCarrinho: document.getElementById("atalhoCarrinho"),
  atalhoQuantidade: document.getElementById("atalhoQuantidade")
};

/* ==========================================
   FUNÇÕES AUXILIARES
   ========================================== */

function dinheiro(centavos) {
  return (centavos / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function carregarCarrinho() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_CARRINHO) || "{}");

    if (!dados || typeof dados !== "object" || Array.isArray(dados)) {
      return {};
    }

    const carrinho = {};

    for (const produto of produtos) {
      const quantidade = Number(dados[produto.id]);

      if (Number.isInteger(quantidade) && quantidade > 0 && quantidade <= 99) {
        carrinho[produto.id] = quantidade;
      }
    }

    return carrinho;
  } catch {
    return {};
  }
}

function salvarCarrinho() {
  try {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(estado.carrinho));
  } catch {
    elementos.mensagemStatus.textContent =
      "Não foi possível salvar o carrinho neste navegador.";
  }
}

function quantidadeTotal() {
  return Object.values(estado.carrinho).reduce(
    (total, quantidade) => total + quantidade,
    0
  );
}

function totalEmCentavos() {
  return produtos.reduce((total, produto) => {
    return total + produto.preco * (estado.carrinho[produto.id] || 0);
  }, 0);
}

function textoSeguro(valor) {
  return String(valor).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
}

/* ==========================================
   CATÁLOGO E FILTROS
   ========================================== */

function produtosFiltrados() {
  const termo = estado.pesquisa.trim().toLocaleLowerCase("pt-BR");

  return produtos.filter(produto => {
    const correspondeCategoria =
      estado.categoria === "Todos" ||
      produto.categoria === estado.categoria;

    const texto = `${produto.nome} ${produto.descricao} ${produto.categoria}`
      .toLocaleLowerCase("pt-BR");

    return correspondeCategoria && texto.includes(termo);
  });
}

function renderizarProdutos() {
  const filtrados = produtosFiltrados();

  elementos.contadorProdutos.textContent =
    `${filtrados.length} ${filtrados.length === 1 ? "produto" : "produtos"}`;

  if (filtrados.length === 0) {
    elementos.lista.innerHTML = `
      <div class="mensagem-vazia">
        <p style="font-size:32px">🔎</p>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente outro nome ou selecione uma categoria diferente.</p>
      </div>`;
    return;
  }

  const grupos = estado.categoria === "Todos"
    ? categorias
    : [estado.categoria];

  elementos.lista.innerHTML = grupos.map(categoria => {
    const itens = filtrados.filter(produto => produto.categoria === categoria);

    if (itens.length === 0) return "";

    return `
      <section class="categoria" aria-label="${categoria}">
        <h3>${textoSeguro(categoria)}</h3>
        <div class="lista-itens">
          ${itens.map(produto => {
            const quantidade = estado.carrinho[produto.id] || 0;

            return `
              <article class="produto">
                <div>
                  <div style="font-size:28px;margin-bottom:10px"
                    aria-hidden="true">${produto.emoji}</div>
                  <h4>${textoSeguro(produto.nome)}</h4>
                  <p>${textoSeguro(produto.descricao)}</p>
                  <div class="produto-acoes">
                    <span class="preco">${dinheiro(produto.preco)}</span>
                    <button class="botao-adicionar"
                      type="button"
                      data-adicionar="${produto.id}">
                      + Adicionar
                    </button>
                  </div>
                </div>
                <div class="produto-compra">
                  <div class="controles-quantidade">
                    <button class="botao-quantidade"
                      type="button"
                      data-remover="${produto.id}"
                      aria-label="Remover uma unidade de ${textoSeguro(produto.nome)}"
                      ${quantidade === 0 ? "disabled" : ""}>−</button>
                    <span class="quantidade-produto">${quantidade}</span>
                    <button class="botao-quantidade"
                      type="button"
                      data-adicionar="${produto.id}"
                      aria-label="Adicionar uma unidade de ${textoSeguro(produto.nome)}"
                      ${quantidade >= 99 ? "disabled" : ""}>+</button>
                  </div>
                </div>
              </article>`;
          }).join("")}
        </div>
      </section>`;
  }).join("");
}

/* ==========================================
   ALTERAR QUANTIDADES
   ========================================== */

function alterarQuantidade(id, diferenca) {
  const produto = produtos.find(item => item.id === id);

  if (!produto) return;

  const atual = estado.carrinho[id] || 0;
  const novaQuantidade = Math.max(0, Math.min(99, atual + diferenca));

  if (novaQuantidade === 0) {
    delete estado.carrinho[id];
  } else {
    estado.carrinho[id] = novaQuantidade;
  }

  salvarCarrinho();
  renderizarProdutos();
  renderizarCarrinho();

  elementos.mensagemStatus.textContent = "";
}

function limparCarrinho() {
  estado.carrinho = {};
  salvarCarrinho();
  renderizarProdutos();
  renderizarCarrinho();
}

/* ==========================================
   CARRINHO
   ========================================== */

function renderizarCarrinho() {
  const quantidade = quantidadeTotal();
  const total = totalEmCentavos();

  elementos.contadorCarrinho.textContent =
    `${quantidade} ${quantidade === 1 ? "item" : "itens"}`;

  elementos.atalhoQuantidade.textContent = quantidade;
  elementos.totalCarrinho.textContent = dinheiro(total);

  elementos.botaoEnviar.disabled = quantidade === 0;

  if (quantidade === 0) {
    elementos.itensCarrinho.innerHTML = `
      <p class="item-vazio">
        Seu carrinho está vazio. Escolha algo gostoso!
      </p>`;
    return;
  }

  elementos.itensCarrinho.innerHTML = produtos
    .filter(produto => (estado.carrinho[produto.id] || 0) > 0)
    .map(produto => {
      const qtd = estado.carrinho[produto.id];
      const subtotal = produto.preco * qtd;

      return `
        <div class="item-carrinho">
          <div style="min-width:0">
            <strong>${textoSeguro(produto.nome)}</strong>
            <div style="color:#a2b7a9;font-size:12px">
              ${qtd} × ${dinheiro(produto.preco)}
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <span>${dinheiro(subtotal)}</span>
            <button type="button"
              class="botao-quantidade"
              data-remover="${produto.id}"
              aria-label="Remover uma unidade de ${textoSeguro(produto.nome)}">−</button>
            <button type="button"
              class="botao-quantidade"
              data-adicionar="${produto.id}"
              aria-label="Adicionar uma unidade de ${textoSeguro(produto.nome)}"
              ${qtd >= 99 ? "disabled" : ""}>+</button>
          </div>
        </div>`;
    }).join("");
}

/* ==========================================
   EVENTOS DE CATEGORIA E PESQUISA
   ========================================== */

elementos.categorias.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-categoria]");

  if (!botao) return;

  estado.categoria = botao.dataset.categoria;

  elementos.categorias.querySelectorAll("[data-categoria]").forEach(item => {
    const ativo = item === botao;
    item.classList.toggle("ativo", ativo);
    item.setAttribute("aria-pressed", String(ativo));
  });

  renderizarProdutos();
});

elementos.pesquisa.addEventListener("input", evento => {
  estado.pesquisa = evento.target.value;
  renderizarProdutos();
});

/* ==========================================
   EVENTOS DE ADIÇÃO E REMOÇÃO
   ========================================== */

document.addEventListener("click", evento => {
  const adicionar = evento.target.closest("[data-adicionar]");
  const remover = evento.target.closest("[data-remover]");

  if (adicionar) {
    alterarQuantidade(Number(adicionar.dataset.adicionar), 1);
  } else if (remover) {
    alterarQuantidade(Number(remover.dataset.remover), -1);
  }
});

elementos.atalhoCarrinho.addEventListener("click", () => {
  document.getElementById("carrinho").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

/* ==========================================
   ENVIAR PEDIDO PELO WHATSAPP
   ========================================== */

elementos.formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  const nome = elementos.nome.value.trim();
  const observacao = elementos.observacao.value.trim();
  const selecionados = produtos.filter(
    produto => (estado.carrinho[produto.id] || 0) > 0
  );

  if (!nome) {
    elementos.mensagemStatus.textContent = "Informe seu nome para continuar.";
    elementos.nome.focus();
    return;
  }

  if (selecionados.length === 0) {
    elementos.mensagemStatus.textContent = "Adicione pelo menos um produto.";
    return;
  }

  if (!/^\d{12,13}$/.test(numeroWhatsApp)) {
    elementos.mensagemStatus.textContent =
      "Configure o número correto do WhatsApp da loja no script.js.";
    return;
  }

  const linhas = [
    "🟢 *NOVO PEDIDO — PEDEZAP*",
    "",
    `👤 *Cliente:* ${nome}`,
    "",
    "🛒 *Itens do pedido:*",
    ...selecionados.map(produto => {
      const qtd = estado.carrinho[produto.id];
      return `• ${qtd}x ${produto.nome} — ${dinheiro(produto.preco * qtd)}`;
    }),
    "",
    `💰 *TOTAL DOS PRODUTOS: ${dinheiro(totalEmCentavos())}*`,
    "",
    observacao ? `📝 *Observações:* ${observacao}` : "",
    "",
    "Pedido enviado pelo catálogo PedeZap."
  ].filter(Boolean);

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(linhas.join("\n"))}`;

  const janela = window.open(url, "_blank", "noopener,noreferrer");

  if (!janela) {
    elementos.mensagemStatus.textContent =
      "Se o WhatsApp não abriu, verifique se o navegador bloqueou a nova janela.";
    return;
  }

  elementos.mensagemStatus.textContent =
    "WhatsApp aberto. Confira a mensagem e confirme o envio por lá.";
});

/* ==========================================
   INICIALIZAÇÃO
   ========================================== */

renderizarProdutos();
renderizarCarrinho();

elementos.categorias.querySelectorAll("[data-categoria]").forEach(botao => {
  botao.setAttribute(
    "aria-pressed",
    String(botao.dataset.categoria === estado.categoria)
  );
});