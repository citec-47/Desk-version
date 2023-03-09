const statusbar = document.getElementById('statusbar');
const navMenu = document.getElementById('home1');
const closeMenu = document.getElementById('close');

function mobileMenu() {
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = ' none';
  }
}

statusbar.addEventListener('click', mobileMenu);
// close menc

function menuClose() {
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = ' none';
  }
}
closeMenu.addEventListener('click', menuClose);

// calling html//

const works = [
  {
    title: 'Tonic',
    worktype: { org: 'CANOPY', type: 'Back End Dev', year: '2017' },
    workImage: 'assets/Images/numberone.png',
    workpara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry..',
    workcodes: ['Css', 'Html', 'Javascript'],
    workLive: 'https://citec-47.github.io/Desk-version/',
    workSource: 'https://github.com/citec-47/Desk-version/tree/pop-branch',
    kSource: '<i class="fa-brands fa-github"></i>',
    liveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    live: 'See Live',
    source: 'see-source',
  },
  {
    title: 'Multi-Post Stories',
    workpara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    workImage: '/assets/Images/imagetwo.png',
    workcodes: ['Css', 'Html', 'Javascript'],
  },
  {
    title: 'Facebook 360',
    workImage: '/assets/Images/numberfour.png',
    workpara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    workcodes: ['Css', 'Html', 'Javascript'],
  },
  {
    title: 'Uber Navigation',
    workImage: '/assets/Images/numbertwo.png',
    workpara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    workcodes: ['Css', 'Html', 'Javascript'],
  },
  {
    image: '/assets/Images/exit.png',
  },
];

const workout = document.createElement('div');
workout.id = 'comeout';
workout.classList = 'completwork';
document.body.append(workout);

const workin = document.createElement('div');
workin.classList = 'container';
workout.append(workin);

const exit = document.createElement('img');
exit.id = 'menlock';
exit.classList = 'picture';
exit.src = `${works[4].image}`;
workin.appendChild(exit);

const nameText = document.createElement('div');
nameText.classList = 'param';
workin.append(nameText);

const para = document.createElement('h1');
para.innerText = `${works[0].title}`;
nameText.append(para);

const unlist = document.createElement('ul');
unlist.classList = 'list';
workin.append(unlist);

const orderlist = document.createElement('li');
orderlist.classList = 'cartigory';
orderlist.textContent = `${works[0].worktype.org}`;
unlist.appendChild(orderlist);

const orderlist1 = document.createElement('li');
orderlist1.classList = 'cartigory';
orderlist1.textContent = `${works[0].worktype.type}`;
unlist.appendChild(orderlist1);

const orderlist2 = document.createElement('li');
orderlist2.classList = 'cartigory';
orderlist2.textContent = `${works[0].worktype.year}`;
unlist.appendChild(orderlist2);

const image = document.createElement('img');
image.src = `${works[0].workImage}`;
image.classList = 'pics';
workin.appendChild(image);

const workstwo = document.createElement('p');
workstwo.classList = 'wkstwo';
workstwo.innerText = `${works[0].workpara}`;
workin.appendChild(workstwo);

const unlt = document.createElement('ul');
unlt.classList = 'Code';
workin.appendChild(unlt);

const unlt2 = document.createElement('li');
unlt2.classList = 'codlist';
unlt2.innerText = `${works[0].workcodes[0]}`;
unlt.appendChild(unlt2);

const unlt3 = document.createElement('li');
unlt3.classList = 'codlist';
unlt3.innerText = `${works[0].workcodes[1]}`;
unlt.appendChild(unlt3);

const unlt4 = document.createElement('li');
unlt4.classList = 'codlist';
unlt4.innerText = `${works[0].workcodes[2]}`;
unlt.appendChild(unlt4);

const Button = document.createElement('div');
Button.classList = 'booton';
workin.appendChild(Button);

const link = document.createElement('a');
link.classList = 'buttout';
link.innerHTML = `${works[0].live} ${works[0].liveIcons} via`;
link.href = `${works[0].workLive}`;
Button.appendChild(link);

const link2 = document.createElement('a');
link2.classList = 'buttout';
link2.innerHTML = `${works[0].source} ${works[0].kSource}`;
link2.href = `${works[0].workSource}`;
Button.appendChild(link2);

const myworks = document.querySelectorAll('.button');
const worksbox = document.getElementById('comeout');
const worksClose = document.getElementById('menlock');

for (let i = 0; i < 4; i += 1) {
  myworks[i].addEventListener('click', () => {
    if (worksbox.style.display === 'none') {
      worksbox.style.display = 'block';
      image.src = `${works[i].workImage}`;
      nameText.innerText = `${works[i].title}`;
      window.scroll(0, 1);
    } else {
      worksbox.style.display = 'none';
    }
  });
}

function booton() {
  if (worksbox.style.display === 'block') {
    worksbox.style.display = 'none';
  }
}

worksClose.addEventListener('click', booton);