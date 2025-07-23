const html = document.querySelector('html');
let theme = localStorage.getItem('theme');
const toggle = document.getElementById('toggleTheme');

currentTheme();

function currentTheme() {
   if (!theme) {
     localStorage.setItem("theme","Light");
   }
   html.className = theme;
   toggle.value = theme;
}

function changeTheme(value) {
  html.className = value;
  localStorage.setItem("theme",value);
}