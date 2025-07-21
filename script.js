const quoteImg = document.getElementById("quoteImg");
const quoteCounter = document.getElementById("quoteCounter");
const gallery = document.getElementById("gallery");
let counter = 0;

const quotes = {
  "Reflective": "images/PHOTO-2025-07-17-09-20-26-2.jpg",
  "Self-worth": "images/PHOTO-2025-06-21-16-33-18.jpg",
  "Wisdom": "images/PHOTO-2025-06-27-00-16-15.jpg",
  "Growth": "images/PHOTO-2025-07-03-09-09-21.jpeg",
  "Self-awareness": "images/PHOTO-2025-07-04-12-44-00.jpg",
  "Spiritual Awareness": "images/PHOTO-2025-07-08-09-56-57.jpg",
  "Trauma": "images/PHOTO-2025-07-17-09-20-26.jpg"
};

function showQuote() {
  const emotion = document.getElementById("emotionSelect").value;
  if (quotes[emotion]) {
    quoteImg.src = quotes[emotion];
    quoteImg.classList.add("show");
    counter++;
    quoteCounter.innerText = `Quotes viewed: ${counter}`;
    preloadImages(emotion);
  } else {
    quoteImg.classList.remove("show");
  }
}

function preloadImages(emotion) {
  gallery.innerHTML = "";
  for (let key in quotes) {
    if (emotion === key) {
      const img = document.createElement("img");
      img.src = quotes[key];
      img.alt = key;
      img.onclick = () => {
        quoteImg.src = quotes[key];
        quoteImg.classList.add("show");
      };
      gallery.appendChild(img);
    }
  }
}

function showRandomQuote() {
  const keys = Object.keys(quotes);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  document.getElementById("emotionSelect").value = randomKey;
  showQuote();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function shareQuote() {
  const imgSrc = quoteImg.src;
  if (navigator.share) {
    navigator.share({
      title: "Quote Reflection",
      text: "Check out this quote I'm reflecting on:",
      url: imgSrc
    });
  } else {
    navigator.clipboard.writeText(imgSrc).then(() => {
      alert("Quote link copied to clipboard!");
    });
  }
}
