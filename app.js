const nav = document.querySelector('#nav');
const img = document.querySelector('#img');

const menu = document.querySelector('#menu');
const imgmain = document.querySelector('.imgmain');

const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  
  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
  img.classList.toggle('displaynone');

  // const imgmains = document.querySelectorAll('.imgmain');
  // imgmains.forEach(imgmain => imgmain.style.visibility = 'hidden');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  
  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

// ----- checkbox -------------



// var myCheckbox = document.getElementById('myCheckbox');

// myCheckbox.addEventListener('change', function() {
//   var isChecked = myCheckbox.checked;
  
//   // Demander la confirmation de l'utilisateur
//   if (confirm('Voulez-vous vraiment changer la position du bouton ?')) {
//     console.log(isChecked); // ou utilisez la variable isChecked pour votre propre logique métier
//   } else {
//     // Annuler le changement de position du bouton
//     myCheckbox.checked = !isChecked;
//   }
// });

var myCheckbox = document.getElementById('myCheckbox');

myCheckbox.addEventListener('change', function() {
  var isChecked = myCheckbox.checked;
  
  // Demander la confirmation de l'utilisateur
  var confirmationMessage = isChecked ? 'Voulez-vous recevoir les rappels par SMS ?' : 'Voulez-vous recevoir les rappels par email ?';
  if (confirm(confirmationMessage)) {
    console.log(isChecked); // ou utilisez la variable isChecked pour votre propre logique métier
  } else {
    // Annuler le changement de position du bouton
    myCheckbox.checked = !isChecked;
  }
});
