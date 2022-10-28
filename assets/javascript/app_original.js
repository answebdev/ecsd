// Voicemaker: https://voicemaker.in/
// Wideo: https://wideo.co/text-to-speech/
// Sad Trombone: https://www.myinstants.com/en/instant/sad-trombone/
// Fanfare: https://free-loops.com/7590-charge-fanfare-mp3.html

// Data
const studentData = [
  {
    id: 1,
    name: 'Big Boss Man Adolf, AKA Abduladolf (Mr. Funny)',
    country: 'n/a',
    likes: 'n/a',
    dislikes: 'n/a',
    img: 'https://www.pngitem.com/pimgs/m/258-2584491_kenny-south-park-png-transparent-png.png',
    bio: 'Homework loves you.',
    button_id: 'abduladolf',
  },
  {
    id: 2,
    name: 'President Amin',
    country: 'Saudi Arabia',
    likes: 'Eggs and cheese',
    dislikes: 'Not eating eggs and cheese',
    img: 'https://i1.sndcdn.com/artworks-000379239159-qi6n15-t500x500.jpg',
    bio: 'Likes bread, cheese, eggs (sometimes chicken) for breakfast.',
    button_id: 'amin',
  },
  {
    id: 3,
    name: 'Mutaz',
    likes: 'Cleaning his ears',
    dislikes: 'When Papa Mutaz sneaks into his room secretly',
    country: 'Saudi Arabia',
    img: 'https://entertainment.time.com/wp-content/uploads/sites/3/2013/05/fictioninfluence_list_homersimpson.jpg',
    bio: 'Cleans his ears every day. Sleeps while Papa Mutaz cleans his room.',
    button_id: 'mutaz',
  },
  {
    id: 4,
    name: 'Abdulaziz',
    likes: 'After parties',
    dislikes: 'No after parties',
    country: 'Saudi Arabia',
    img: 'https://i1.sndcdn.com/avatars-000022201824-zd09tb-t500x500.jpg',
    bio: "Sometimes Papa Mutaz. Sometimes sneaks in to clean Mutaz's room.",
    button_id: 'aziz',
  },
  {
    id: 5,
    name: 'Nasser',
    likes: 'Recording video selfies, Club Nasser',
    dislikes: 'Homework',
    country: 'Saudi Arabia',
    img: 'https://us.123rf.com/450wm/mickallnice/mickallnice1705/mickallnice170500002/77255576-kid-doing-a-homework-vector-and-illustration.jpg?ver=6',
    bio: 'Loves doing homework every day, but also has homework phobia.',
    button_id: 'nasser',
  },
  {
    id: 6,
    name: 'Jenny',
    likes: 'The beach',
    dislikes: 'n/a',
    country: 'Taiwan',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCNwfy7UW0lHwx6p8BPlTNgclkr3pMCIDBHfQGJJKDsOvEOX4GxhrX5lpWgwqayOF7VA&usqp=CAU',
    bio: 'Wants to go on vacation. Loves taking pictures of the sunset.',
    button_id: 'jenny',
  },
  {
    id: 7,
    name: 'Mohammad',
    likes: 'Donuts',
    dislikes: 'A class without donuts',
    country: 'Saudi Arabia',
    img: 'https://ih1.redbubble.net/image.986147108.2204/pp,840x830-pad,1000x1000,f8f8f8.jpg',
    bio: 'Bringer of donuts.',
    button_id: '',
  },
  {
    id: 8,
    name: 'Saleh',
    likes: 'n/a',
    dislikes: 'n/a',
    country: 'Saudi Arabia',
    img: 'https://i.pinimg.com/originals/dd/0a/7b/dd0a7b1b9cbf38774f80e4b9042608ea.jpg',
    bio: 'Bringer of himself.',
    button_id: '',
  },
  {
    id: 9,
    name: 'Rashed',
    likes: 'n/a',
    dislikes: 'n/a',
    country: 'Saudi Arabia',
    img: 'https://preview.redd.it/erimg7yicns41.jpg?auto=webp&s=6f1d86315cef37dc5f8d71edb613271614b28604',
    bio: 'First graduate to the next level.',
    button_id: '',
  },
  {
    id: 10,
    name: 'Masaumi',
    likes: 'Sleep, baseball, and dogs',
    dislikes: 'Not sleeping',
    country: 'Japan',
    img: 'https://i.dlpng.com/static/png/4654585-boy-walking-the-dog-walking-clipart-dog-clipart-boy-clipart-png-boy-take-a-walk-png-650_651_preview.png',
    bio: 'Has two cute chihuahuas and loves baseball.',
    button_id: '',
  },
  {
    id: 11,
    name: 'Michelle',
    likes: 'San Diego',
    dislikes: 'Working as an accountant',
    country: 'Taiwan',
    img: 'https://us.123rf.com/450wm/esheluxina/esheluxina1811/esheluxina181100153/127708976-business-and-finance-flat-style-vector-illustration-clipart-.jpg?ver=6',
    bio: 'Comes from Taiwan and works as an accountant.',
    button_id: 'michelle',
  },
  {
    id: 12,
    name: 'Yazeed',
    likes: 'Waka waka',
    dislikes: 'A day without waka waka',
    country: 'Saudi Arabia',
    img: 'https://clickclack.es/WebRoot/Store14/Shops/536773c5-8a25-42ea-8b30-6260eeefd1b5/629B/05BA/0602/3EEA/652D/0A48/3559/1587/_KAI9022_ml.JPG',
    bio: 'My name is Yazeed. Waka waka waka.',
    button_id: 'yazeed',
  },
];

// Sort 'studentData'
// .sort(() => Math.random() - 0.5);

// Create copy of 'studentData'
// var newStudentData = [].concat(studentData)
//     // sort randomly
//     .sort(() => Math.random() - 0.5);

// How to randomize (shuffle) a JavaScript array?: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// import studentData from '../data/data.js';
// import studentData from '../data/data.json' assert { type: 'json' };

// How to import a JSON file in JavaScript (ES6 Modules): https://bobbyhadz.com/blog/javascript-import-json-file

const studentContainer = document.querySelector('.students');
const studentList = studentData
  .map((student) => {
    return `
          <div class="row">
              <div class="col-sm-4">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <img src=${student.img} class="card-img-top" alt=${student.name}>
                          <h5 style="margin-top: 10px" class="card-title">${student.name}</h5>
                          <p class="card-text">${student.bio}</p>
                          <button class="details-btn" type="button">DETAILS</button>
                          <div class="details-section">
                              <p><strong>Country: </strong>${student.country}</p>
                              <p><strong>Likes: </strong>${student.likes}</p>
                              <p><strong>Dislikes: </strong>${student.dislikes}</p>
                          </div>
                          <div>
                              <button id="${student.button_id}-btn" type="button" class="btn btn-dark">Listen <i class="fa-solid fa-circle-play"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
  })
  .join('');

studentContainer.innerHTML = studentList;

// Selectors
var trombone = document.getElementById('trombone-btn');
var woohoo = document.getElementById('woohoo-btn');
var charge = document.getElementById('charge-btn');
var button1 = document.getElementById('amin-btn');
var button2 = document.getElementById('mutaz-btn');
var button3 = document.getElementById('aziz-btn');
var button4 = document.getElementById('nasser-btn');
var button5 = document.getElementById('jenny-btn');
var button6 = document.getElementById('abduladolf-btn');
var button7 = document.getElementById('michelle-btn');
var button8 = document.getElementById('yazeed-btn');

// Event Listeners
trombone.addEventListener('click', playTrombone);
woohoo.addEventListener('click', playWoohoo);
charge.addEventListener('click', playCharge);
button1.addEventListener('click', playAmin);
button2.addEventListener('click', playMutaz);
button3.addEventListener('click', playAziz);
button4.addEventListener('click', playNasser);
button5.addEventListener('click', playJenny);
button6.addEventListener('click', playAbduladolf);
button7.addEventListener('click', playMichelle);
button8.addEventListener('click', playYazeed);

// Functions
function playTrombone() {
  var audio = new Audio('./assets/audio/sadtrombone.mp3');
  audio.play();
}

function playWoohoo() {
  var audio = new Audio('./assets/audio/woohoo.mp3');
  audio.play();
}

function playCharge() {
  var audio = new Audio('./assets/audio/fanfare.mp3');
  audio.play();
}

function playAmin() {
  var audio = new Audio('./assets/audio/amin.mp3');
  audio.play();
}

function playMutaz() {
  var audio = new Audio('./assets/audio/mutaz.mp3');
  audio.play();
}

function playAziz() {
  var audio = new Audio('./assets/audio/aziz.mp3');
  audio.play();
}

function playNasser() {
  var audio = new Audio('./assets/audio/nasser.mp3');
  audio.play();
}

function playJenny() {
  var audio = new Audio('./assets/audio/jenny.mp3');
  audio.play();
}

function playAbduladolf() {
  var audio = new Audio('./assets/audio/abduladolf.mp3');
  audio.play();
}

function playMichelle() {
  var audio = new Audio('./assets/audio/michelle.mp3');
  audio.play();
}

function playYazeed() {
  var audio = new Audio('./assets/audio/yazeed.mp3');
  audio.play();
}

// Dark Mode
function darkMode() {
  var element = document.body;
  element.classList.toggle('dark-mode');
  var button = document.getElementById('mode-btn');

  if (element.classList.contains('dark-mode')) {
    button.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    button.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  document.querySelector('.heading').classList.toggle('dark-mode-heading');
  document.querySelector('.sub-heading').classList.toggle('dark-mode-heading');
  document
    .querySelector('.sub-heading-text')
    .classList.toggle('dark-mode-heading');

  // Iterate over card nodes and each card's text: https://stackoverflow.com/questions/55315323/how-to-select-all-elements-with-a-class-in-js
  var cards = document.querySelectorAll('.card-body');
  cards.forEach((card) => {
    card.classList.toggle('dark-mode-card');
  });

  var cardTexts = document.querySelectorAll('.card-text');
  cardTexts.forEach((cardText) => {
    cardText.classList.toggle('dark-mode-card');
  });

  var detailsTexts = document.querySelectorAll('.details-section');
  detailsTexts.forEach((detailsText) => {
    detailsText.classList.toggle('dark-mode-card');
  });

  var detailsBtns = document.querySelectorAll('.details-btn');
  detailsBtns.forEach((detailsBtn) => {
    detailsBtn.classList.toggle('dark-mode-details-btn');
  });
}

// Details Button Logic
// See: https://stackoverflow.com/questions/64243958/how-do-i-change-the-property-of-a-clicked-element-which-shares-its-class-with-ma
// Also: https://stackoverflow.com/questions/57774772/how-to-get-child-element-in-a-click-event

let detailsBtn = document.querySelectorAll('.details-btn');

function studentDetails(event) {
  // Target button clicked and toggle class
  event.target.parentNode
    .querySelector('.details-section')
    .classList.toggle('show-details');
}

detailsBtn.forEach((details) =>
  details.addEventListener('click', studentDetails)
);

// End Details Button Logic

// Back to Top button: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
let mybutton = document.getElementById('backToTopBtn');

function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
