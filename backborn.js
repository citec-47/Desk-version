const getMobileMenu = document.getElementById('MobileMenu');

// For Mobile Menu
// eslint-disable-next-line no-unused-vars
function MobileMenu() {
  if (getMobileMenu.style.display === 'block') {
    getMobileMenu.style.display = 'none';
  } else {
    getMobileMenu.style.display = 'block';
  }
}

// For email Validation.
const contactsForm = document.getElementById('contact-form');
const email = document.getElementById('email');
const emailLabel = document.getElementById('label-email');
const underCase = /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

// eslint-disable-next-line no-unused-vars
function emailValidated() {
  if (underCase.test(email.value)) {
    contactsForm.submit();
    contactsForm.reset();
    emailLabel.style.display = 'none';
    email.style.border = 'none';
    return false;
  }
  emailLabel.style.display = 'block';
  email.style.border = '3px solid red';
  return false;
}

// For local Storage
const fullName = document.getElementById('fullName');
const contactsText = document.getElementById('contact_Text');

function saveStorage() {
  // javaScript object
  const contactForm = {
    fullName: fullName.value,
    email: email.value,
    contactsTex: contactsText.value,
  };
  localStorage.setItem('contactForm', JSON.stringify(contactForm));
}

document.addEventListener('focusout', saveStorage);
function showStorageValues() {
  if (localStorage.getItem('contactForm')) {
    const contactForm = JSON.parse(localStorage.getItem('contactForm'));
    const recentName = contactForm.fullName;
    const recentEmail = contactForm.email;
    const recentTextarea = contactForm.contactsTex;

    fullName.value = recentName;
    email.value = recentEmail;
    contactsText.value = recentTextarea;
  } else {
    fullName.value = '';
    email.value = '';
    contactsText.value = '';
  }
}

window.addEventListener('load', showStorageValues);