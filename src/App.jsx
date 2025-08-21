import { useState } from "react";

export default function App() {
  const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Do what makes your soul shine.", author: "Unknown" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { text: "Little by little, one travels far.", author: "J.R.R. Tolkien" }
  ];

  const colors = ["#16a085", "#2980b9", "#8e44ad", "#d35400", "#2c3e50"];

  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState(colors[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setQuote(quotes[randomIndex]);
    setColor(randomColor);
  };

  return (
    <div style={{ ...styles.container, background: `linear-gradient(135deg, ${color}, #34495e)` }}>
      <div style={styles.quoteBox}>
        <p style={{ ...styles.text, color }}>{quote.text}</p>
        <p style={styles.author}>— {quote.author}</p>
        <button style={{ ...styles.button, backgroundColor: color }} onClick={getRandomQuote}>
          ✨ New Quote
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "16px",
    transition: "background 0.8s ease"
  },
  quoteBox: {
    background: "white",
    padding: "clamp(20px, 5vw, 40px)", // adjusts between mobile & laptop
    borderRadius: "20px",
    maxWidth: "600px", // prevents oversized box on laptop
    width: "100%",
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    transition: "all 0.5s ease"
  },
  text: {
    fontSize: "clamp(16px, 3vw, 24px)", // responsive font size
    marginBottom: "clamp(12px, 3vw, 20px)",
    fontStyle: "italic",
    lineHeight: "1.5",
    transition: "color 0.5s ease"
  },
  author: {
    fontSize: "clamp(14px, 2.5vw, 20px)",
    fontWeight: "bold",
    marginBottom: "clamp(16px, 3vw, 24px)",
    color: "#2c3e50"
  },
  button: {
    padding: "clamp(8px, 2vw, 14px) clamp(16px, 4vw, 24px)",
    fontSize: "clamp(14px, 2.5vw, 18px)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  }
};
