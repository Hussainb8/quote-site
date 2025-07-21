body {
  margin: 0;
  padding: 0;
  font-family: 'Georgia', serif;
  background: linear-gradient(to bottom, #fdfcf8, #e9e6d9);
  background-attachment: fixed;
  color: #2b3a2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

header {
  text-align: center;
  padding: 2rem 1rem 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #d2b48c;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05); }

header h1 {
  font-size: 2.4rem;
  color: #3d6e5e;
  margin: 0;
}

header p {
  font-size: 1rem;
  color: #5e5e5e;
  margin-top: 0.5rem;
}

main {
  text-align: center;
  margin-top: 2rem;
  width: 90%;
  max-width: 600px;
}

select {
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

select:hover {
  border-color: #3d6e5e;
}

#quoteContainer {
  transition: opacity 0.5s ease;
}

#quoteImg {
  display: none;
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

#quoteImg:hover {
  transform: scale(1.015);
}
