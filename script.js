const numeroWhatsApp = "5588981427454";

const catalogo = document.getElementById("catalogo");

const produtos = [
  { nome: "Suporte multifuncional", preco: "R$ 10,00", imagem: "imagens/produto1.jpg" },
  { nome: "Lanterna led", preco: "R$ 20,00", imagem: "imagens/produto2.jpg" },
  { nome: "Mini Caixa de som", preco: "R$ 35,00", imagem: "imagens/produto3.jpg" },
  { nome: "Mini game Portatil", preco: "R$ 50,00", imagem: "imagens/produto4.jpg" },
  { nome: "Suporte / Selfie", preco: "R$ 16,00", imagem: "imagens/produto5.jpg" },
  { nome: "Fone de ouvido S/Fio", preco: "R$ 33,00", imagem: "imagens/produto6.jpg" },
  { nome: "Fone gamer C/mic", preco: "R$ 30,00", imagem: "imagens/produto7.jpg" },
  { nome: "Air Pods 4 Pro Lehmox", preco: "R$ 100,00", imagem: "imagens/produto8.jpg" },
  { nome: "Cabo tipo C Saquinho", preco: "R$ 6,00", imagem: "imagens/produto9.jpg" },
  { nome: "Fone de ouvido P9 S/fio ", preco: "R$ 60,00", imagem: "imagens/produto10.jpg" },
  { nome: "Fone de ouvido Premium S/fio", preco: "R$ 100,00", imagem: "imagens/produto11.jpg" },
  { nome: "Garrafa termica 1L", preco: "R$ 80,00", imagem: "imagens/produto12.jpg" },
  { nome: "Cabo V8", preco: "R$ 10,00", imagem: "imagens/produto13.jpg" },
  { nome: "Fone de ouvido", preco: "R$ 10,00 / 22,00", imagem: "imagens/produto14.jpg" },
  { nome: "Fone de ouvido ios", preco: "R$ 12,00", imagem: "imagens/produto15.jpg" },
  { nome: "Carregador Veicular", preco: "R$ 28,00", imagem: "imagens/produto16.jpg" },
  { nome: "Mouse sem e com fio", preco: "R$ 30,00 - 12,00", imagem: "imagens/produto17.jpg" },
  { nome: "Carregador tipo c", preco: "R$ 22,00", imagem: "imagens/produto18.jpg" },
  { nome: "Fonte ios Tipo C", preco: "R$ 25,00", imagem: "imagens/produto19.jpg" },
  { nome: "Fone sem fio star mega", preco: "R$ 35,00", imagem: "imagens/produto20.jpg" },
  { nome: "Cabo ios usb", preco: "R$ 13,00", imagem: "imagens/produto21.jpg" },
  { nome: "Cabo ios usb-c", preco: "R$ 13,00", imagem: "imagens/produto22.jpg" },
  { nome: "Carregador rapido T/C", preco: "R$ 20,00", imagem: "imagens/produto23.jpg" },
  { nome: "Fonte dupla 5.1", preco: "R$ 22,00", imagem: "imagens/produto24.jpg" },
  { nome: "Carregador ios completo", preco: "R$ 35,00", imagem: "imagens/produto25.jpg" },
  { nome: "Suporte Moto C/usb", preco: "R$ 35,00", imagem: "imagens/produto26.jpg" },
  { nome: "Suporte Carro", preco: "R$ 30,00", imagem: "imagens/produto27.jpg" },
  { nome: "Ring Light 8pol", preco: "R$ 60,00", imagem: "imagens/produto28.jpg" },
  { nome: "Ventosa", preco: "R$ 10,00", imagem: "imagens/produto29.jpg" },
  { nome: "Mini lampada noturna", preco: "R$ Consultar", imagem: "imagens/produto30.jpg" }
];

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <h2>${produto.nome}</h2>
    <p>${produto.preco}</p>
    <a class="btn-whatsapp" target="_blank" href="https://wa.me/${numeroWhatsApp}?text=Olá!%20O%20produto%20${encodeURIComponent(produto.nome)}%20ainda%20está%20disponível?">
      <i class="fab fa-whatsapp"></i> Comprar
    </a>
  `;

  catalogo.appendChild(card);
});
