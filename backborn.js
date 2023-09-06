const getMobileMenu = document.getElementById('MobileMenu');

//For Mobile Menu
// eslint-disable-next-line no-unused-vars
function MobileMenu () {
  if ( getMobileMenu.style.display == 'block') {
    getMobileMenu.style.display = 'none';
  } else {
    getMobileMenu.style.display  = 'block';
    }
}


// For email Validation.
const contacts_form = document.getElementById('contact-form');
const email = document.getElementById('email');
const email_Label = document.getElementById('label-email');
const underCase = /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

// eslint-disable-next-line no-unused-vars
function email_validated() {
  if (underCase.test(email.value)) {
    contacts_form.submit();
    contacts_form.reset();
    email_Label.style.display = 'none';
    email.style.border = 'none';
    return false;
  } else {
    email_Label.style.display = 'block';
    email.style.border = '3px solid red';
    return false;
  }
}

//For local Storage
const fullName = document.getElementById('fullName');
const contact_Text = document.getElementById('contact_Text');
document.addEventListener('focusout', saveStorage);

function saveStorage() {
  //javaScript object
  const contactForm = {
  fullName: fullName.value,
  email: email.value,
  contact_Text: contact_Text.value
};
localStorage.setItem('contactForm', JSON.stringify(contactForm));
}

function showStorageValues() {
  if (localStorage.getItem('contactForm')) {
    const contactForm = JSON.parse(localStorage.getItem('contactForm'));
    const recentName = contactForm.fullName;
    const recentEmail = contactForm.email;
    const recentTextarea = contactForm.contact_Text;

    fullName.value = recentName;
    email.value = recentEmail;
    contact_Text.value = recentTextarea;

  } else {
    fullName.value = '';
    email.value = '';
    contact_Text.value = '';
  }
}

window.addEventListener('load', showStorageValues);
