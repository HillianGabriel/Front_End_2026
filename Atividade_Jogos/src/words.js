export const WORDS = [
  "carro", "balde", "forno", "porta", "vento", "chuva", "livro", "campo",
  "pedra", "terra", "bravo", "calmo", "dente", "festa", "grato", "jogos",
  "largo", "mundo", "nobre", "olhar", "pular", "queda", "reino", "salvo",
  "tempo", "valor", "zebra", "abrir", "banco", "chile", "desde", "errar",
  "falar", "guiar", "homem", "ideia", "junta", "lunar", "noite", "obter",
  "plano", "quota", "risco", "sendo", "tomar", "ultra", "fraco", "greve",
  "hotel", "imune", "justo", "lento", "menor", "negro", "ordem", "primo",
  "ruivo", "suave", "trice", "único", "virar", "xeque", "yield", "zarco",
];

export function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
}
