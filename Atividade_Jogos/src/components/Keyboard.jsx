import "./Keyboard.css";

// Keyboard renderiza o teclado virtual e mostra o estado de cada letra.
// Props:
//   keyState (object)  — { "A": "correct", "B": "absent", ... }
//   onKey (function)   — callback chamado com a tecla clicada
const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

function Keyboard({ keyState, onKey }) {
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => {
            const status = keyState[key] || "";
            const label = key === "BACKSPACE" ? "⌫" : key === "ENTER" ? "↵" : key;
            const isWide = key === "BACKSPACE" || key === "ENTER";

            return (
              <button
                key={key}
                className={`key ${isWide ? "wide" : ""} ${status}`}
                onClick={() => onKey(key)}
                aria-label={key === "BACKSPACE" ? "Apagar" : key === "ENTER" ? "Confirmar" : key}
              >
                {label}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
