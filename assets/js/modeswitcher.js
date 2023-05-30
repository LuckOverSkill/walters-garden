---
---

/* 
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

/*script nuovo da Bing, non prometto funzioni*/

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = localStorage.getItem('theme');

const iconSun = "{{ site.baseurl }}/assets/img/sun.svg";
const iconMoon = "{{ site.baseurl }}/assets/img/moon.svg";


function changeIconImgSrc(src) {
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

if (systemInitiatedDark.matches) {
	changeIconImgSrc(iconMoon);
} else {
	changeIconImgSrc(iconSun);
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	changeIconImgSrc(iconMoon);
   	localStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    changeIconImgSrc(iconSun);
    localStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = localStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		changeIconImgSrc(iconSun);
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		changeIconImgSrc(iconMoon);
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		changeIconImgSrc(iconSun);
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		changeIconImgSrc(iconMoon);
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	localStorage.setItem('theme', 'dark');
	changeIconImgSrc(iconMoon);
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', 'light');
	changeIconImgSrc(iconSun);
}

// Carica la preferenza del tema quando si apre una nuova nota
function loadTheme() {
  var theme = localStorage.getItem("theme");
  if (theme) {
    // Imposta il tema in base alla preferenza salvata
    setTheme(theme);
  }
}

// Imposta il tema in base al valore passato
function setTheme(theme) {
  // Cambia il tema della pagina
  document.body.className = theme;
  // Cambia lo stato del tasto
  var button = document.getElementById("theme-button");
  if (theme == "dark") {
    button.innerHTML = "Light";
  } else {
    button.innerHTML = "Dark";
  }
}

// Carica il tema quando si apre la pagina
window.onload = loadTheme;

/* script vecchio da ripristinare in caso si rompa tutto
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

const iconSun = "{{ site.baseurl }}/assets/img/sun.svg";
const iconMoon = "{{ site.baseurl }}/assets/img/moon.svg";


function changeIconImgSrc(src) {
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

if (systemInitiatedDark.matches) {
	changeIconImgSrc(iconMoon);
} else {
	changeIconImgSrc(iconSun);
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	changeIconImgSrc(iconMoon);
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    changeIconImgSrc(iconSun);
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		changeIconImgSrc(iconSun);
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		changeIconImgSrc(iconMoon);
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		changeIconImgSrc(iconSun);
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		changeIconImgSrc(iconMoon);
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	changeIconImgSrc(iconMoon);
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	changeIconImgSrc(iconSun);
}
*/