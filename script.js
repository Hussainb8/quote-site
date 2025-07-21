const emotionSelect = document.getElementById("emotionSelect");
const quoteImage = document.getElementById("quoteImage");

const imageMap = {
  happy: "images/PHOTO-2025-07-04-12-44-00.jpg",
  sad: "images/PHOTO-2025-07-08-09-56-57.jpg",
  angry: "images/PHOTO-2025-07-17-09-20-26.jpg",
  confused: "images/PHOTO-2025-07-03-09-09-21.jpeg",
  tired: "images/PHOTO-2025-07-17-09-20-26 2.jpg",
  overwhelmed: "images/PHOTO-2025-06-21-16-33-18.jpg",
  calm: "images/PHOTO-2025-06-27-00-16-15.jpg"
};

emotionSelect.addEventListener("change", function () {
  const selectedEmotion = this.value;
  quoteImage.src = imageMap[selectedEmotion] || "";
});
