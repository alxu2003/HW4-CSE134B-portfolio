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
  document.getElementById("navbar").style.width = "500px";
}

function closeNav() {
//   
  document.getElementById("navbar").style.setProperty('width', '250px');
}

function openCloseNav() {
    navSwitch.checked ? openNav() : closeNav();
}

navSwitch.addEventListener('input', () => {
    if (navSwitch.checked) {
        document.getElementById("navbar").style.width = "500px";
    }
    else {
        const rootComputedStyle = window.getComputedStyle(document.documentElement);
        const originalWidth = rootComputedStyle.getPropertyValue('--nav-short-end-size');
        document.getElementById("navbar").style.setProperty('width', originalWidth);
    }
})
