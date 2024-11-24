// Example levels data
const levels = [
    {
        name: "Sink",
        creator: "Awedsy",
        verifier: "Croma",
        skillset: "Timings, wave",
        points: "N/A",
        levelId: 77255632,
        showcase: "https://www.youtube.com/watch?v=_L7T7ReVDzU",
        verification: "https://www.youtube.com/watch?v=BoNcuqEbypU"
    },
    {
        name: "Nightshade",
        creator: "YakobNugget & more",
        verifier: "Enfur",
        skillset: "Memory, nerve control",
        points: "N/A",
        levelId: 83107375,
        showcase: "https://www.youtube.com/watch?v=5q3xZ_U2q6I",
        verification: "https://www.youtube.com/watch?v=oXXsNtLwF8M&t=228s&pp=ygUTbmlnaHRzaGFkZSBnZCBlbmZ1cg%3D%3D"
    },
    {
        name: "Timor",
        creator: "Colorbolt & Maxie25",
        verifier: "Landet",
        skillset: "Wave",
        points: "N/A",
        levelId: 65969451,
        showcase: "https://www.youtube.com/watch?v=kwI2TIwbFsg",
        verification: "N/A"
    },
    {
        name: "The Moon Below",
        creator: "Onvil",
        verifier: "Croma",
        skillset: "Ship, timings",
        points: "N/A",
        levelId: 79484035,
        showcase: "https://www.youtube.com/watch?v=REzdF2IxCXc&t=19s&pp=ygURdGhlIG1vb24gYmVsb3cgZ2Q%3D",
        verification: "https://www.youtube.com/watch?v=uIAuTXw9d6g&t=8s&pp=ygUUdGhlIG1vb24gYmVsb3cgY3JvbWE%3D"
    },
    {
        name: "Lucid Chaos",
        creator: "CairoX & more",
        verifier: "Croma",
        skillset: "All-around",
        points: "N/A",
        levelId: 62817170,
        showcase: "https://www.youtube.com/watch?v=CSQwka10qPE&t=58s&pp=ygUZbHVjaWQgY2hhb3MgZ2VvbWV0cnkgZGFzaA%3D%3D",
        verification: "https://www.youtube.com/watch?v=jtGPB6a-6Eg"
    },
    {
        name: "BuTiTi III",
        creator: "",
        verifier: "Enfur",
        skillset: "",
        points: "N/A",
        levelId: "",
        showcase: "",
        verification: ""
    },
    {
        name: "ConFusion",
        creator: "",
        verifier: "Enfur",
        skillset: "",
        points: "N/A",
        levelId: "",
        showcase: "",
        verification: ""
    },
    {
        name: "Stalemate Redux",
        creator: "",
        verifier: "Croma",
        skillset: "",
        points: "N/A",
        levelId: "",
        showcase: "",
        verification: ""
    },
    {
        name: "Killbot",
        creator: "",
        verifier: "Croma",
        skillset: "",
        points: "N/A",
        levelId: "",
        showcase: "",
        verification: ""
    },
    {
        name: "Omicron",
        creator: "",
        verifier: "Enfur",
        skillset: "",
        points: "N/A",
        levelId: "",
        showcase: "",
        verification: ""
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
    document.getElementById("level-skillset").textContent = level.skillset;
    document.getElementById("level-points").textContent = level.points;
    document.getElementById("level-id").textContent = level.levelId;
    document.getElementById("level-showcase").textContent = level.showcase;
    document.getElementById("level-verification").textContent = level.verification;
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

// Select all the tabs in the sidebar
const tabs = document.querySelectorAll('#sidebar li'); // Adjusted to select li elements inside #sidebar

// Loop through each tab and add an event listener for the click event
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove the 'active-tab' class from all tabs
        tabs.forEach(t => t.classList.remove('active-tab'));

        // Add the 'active-tab' class to the clicked tab
        tab.classList.add('active-tab');
    });
});
