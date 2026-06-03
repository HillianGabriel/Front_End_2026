import Tile from "./Tile";
import "./Row.css";

// Row representa uma linha do tabuleiro (uma tentativa de 5 letras).
// Props:
//   word (string)        — palavra da tentativa (ex: "CARRO")
//   result (string[])    — array de status para cada letra
//   isActive (boolean)   — se é a linha que o jogador está digitando agora
function Row({ word = "", result = [], isActive = false }) {
  const tiles = Array(5)
    .fill("")
    .map((_, i) => ({
      letter: word[i] || "",
      status: result[i] || "",
    }));

  return (
    <div className={`row ${isActive ? "active" : ""}`}>
      {tiles.map((tile, i) => (
        <Tile key={i} letter={tile.letter} status={tile.status} />
      ))}
    </div>
  );
}

export default Row;
