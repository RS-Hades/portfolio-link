const expand_btn = document.getElementById("togglerLable");
const expandCheckbox = document.getElementById('toggleChecker');

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("expanded");
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const getClass = document.getElementsByClassName("expanded");
const firstLink = document.getElementById('nav-link1');
const secondLink = document.getElementById('nav-link2');
const thirdLink = document.getElementById('nav-link3');
const fourthLink = document.getElementById('nav-link4');

firstLink.addEventListener("click", () => {
  if (getClass.length !== 0) {  
    document.body.classList.toggle("expanded");
    expandCheckbox.checked = false ;
  }
});
secondLink.addEventListener("click", () => {
  if (getClass.length !== 0) {  
    document.body.classList.toggle("expanded");
    expandCheckbox.checked = false;
  }
});
thirdLink.addEventListener("click", () => {
  if (getClass.length !== 0) {  
    document.body.classList.toggle("expanded");
    expandCheckbox.checked = false;
  }
});
fourthLink.addEventListener("click", () => {
  if (getClass.length !== 0) {  
    document.body.classList.toggle("expanded");
    expandCheckbox.checked = false;
  }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const knowStateBtn = expand_btn.getPropertyValue('display');

// const fixedNavbar = () => {
//   if(knowStateBtn === 'none' && getClass !== 0) {
//     document.body.classList.toggle("expanded");
//   }
// };
// fixedNavbar();
