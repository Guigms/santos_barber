export const WA_NUMBER = "558592097166";
export const WA_DISPLAY = "(85) 9209-7166";
export const ADDRESS = "Rua Monteiro Lobato, 1621";
export const MAP_QUERY = "Rua Monteiro Lobato, 1621, Fortaleza - CE";

export const waLink = (msg = "Salve! Quero agendar um horário na Santos Barber.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const CUTS = [
  { id: "degrade", name: "", tag: "Mais pedido", img: "/img/c3.jpeg" },
  { id: "navalhado", name: "", tag: "Navalha", img: "/img/corte2.jpg" },
  { id: "pompadour", name: "", tag: "Clássico", img: "/img/corte2.jpg" }, 
  { id: "social", name: "", tag: "Tesoura", img: "/img/corte10.jpg" },
  { id: "undercut", name: "", tag: "Rua", img: "/img/corte4.jpg" },
  { id: "maquina", name: "", tag: "Precisão", img: "/img/corte5.jpg" }, 
];

export const SERVICES = [
  { id: "corte", name: "Corte Degradê", time: "45 min", price: "R$ 30",},
  { id: "social", name: "Corte Social", time: "40 min", price: "R$ 25",},
  { id: "combo", name: "Combo Corte + Barba", time: "75 min", price: "R$ 50",},
  { id: "sobrancelha", name: "Sobrancelha", time: "10 min", price: "R$ 5", },
  { id: "domicilio", name: "Corte a Domicílio", time: "vou até você", price: "Orçamento", quote: true, msg: "Salve! Quero um orçamento de corte a domicílio. Meu endereço é: " },
];

export const WEEK = [
  { d: "Segunda", open: true },
  { d: "Terça", open: true },
  { d: "Quarta", open: true },
  { d: "Quinta", open: true },
  { d: "Sexta", open: true },
  { d: "Sábado", open: false },
  { d: "Domingo", open: false },
];