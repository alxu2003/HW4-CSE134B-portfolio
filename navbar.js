let darkmode = localStorage.getItem('darkmode');
let checked = localStorage.getItem('checked');
const themeSwitch = document.getElementById('theme-check');
const navSwitch = document.getElementById('nav-check');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    localStorage.setItem('checked','active');
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    localStorage.setItem('checked', null);
}
if(darkmode === 'active') enableDarkMode();
if(checked == 'active') themeSwitch.checked = true;

themeSwitch.addEventListener('input', () => {
    darkmode = localStorage.getItem('darkmode');
    checked = localStorage.getItem('checked');
    darkmode != 'active' ? enableDarkMode() : disableDarkMode();
    checked != 'active' ? themeSwitch.checked = true : themeSwitch.checked = false;
})  

function openNav() {
  document.getElementById("navbar").style.width = "250px";
}

function closeNav() {
  const navbar = document.getElementById('navbar');
  const navComputedStyle = window.getComputedStyle(navbar);
  const originalWidth = navComputedStyle.getPropertyValue('--nav-short-end-size');
  document.getElementById("navbar").style.setProperty('width', originalWidth);
}

function openCloseNav() {
    navSwitch.checked ? closeNav() : openNav();
}

navSwitch.addEventListener('input', openCloseNav());
