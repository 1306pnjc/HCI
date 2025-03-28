const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const header = document.querySelector('header');
const navIcons = document.querySelectorAll('.nav-icon');
const mainVideo = document.querySelector('.mainVideo');
const chatBox = document.querySelector('.chatBox');
const chatBoxContainer = document.querySelector('.chatBox-container');
const input = document.querySelector('.chatInput input');
const buttons = document.querySelectorAll('button');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    navIcons.forEach(icon => icon.classList.toggle('dark-mode'));
    mainVideo.classList.toggle('dark-mode');
    chatBox.classList.toggle('dark-mode');
    chatBoxContainer.classList.toggle('dark-mode');
    input.classList.toggle('dark-mode');
    buttons.forEach(button => button.classList.toggle('dark-mode'));
});
