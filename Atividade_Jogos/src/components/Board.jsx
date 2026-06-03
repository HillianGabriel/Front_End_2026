import Row from "./Row";
import "./Board.css";

// Board renderiza as 6 linhas do jogo.
// Props:
//   guesses (Array)      — tentativas já submetidas: [{ word, result }]
//   currentGuess (string) — o que o jogador está digitando agora
const MAX_GUESSES = 6;

function Board({ guesses, currentGuess }) {
  // Cria array fixo de 6 linhas
  const rows = Array(MAX_GUESSES)
    .fill(null)
    .map((_, i) => {
      if (i < guesses.length) {
        // Linha já submetida
        return {
          word: guesses[i].word,
          result: guesses[i].result,
          isActive: false,
        };
      }
      if (i === guesses.length) {
        // Linha ativa (digitando agora)
        return { word: currentGuess, result: [], isActive: true };
      }
      // Linhas futuras (vazias)
      return { word: "", result: [], isActive: false };
    });

  return (
    <div className="board">
      {rows.map((row, i) => (
        <Row
          key={i}
          word={row.word}
          result={row.result}
          isActive={row.isActive}
        />
      ))}
    </div>
  );
}

export default Board;
