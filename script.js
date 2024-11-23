// Example levels data
const levels = [
    {
        name: "Sink",
        creator: "OniLinkGD",
        verifier: "Croma",
        publisher: "OniLinkGD",
        points: 500,
        levelId: 86407629,
        password: "Free to Copy",
        video: "https://www.youtube.com/embed/xyz123"
    },
    {
        name: "Acheron",
        creator: "CreatorName",
        verifier: "VerifierName",
        publisher: "PublisherName",
        points: 450,
        levelId: 12345678,
        password: "Verified",
        video: "https://www.youtube.com/embed/abc456"
    }
];

// Populate sidebar with levels and dynamically number them
const levelList = document.getElementById("level-list");

levels.forEach((level, index) => {
    const listItem = document.createElement("li");
    // Dynamically create the level number by adding 1 to the index
    listItem.textContent = `${index + 1}. ${level.name}`;
    listItem.onclick = () => displayLevelDetails(level);
    levelList.appendChild(listItem);
});

// Display level details
function displayLevelDetails(level) {
    // Hide the welcome content
    document.getElementById("welcome-content").style.display = 'none';

    // Show level details
    document.querySelector('.level-detail').style.display = 'block';
    document.getElementById("level-title").textContent = level.name;
    document.getElementById("level-creator").textContent = level.creator;
    document.getElementById("level-verifier").textContent = level.verifier;
    document.getElementById("level-publisher").textContent = level.publisher;
    document.getElementById("level-points").textContent = level.points;
    document.getElementById("level-id").textContent = level.levelId;
    document.getElementById("level-password").textContent = level.password;
    document.getElementById("level-video").src = level.video;
}

// Show the welcome page when the "Welcome" tab is clicked
document.getElementById("welcome-tab").onclick = () => {
    // Hide level details
    document.querySelector('.level-detail').style.display = 'none';

    // Show the welcome content
    document.getElementById("welcome-content").style.display = 'block';
};

// Initially show the welcome page
window.onload = () => {
    // Hide the level details by default
    document.querySelector('.level-detail').style.display = 'none';

    // Show the welcome content by default
    document.getElementById("welcome-content").style.display = 'block';
};
