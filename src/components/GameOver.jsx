function GameOver({winner,onReset}) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    {winner && <p>{winner} won!</p>}
    {!winner && <p>It's a draw!</p>}
    <p><button onClick={onReset}>Restart</button></p>
  </div>;
}

export default GameOver;