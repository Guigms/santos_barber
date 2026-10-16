export const WA_NUMBER = "558592097166";
export const WA_DISPLAY = "(85) 9209-7166";
export const ADDRESS = "Rua Monteiro Lobato, 1621";
export const MAP_QUERY = "Rua Monteiro Lobato, 1621, Fortaleza - CE";

export const waLink = (msg = "Salve! Quero agendar um horário na Santos Barber.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const CUTS = [
  { id: "degrade", name: "Degradê na Régua", tag: "Mais pedido", img: "/img/c5.jpg" },
  { id: "navalhado", name: "Navalhado", tag: "Navalha", img: "/img/c4.jpg" },
  { id: "pompadour", name: "Pompadour + Barba", tag: "Clássico", img: "/img/c3.jpg" },
  { id: "social", name: "Social Tesoura", tag: "Tesoura", img: "/img/c1.jpg" },
  { id: "undercut", name: "Undercut", tag: "Rua", img: "/img/c2.jpg" },
  { id: "maquina", name: "Acabamento Máquina", tag: "Precisão", img: "/img/c6.jpg" },
];

export const SERVICES = [
  { id: "corte", name: "Corte Degradê", time: "45 min", price: "R$ 35", img: "/img/c5.jpg" },
  { id: "social", name: "Corte Social", time: "40 min", price: "R$ 30", img: "/img/c1.jpg" },
  { id: "barba", name: "Barba na Navalha", time: "30 min", price: "R$ 25", img: "/img/c4.jpg" },
  { id: "combo", name: "Combo Corte + Barba", time: "75 min", price: "R$ 55", img: "/img/c3.jpg" },
  { id: "pigmentacao", name: "Pigmentação", time: "20 min", price: "R$ 20", img: "/img/c6.jpg" },
  { id: "sobrancelha", name: "Sobrancelha", time: "10 min", price: "R$ 10", img: "/img/c2.jpg" },
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
