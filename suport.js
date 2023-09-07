// Cards information
const info = {
  works: [
    {
      id: 1,
      image: './image/card5.png',
      title: 'ToDo List',
      subtit1: 'MICROVERSE',
      subtit2: 'Front-End Dev',
      subtit3: '2022',
      description: 'to-do list application using Js/webpack',
      techno1: 'react & redux',
      techno2: 'javaScript',
      techno3: 'css',
      popup_description: `ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or
     list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.
     It is helpful in planning our daily schedules.`,
      livelink: 'https://citec-47.github.io/todo-list-js/',
      sourcelink: 'https://github.com/citec-47/todo-list-js',
    },
    {
      id: 2,
      image: './image/card6.png',
      title: 'Countries Details',
      subtit1: 'MICROVERSE',
      subtit2: 'Frontend Dev',
      subtit3: '2023',
      description: `This is a capstone project that uses React and 
    Redux technologies. The website provides detailed information about countries by utilizing an API.`,
      techno1: 'ruby on rails',
      techno2: 'react & redux',
      techno3: 'database',
      popup_description: `This is a capstone project that uses React and 
    Redux technologies. The website provides detailed information about countries by utilizing an API.
    When you click on any of the countries,it shows you, the population size, surface area
    The continent, the capital city, the flag and a link to the map of the country`,
      livelink: 'https://maurice.onrender.com/',
      sourcelink: 'https://github.com/citec-47/React-capstone',
    },
    {
      id: 3,
      image: './image/card7.png',
      title: "Space Traveler's Hub",
      subtit1: 'MICROVERSE',
      subtit2: 'Front-End Dev',
      subtit3: '2022',
      description: `Space Traveler's Hub is a responsive web application built
    in React & Redux, allowing users to book rockets and join selected space missions
    working with real live data from the SpaceX API.`,
      techno1: 'react & redux',
      techno2: 'javaScript',
      techno3: 'css',
      popup_description: `Space Traveler's Hub is a web application
    for a company that provides commercial and scientific space travel services.
    The application allow users to book rockets and join selected space missions,
    working with real live data from the SpaceX API.`,
      livelink: 'https://mauricespace.onrender.com/',
      sourcelink: 'https://github.com/citec-47/Travellers',
    },
    {
      id: 4,
      image: './image/card8.png',
      title: 'LeaderBoard App',
      subtit1: 'MICROVERSE',
      subtit2: 'Front-End Dev',
      subtit3: '2022',
      description: `A leaderboard that displays scores submitted by different players. Allows submission of your own score.
    All data is preserved thanks to the external Leaderboard API service.`,
      techno1: 'html',
      techno2: 'css',
      techno3: 'javaScript',
      popup_description: `A leaderboard that displays scores submitted by different players. Allows submission of your own score.
    All data is preserved thanks to the external Leaderboard API service.`,
      livelink: 'https://citec-47.github.io/Leader-board/dist/',
      sourcelink: 'https://github.com/citec-47/Leader-board',
    },
  ],
};

// Work cards
const theWorks = info.works;
const getWorkSection = document.getElementById('section_B');

function creatingWorkSection() {
  theWorks.forEach((data) => {
    getWorkSection.innerHTML += `<div id="work${data.id}" class="card card-odd"><div class="works-img" >
        <img src="${data.image}" alt="Work ${data.id}">
      </div>
      <div class="works">
        <h2>${data.title}</h2>
        <div class="infoline">
          <h3>${data.subtit1}</h3>
          <img src="./image/dot.png" alt="">
          <h4>${data.subtit2}</h4>
          <img src="./image/dot.png" alt="">
          <h4>${data.subtit3}</h4>
        </div>
        <p>${data.description}</p>
        <div class="work-languages">
          <ul>
            <li>${data.techno1}</li>
            <li>${data.techno2}</li>
            <li>${data.techno3}</li>
          </ul>
        </div>
        <button type="button" onclick="WorkCArdS('popcard${data.id}')" class="work-btn">See Project</button>
      </div>
      </div>
  `;
  });
}

// Popup Cards
const getPopupSection = document.getElementById('popup-section_B');

function creatingPopupSection() {
  theWorks.forEach((data) => {
    getPopupSection.innerHTML += `
      <div id="popcard${data.id}">
        <div class="pop-title">
        <h2>${data.title}</h2>
        <a href="javascript:void(0);" id="pop-close" onclick="WorkCArdS('popcard${data.id}')">
          <img  src="./image/pop-close.svg"  alt="close">
        </a>
        </div>
        <div class="pop-infoline">
        <h3>${data.subtit1}</h3>
        <img src="./image/dot.png" alt="">
        <h4>${data.subtit2}</h4>
        <img src="./image/dot.png" alt="">
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
            <li>${data.techno1}</li>
            <li>${data.techno2}</li>
            <li>${data.techno3}</li>
          </ul>
          <div class="pop-buttons">
            <button type="button" class="pop-btn" onclick=
              "parent.open('${data.livelink}')">See Live
              <img src="./image/popup-btn-Icon.png" alt=""></button>
            <button type="button" class="pop-btn" onclick=
              "parent.open('${data.sourcelink}')">See Source
              <img src="./image/popup-github.png" alt=""></button>
          </div>
        </div>
        </div>
      </div>`;
  });
}

// For the Popup Cards
// eslint-disable-next-line no-unused-vars
function WorkCArdS(popcardNumber) {
  if (document.getElementById(popcardNumber).style.display === 'block') {
    document.getElementById(popcardNumber).style.display = 'none';
    document.getElementById('popup-section_B').style.display = 'none';
    document.getElementById('toolbas').style.display = 'flex';
    document.getElementById('section-B').style.display = 'block';
    document.getElementById('section_B').style.display = 'grid';

    document.getElementById('about-section').style.display = 'flex';
    document.getElementById('contact-background').style.display = 'block';

    document.getElementById('desktop-menu').style.display = 'flex';

    // jump to the original Card
    window.location.href = `#work${popcardNumber.substring(7, 8)}`;
  } else {
    document.getElementById(popcardNumber).style.display = 'block';
    document.getElementById('popup-section_B').style.display = 'flex';
    document.getElementById('toolbas').style.display = 'none';
    document.getElementById('section-B').style.display = 'none';
    document.getElementById('section_B').style.display = 'none';

    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-background').style.display = 'none';

    document.getElementById('desktop-menu').style.display = 'none';
  }
}

creatingWorkSection();
creatingPopupSection();