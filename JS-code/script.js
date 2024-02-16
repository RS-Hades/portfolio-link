const themeChecker = document.getElementById('checker');
const root = document.querySelector(':root');


themeChecker.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  
    const getVar = document.getElementsByClassName('light-theme')
  
    if (getVar.length > 0) {
      root.style.setProperty('--main-color', '#F2E6D0');
      root.style.setProperty('--complementary-color', '#170137');
      root.style.setProperty('--second-color', '#75eadf');
      root.style.setProperty('--sixth-color', '#ff8eb0');
    } else {
      root.style.setProperty('--main-color', '#170137');
      root.style.setProperty('--complementary-color', '#F2E6D0');
      root.style.setProperty('--second-color', '#ffd91b');
      root.style.setProperty('--sixth-color', '#F235B0');
    }
  });

// copy button
const copyButton = document.getElementById('copy-button');
const linkEmail = document.getElementById('contact-link-email');

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(linkEmail.innerHTML);
  copyButton.innerHTML = 'Copied';
  setTimeout(function () {
    copyButton.innerHTML = 'Copy';
  }, 1000);
});
