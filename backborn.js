const queryMobileMenu = document.getElementById('MobileMenu');

//For Mobile Menu
// eslint-disable-next-line no-unused-vars
function MobileMenu () {
  if ( queryMobileMenu.style.display == 'block') {
    queryMobileMenu.style.display = 'none';
  } else {
    queryMobileMenu.style.display  = 'block';
    }
}


// For email Validation.
const contact_form = document.getElementById('contact-form');
const email = document.getElementById('email');
const emailLabel = document.getElementById('label-email');
const underCase = /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

// eslint-disable-next-line no-unused-vars
function email_validation() {
  if (underCase.test(email.value)) {
    contact_form.submit();
    contact_form.reset();
    emailLabel.style.display = 'none';
    email.style.border = 'none';
    return false;
  } else {
    emailLabel.style.display = 'block';
    email.style.border = '3px solid red';
    return false;
  }
}

//For local Storage
const fullName = document.getElementById('fullName');
const contactText = document.getElementById('contactText');
document.addEventListener('focusout', saveStorage);

function saveStorage() {
  //javaScript object
  const contactForm = {
  fullName: fullName.value,
  email: email.value,
  contactText: contactText.value
};
localStorage.setItem('contactForm', JSON.stringify(contactForm));
}

function readStorageValues() {
  if (localStorage.getItem('contactForm')) {
    const contactForm = JSON.parse(localStorage.getItem('contactForm'));
    const currentName = contactForm.fullName;
    const currentEmail = contactForm.email;
    const currentTextarea = contactForm.contactText;

    fullName.value = currentName;
    email.value = currentEmail;
    contactText.value = currentTextarea;

  } else {
    fullName.value = '';
    email.value = '';
    contactText.value = '';
  }
}

window.addEventListener('load', readStorageValues);
