import "./Tile.css";

// Tile representa uma célula individual do tabuleiro.
// Props:
//   letter (string) — letra exibida na célula
//   status (string) — "correct" | "present" | "absent" | ""
function Tile({ letter = "", status = "" }) {
  const classes = ["tile", status, letter ? "filled" : ""]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{letter}</div>;
}

export default Tile;
