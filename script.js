
const emotionMap = {
    "Reflective": "images/PHOTO-2025-07-17-09-20-26 2.jpg",
    "Self-worth": "images/PHOTO-2025-06-21-16-33-18.jpg",
    "Wisdom": "images/PHOTO-2025-06-27-00-16-15.jpg",
    "Growth": "images/PHOTO-2025-07-03-09-09-21.jpeg",
    "Self-awareness": "images/PHOTO-2025-07-04-12-44-00.jpg",
    "Spiritual Awareness": "images/PHOTO-2025-07-08-09-56-57.jpg",
    "Trauma": "images/PHOTO-2025-07-17-09-20-26.jpg"
};

document.getElementById("emotion-select").addEventListener("change", function() {
    const emotion = this.value;
    const img = document.getElementById("quote-image");
    if (emotionMap[emotion]) {
        img.src = emotionMap[emotion];
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
});
