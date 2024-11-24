<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Level Details</title>
    <style>
        /* Basic styles for the layout */
        body {
            font-family: Arial, sans-serif;
            display: flex;
        }

        #sidebar {
            width: 200px;
            background-color: #f4f4f4;
            padding: 20px;
        }

        #sidebar ul {
            list-style-type: none;
            padding: 0;
        }

        #sidebar ul li {
            padding: 10px;
            cursor: pointer;
        }

        .active {
            background-color: #ddd;
        }

        #content {
            padding: 20px;
            flex-grow: 1;
        }

        .level-detail {
            display: none;
        }

        .tab-content {
            display: none;
        }

        /* Initially showing the welcome content */
        #welcome-content {
            display: block;
        }
    </style>
</head>
<body>

    <div id="sidebar">
        <h3>MAIN LIST</h3>
        <ul id="level-list"></ul>

        <h3>Tabs</h3>
        <ul>
            <li id="welcome-tab">Welcome</li>
            <li id="sink-tab">Sink</li>
            <li id="lucid-chaos-tab">Lucid Chaos</li>
        </ul>
    </div>

    <div id="content">
        <!-- Welcome Tab Content -->
        <div id="welcome-content" class="tab-content">
            <h2>Welcome to the Level Details Page!</h2>
            <p>Select a level to see its details.</p>
        </div>

        <!-- Sink Tab Content -->
        <div id="sink-content" class="tab-content">
            <h2>Sink Level Details</h2>
            <!-- Level Details will be displayed here -->
            <div class="level-detail">
                <h3 id="level-title"></h3>
                <p><strong>Creator:</strong> <span id="level-creator"></span></p>
                <p><strong>Verifier:</strong> <span id="level-verifier"></span></p>
                <p><strong>Publisher:</strong> <span id="level-publisher"></span></p>
                <p><strong>Points:</strong> <span id="level-points"></span></p>
                <p><strong>Level ID:</strong> <span id="level-id"></span></p>
                <p><strong>Password:</strong> <span id="level-password"></span></p>
                <iframe id="level-video" width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

        <!-- Lucid Chaos Tab Content -->
        <div id="lucid-chaos-content" class="tab-content">
            <h2>Lucid Chaos Level Details</h2>
            <!-- Level Details will be displayed here -->
            <div class="level-detail">
                <h3 id="level-title"></h3>
                <p><strong>Creator:</strong> <span id="level-creator"></span></p>
                <p><strong>Verifier:</strong> <span id="level-verifier"></span></p>
                <p><strong>Publisher:</strong> <span id="level-publisher"></span></p>
                <p><strong>Points:</strong> <span id="level-points"></span></p>
                <p><strong>Level ID:</strong> <span id="level-id"></span></p>
                <p><strong>Password:</strong> <span id="level-password"></span></p>
                <iframe id="level-video" width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <script>
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
                name: "Lucid Chaos",
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

            // Show the appropriate tab content
            document.querySelector('.level-detail').style.display = 'block';
            document.getElementById("level-title").textContent = level.name;
            document.getElementById("level-creator").textContent = level.creator;
            document.getElementById("level-verifier").textContent = level.verifier;
            document.getElementById("level-publisher").textContent = level.publisher;
            document.getElementById("level-points").textContent = level.points;
            document.getElementById("level-id").textContent = level.levelId;
            document.getElementById("level-password").textContent = level.password;
            document.getElementById("level-video").src = level.video;

            // Switch to the correct tab based on level
            if (level.name === "Sink") {
                document.getElementById("sink-content").style.display = 'block';
                document.getElementById("lucid-chaos-content").style.display = 'none';
            } else if (level.name === "Lucid Chaos") {
                document.getElementById("lucid-chaos-content").style.display = 'block';
                document.getElementById("sink-content").style.display = 'none';
            }
        }

        // Tab switching functionality
        document.getElementById("welcome-tab").onclick = () => {
            // Hide level details and show welcome content
            document.querySelector('.level-detail').style.display = 'none';
            document.getElementById("welcome-content").style.display = 'block';
            document.getElementById("sink-content").style.display = 'none';
            document.getElementById("lucid-chaos-content").style.display = 'none';
        };

        document.getElementById("sink-tab").onclick = () => {
            // Hide level details and show Sink content
            document.querySelector('.level-detail').style.display = 'none';
            document.getElementById("sink-content").style.display = 'block';
            document.getElementById("welcome-content").style.display = 'none';
            document.getElementById("lucid-chaos-content").style.display = 'none';
        };

        document.getElementById("lucid-chaos-tab").onclick = () => {
            // Hide level details and show Lucid Chaos content
            document.querySelector('.level-detail').style.display = 'none';
            document.getElementById("lucid-chaos-content").style.display = 'block';
            document.getElementById("welcome-content").style.display = 'none';
            document.getElementById("sink-content").style.display = 'none';
        };

        // Initially show the welcome page
        window.onload = () => {
            // Hide level details by default
            document.querySelector('.level-detail').style.display = 'none';

            // Show the welcome content by default
            document.getElementById("welcome-content").style.display = 'block';
        };
    </script>
</body>
</html>
