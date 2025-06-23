import { useEffect, useState } from "react";

const bulbs = ["A", "B", "C", "D", "E"];
export default function BulbGame() {
  const [active, setActive] = useState(null);
  const [auto, setAuto] = useState([]);
  const [clicks, setClicks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    startGame();
  }, []);
  function startGame() {
    setMessage("");
    setIsPlaying(true);
    const intervalId = setInterval(selectBulb, 2500);
    setTimeout(() => {
      clearInterval(intervalId);
      setActive(null);
      setIsPlaying(false);
    }, 11000);
  }
  function selectBulb() {
    const index = Math.floor(Math.random() * 5);
    setActive(index);
    setAuto((prev) => [...prev, bulbs[index]]);
  }

  function handleBulb(letter) {
    if (isPlaying) return;
    const newClicks = [...clicks, letter];
    setClicks(newClicks);
    if (newClicks.length === auto.length) {
      const isCorrect = auto.every((val, i) => val === newClicks[i]);
      setMessage(isCorrect ? "YOU WON 😎" : "YOU LOOSE 😐");
    }
  }

  function handelReset() {
    startGame();
  }
  return (
    <div>
      <h2>{isPlaying ? "ARE YOU WATCHING CLOSELY 🔎" : "YOUR TURN!! 🤠"}</h2>
      {bulbs.map((letter, i) => (
        <div
          className="bulb"
          key={letter}
          style={{ backgroundColor: active === i ? "orange" : "lightgrey" }}
          onClick={() => handleBulb(letter)}
        >
          {letter}
        </div>
      ))}
      <p>{message}</p>
      <button onClick={handelReset}>Play Again</button>
    </div>
  );
}
