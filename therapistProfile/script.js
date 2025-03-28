
function bookSession() {
    alert("Booking a session with Dr. Alex Johnson!");
}
function sendMessage() {
    alert("Opening chat with Dr. Alex Johnson!");
}
function toggleDarkMode() {
document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
} else {
    localStorage.setItem("darkMode", "disabled");
    }
}

window.onload = function () {
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    }
}
