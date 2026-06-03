import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { useWordle } from "./hooks/useWordle";
import "./App.css";

// App é o componente raiz.
// Ele usa o hook useWordle para obter todo o estado e
// distribui as props para Board e Keyboard.
function App() {
  const {
    guesses,
    currentGuess,
    gameOver,
    message,
    keyState,
    handleKey,
    resetGame,
  } = useWordle();

  return (
    <div className="app">
      <header className="header">
        <h1>Wordle</h1>
      </header>

      {message && <div className="message">{message}</div>}

      <main>
        <Board guesses={guesses} currentGuess={currentGuess} />
        <Keyboard keyState={keyState} onKey={handleKey} />

        {gameOver && (
          <button className="reset-btn" onClick={resetGame}>
            Novo jogo
          </button>
        )}
      </main>
    </div>
  );
}

export default App;

