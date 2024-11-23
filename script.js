// Example levels data
const levels = [
    {
        id: 1,
        name: "#1 - Sink",
        creator: "OniLinkGD",
        verifier: "Croma",
        points: "N/A",
        levelId: 86407629,
        password: "Free to Copy",
        video: "https://www.youtube.com/embed/xyz123"
    },
    {
        id: 2,
        name: "#2 - Lucid Chaos",
        creator: "CairoX & more",
        verifier: "Croma",
        points: "N/A",
        levelId: 12345678,
        password: "Verified",
        video: "https://www.youtube.com/embed/abc456"
    }
];

// Populate sidebar
const levelList = document.getElementById("level-list");

levels.forEach((level) => {
    const listItem = document.createElement("li");
    listItem.textContent = level.name; // Just use the name without adding the number here
    listItem.onclick = () => displayLevelDetails(level);
    levelList.appendChild(listItem);
});

// Display level details
function displayLevelDetails(level) {
    document.getElementById("level-title").textContent = level.name;
    document.getElementById("level-creator").textContent = level.creator;
    document.getElementById("level-verifier").textContent = level.verifier;
    document.getElementById("level-publisher").textContent = level.publisher;
    document.getElementById("level-points").textContent = level.points;
    document.getElementById("level-id").textContent = level.levelId;
    document.getElementById("level-password").textContent = level.password;
    document.getElementById("level-video").src = level.video;
}
