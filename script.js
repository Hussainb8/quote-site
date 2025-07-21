function showQuote() {
  const emotion = document.getElementById("emotionSelect").value;
  const quoteImg = document.getElementById("quoteImg");

  const quotes = {
    happy: "images/PHOTO-2025-07-03-09-09-21.jpeg",
    sad: "images/PHOTO-2025-07-04-12-44-00.jpg",
    motivated: "images/PHOTO-2025-06-21-16-33-18.jpg",
    anxious: "images/PHOTO-2025-06-27-00-16-15.jpg",
    tired: "images/PHOTO-2025-07-08-09-56-57.jpg",
    grateful: "images/PHOTO-2025-07-17-09-20-26.jpg",
    angry: "images/PHOTO-2025-07-17-09-20-26 2.jpg"
  };

  quoteImg.src = quotes[emotion] || "";
}
