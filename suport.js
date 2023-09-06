
// Cards information
const info = {
  works: [
  {
    id: 1,
    image: 'images/work5.png',
    title: 'ToDo List',
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `to-do list application using Js/webpack`,
    tech1: 'react & redux',
    tech2: 'javaScript',
    tech3: 'css',
      popup_description: `ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or
     list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.
     It is helpful in planning our daily schedules.`,
     livelink: 'https://citec-47.github.io/todo-list-js/',
     sourcelink: 'https://github.com/citec-47/todo-list-js'
  },
  {
    id: 2,
    image: 'images/work6.png',
    title: 'The Future Mobility',
    subtit1: 'MICROVERSE',
    subtit2: 'Full Stack Dev',
    subtit3: '2023',
    description: `The Future Mobility is a Full Stack web application,
    developed in Ruby on Rails for the API only back-end server
    and in React & Redux for the front-end webapp.`,
    tech1: 'ruby on rails',
    tech2: 'react & redux',
    tech3: 'database',
    popup_description: `Future Mobility manages the CRUD of vehicles
    and reservations on an electric car website, which also allows the
    creation of new users and access through an authentication mechanism.
    Was developed by a team of four members.`,
    livelink: 'https://maurice.onrender.com/',
    sourcelink: 'https://github.com/citec-47/React-capstone'
  },
  {
    id: 3,
    image: 'images/work7.png',
    title: "Space Traveler's Hub",
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `Space Traveler's Hub is a responsive web application built
    in React & Redux, allowing users to book rockets and join selected space missions
    working with real live data from the SpaceX API.`,
    tech1: 'react & redux',
    tech2: 'javaScript',
    tech3: 'css',
    popup_description: `Space Traveler's Hub is a web application
    for a company that provides commercial and scientific space travel services.
    The application allow users to book rockets and join selected space missions,
    working with real live data from the SpaceX API.`,
    livelink: 'https://mauricespace.onrender.com/',
    sourcelink: 'https://github.com/citec-47/Travellers'
  },
  {
    id: 4,
    image: 'images/work8.png',
    title: 'LeaderBoard App',
    subtit1: 'MICROVERSE',
    subtit2: 'Front-End Dev',
    subtit3: '2022',
    description: `A leaderboard that displays scores submitted by different players. Allows submission of your own score.
    All data is preserved thanks to the external Leaderboard API service.`,
    tech1: 'html',
    tech2: 'css',
    tech3: 'javaScript',
    popup_description: `A leaderboard that displays scores submitted by different players. Allows submission of your own score.
    All data is preserved thanks to the external Leaderboard API service.`,
    livelink: 'https://citec-47.github.io/Leader-board/dist/',
    sourcelink: 'https://github.com/citec-47/Leader-board'
  }
]
}

//Work cards
const theWorks = info.works;
const queryWorkSection = document.getElementById ('work-section');

function createWorkSection() {
  theWorks.forEach(  (data) => {
    queryWorkSection.innerHTML += `<div id="work${data.id}" class="card card-odd"><div class="works-img" >
        <img src="${data.image}" alt="Work ${data.id}">
      </div>
      <div class="works">
        <h2>${data.title}</h2>
        <div class="infoline">
          <h3>${data.subtit1}</h3>
          <img src="images/dot.png" alt="">
          <h4>${data.subtit2}</h4>
          <img src="images/dot.png" alt="">
          <h4>${data.subtit3}</h4>
        </div>
        <p>${data.description}</p>
        <div class="work-languages">
          <ul>
            <li>${data.tech1}</li>
            <li>${data.tech2}</li>
            <li>${data.tech3}</li>
          </ul>
        </div>
        <button type="button" onclick="WorkCards('popcard${data.id}')" class="work-btn">See Project</button>
      </div>
      </div>
  `;
 }
 )
}

//Popup Cards
const queryPopupSection = document.getElementById ('popup-work-section');

function createPopupSection() {
  theWorks.forEach(  (data) => {
    queryPopupSection.innerHTML += `
      <div id="popcard${data.id}">
        <div class="pop-title">
        <h2>${data.title}</h2>
        <a href="javascript:void(0);" id="pop-close" onclick="WorkCards('popcard${data.id}')">
          <img  src="./images/pop-close.svg"  alt="close">
        </a>
        </div>
        <div class="pop-infoline">
        <h3>${data.subtit1}</h3>
        <img src="images/dot.png" alt="">
        <h4>${data.subtit2}</h4>
        <img src="images/dot.png" alt="">
        <h4>${data.subtit3}</h4>
        </div>

        <div class="pop-img" >
        <img src=${data.image} alt="Work 1">
        </div>

        <div class="pop-details">
        <div class="pop-text">
          <p>${data.popup_description}
          </p>
        </div>
        <div class="pop-languages">
          <ul>
            <li>${data.tech1}</li>
            <li>${data.tech2}</li>
            <li>${data.tech3}</li>
          </ul>
          <div class="pop-buttons">
            <button type="button" class="pop-btn" onclick=
              "parent.open('${data.livelink}')">See Live
              <img src="images/popup-btn-Icon.png" alt=""></button>
            <button type="button" class="pop-btn" onclick=
              "parent.open('${data.sourcelink}')">See Source
              <img src="images/popup-github.png" alt=""></button>
          </div>
        </div>
        </div>
      </div>`;
    }
  )
}

//For the Popup Cards
// eslint-disable-next-line no-unused-vars
function WorkCards (popcardNumber) {

  if ( document.getElementById(popcardNumber).style.display == 'block') {
   document.getElementById(popcardNumber).style.display = 'none';
   document.getElementById('popup-work-section').style.display = 'none';
   document.getElementById('toolbar').style.display = 'flex';
   document.getElementById('section-headline').style.display = 'block';
   document.getElementById('work-section').style.display = 'grid';

   document.getElementById('about-section').style.display = 'flex';
   document.getElementById('contact-background').style.display = 'block';

   document.getElementById('menu-desktop').style.display = 'flex';

   //jump to the original Card
   window.location.href = "#work"+ popcardNumber.substring(7, 8);
  } else {
   document.getElementById(popcardNumber).style.display = 'block';
   document.getElementById('popup-work-section').style.display = 'flex';
   document.getElementById('toolbar').style.display = 'none';
   document.getElementById('section-headline').style.display = 'none';
   document.getElementById('work-section').style.display = 'none';

   document.getElementById('about-section').style.display = 'none';
   document.getElementById('contact-background').style.display = 'none';

   document.getElementById('menu-desktop').style.display = 'none';

 }
}

createWorkSection();
createPopupSection();
