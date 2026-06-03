import { useState, useEffect, useCallback } from "react";
import { WORDS, getRandomWord } from "../words";

// Avalia uma tentativa comparando com a palavra alvo.
// Retorna um array de status: "correct" | "present" | "absent"
function evaluateGuess(guess, target) {
  const result = Array(5).fill("absent");
  const pool = [...target]; // cópia para rastrear letras disponíveis

  // Primeira passagem: marca as corretas
  for (let i = 0; i < 5; i++) {
    if (guess[i] === target[i]) {
      result[i] = "correct";
      pool[pool.indexOf(guess[i])] = null;
    }
  }

  // Segunda passagem: marca as presentes (letra existe mas posição errada)
  for (let i = 0; i < 5; i++) {
    if (result[i] !== "correct") {
      const idx = pool.indexOf(guess[i]);
      if (idx !== -1) {
        result[i] = "present";
        pool[idx] = null;
      }
    }
  }

  return result;
}

export function useWordle() {
  const [target, setTarget] = useState(() => getRandomWord());
  const [guesses, setGuesses] = useState([]); // Array de { word, result }
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [keyState, setKeyState] = useState({}); // estado visual de cada tecla

  const showMessage = (msg, duration = 2000) => {
    setMessage(msg);
    if (duration) setTimeout(() => setMessage(""), duration);
  };

  const submitGuess = useCallback(() => {
    if (currentGuess.length < 5) {
      showMessage("Palavra incompleta!");
      return;
    }

    if (!WORDS.includes(currentGuess.toLowerCase())) {
      showMessage("Palavra não encontrada!");
      return;
    }

    const result = evaluateGuess(currentGuess, target);
    const newGuess = { word: currentGuess, result };

    setGuesses((prev) => [...prev, newGuess]);
    setCurrentGuess("");

    // Atualiza estado visual do teclado
    setKeyState((prev) => {
      const next = { ...prev };
      const priority = { correct: 3, present: 2, absent: 1 };
      currentGuess.split("").forEach((letter, i) => {
        const newStatus = result[i];
        if (!next[letter] || priority[newStatus] > priority[next[letter]]) {
          next[letter] = newStatus;
        }
      });
      return next;
    });

    if (currentGuess === target) {
      showMessage("Você acertou!", 0);
      setGameOver(true);
      return;
    }

    if (guesses.length + 1 === 6) {
      showMessage(`Era: ${target}`, 0);
      setGameOver(true);
    }
  }, [currentGuess, target, guesses]);

  const handleKey = useCallback(
    (key) => {
      if (gameOver) return;

      if (key === "BACKSPACE") {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (key === "ENTER") {
        submitGuess();
        return;
      }

      if (/^[A-ZÀ-Ú]$/i.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }
    },
    [gameOver, currentGuess, submitGuess]
  );

  // Escuta o teclado físico
  useEffect(() => {
    const handler = (e) => handleKey(e.key.toUpperCase());
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleKey]);

  const resetGame = () => {
    setTarget(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setMessage("");
    setKeyState({});
  };

  return {
    target,
    guesses,
    currentGuess,
    gameOver,
    message,
    keyState,
    handleKey,
    resetGame,
  };
}
