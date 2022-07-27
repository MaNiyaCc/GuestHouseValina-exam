const onRoomClick = (roomName) => {
  switch (roomName) {
    case 'room1': {
      showRoomModal('../images/room1.jpg')
      break;
    }
    case 'room2': {
      showRoomModal('../images/room2.jpg')
      break;
    }
    case 'kitchen': {
      showRoomModal('../images/kitchen1.jpg')
      break;
    }
    case 'room3': {
      showRoomModal('../images/room3.jpg')
      break;
    }
    case 'bathroom': {
      showRoomModal('../images/bathroom1.jpg')
      break;
    }
  }
}
const showFloorModal = (src) => {
  const  imageSlider = document.getElementById("floor-slider");
  const modal = document.getElementsByClassName("floor-modal")[0];
  let i;
  let slides = document.querySelectorAll('.floor-slide');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }

  modal.style.display = 'flex';
  document.body.style.overflowY = 'hidden';

}

const showRoomModal = (src) => {
  // We get the image of the room and the modal
  const image = document.getElementById("room-preview");
  const modal = document.getElementsByClassName("room-modal")[0];

  // We show the modal, change the image source depending on the
  // clicked image and hide the scroll of the body
  image.src = src;
  modal.style.display = 'flex';
  document.body.style.overflowY = 'hidden';
}
window.onclick = function (event) {
  const modal = document.getElementsByClassName("room-modal"||"floor-modal")[0];
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY = 'scroll';
  }
}
const hideRoomModal = () => {
  const modal = document.getElementsByClassName("room-modal")[0];

  // We bring back the scroll and hide the modal
  modal.style.display = 'none'
  document.body.style.overflowY = 'scroll';
}

const openBookingModal = () => {
  const modal = document.getElementById('booking-modal')

  modal.style.display = 'flex'
  document.body.style.overflowY = 'hidden';
}


const hideBookingModal = () => {
  const modal = document.getElementById('booking-modal')

  modal.style.display = 'none'
  document.body.style.overflowY = 'scroll';
}

// document.getElementById("submit-button").addEventListener("click", function(e) {
//     e.preventDefault();

//     alert('To be implemented')
// });

Array.from(document.getElementsByClassName('active-day')).forEach(element => {
  element.addEventListener('click', openBookingModal);
});


//navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll('.slide');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 20000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', function () {

  var slideImages = document.querySelectorAll('.slide'),
    current = 0;
  //if javascript is on apply styling
  function jsActive() {
    for (var i = 0; i < slideImages.length; i++) {
      slideImages[i].classList.add('slider-active');
    }
  }
  // Clear images
  function reset() {
    for (var i = 0; i < slideImages.length; i++) {
      slideImages[i].classList.remove('slide-is-active');
    }
  }
  //init slider
  function startSlide() {
    reset();
    slideImages[0].classList.add('slide-is-active');
    setTimeout(function () {
      for (var i = 0; i < slideImages.length; i++) {
        slideImages[i].classList.add('slide-transition');
      }
    }, 20);




  }


});

const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker(e) {
  if (!checkEventPathForClass(e.path, 'dates')) {
    dates_element.classList.toggle('active');
  }
}

function goToNextMonth(e) {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  mth_element.textContent = months[month] + ' ' + year;
  populateDates();
}

function goToPrevMonth(e) {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  mth_element.textContent = months[month] + ' ' + year;
  populateDates();
}

function populateDates(e) {
  days_element.innerHTML = '';
  let amount_days = 31;

  if (month == 1) {
    amount_days = 28;
  }

  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement('div');
    day_element.classList.add('day');
    day_element.textContent = i + 1;

    if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
      day_element.classList.add('selected');
    }

    day_element.addEventListener('click', function () {
      selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
      selectedDay = (i + 1);
      selectedMonth = month;
      selectedYear = year;

      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;

      populateDates();
    });

    days_element.appendChild(day_element);
  }
}

// HELPER FUNCTIONS
function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
}
function formatDate(d) {
  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  let month = d.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  let year = d.getFullYear();

  return day + ' / ' + month + ' / ' + year;
}


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-04-12',

    eventDidMount: function(info) {
      var tooltip = new Tooltip(info.el, {
        title: info.event.extendedProps.description,
        placement: 'top',
        trigger: 'hover',
        container: 'body'
      });
    },

    events: [
      {
        title: 'All Day Event',
        description: 'description for All Day Event',
        start: '2022-04-01'
      },
      {
        title: 'Long Event',
        description: 'description for Long Event',
        start: '2022-04-07',
        end: '2022-04-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        description: 'description for Repeating Event',
        start: '2022-04-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        description: 'description for Repeating Event',
        start: '2022-04-16T16:00:00'
      },
      {
        title: 'Conference',
        description: 'description for Conference',
        start: '2022-04-11',
        end: '2022-04-13'
      },
      {
        title: 'Meeting',
        description: 'description for Meeting',
        start: '2022-04-12T10:30:00',
        end: '2022-04-12T12:30:00'
      },
      {
        title: 'Lunch',
        description: 'description for Lunch',
        start: '2022-04-12T12:00:00'
      },
      {
        title: 'Meeting',
        description: 'description for Meeting',
        start: '2022-04-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        description: 'description for Birthday Party',
        start: '2022-04-13T07:00:00'
      },
      {
        title: 'Click for Google',
        description: 'description for Click for Google',
        url: 'http://google.com/',
        start: '2022-04-28'
      }
    ]
  });

  calendar.render();
});