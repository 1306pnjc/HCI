function bookSession() {
    alert("Booking a session with Dr. Alex Johnson!");
}

function sendMessage() {
    alert("Opening chat with Dr. Alex Johnson!");
}

function toggleDarkMode() {
    const body = document.body;
    const toggleSwitch = document.getElementById("darkModeToggle");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleSwitch.checked = false;
    }
}

// Apply dark mode on page load if it's enabled
window.onload = function () {
    const toggleSwitch = document.getElementById("darkModeToggle");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }
};
