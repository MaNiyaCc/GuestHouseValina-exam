const onRoomClick = (roomName) => {
    switch(roomName) {
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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

const popupElement = document.getElementById('side-menu')
document.addEventListener('scroll', (e) => {
    const isShown = popupElement.style.opacity === 1;
    if(!isShown) {
        popupElement.style.opacity = 1;
    }
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

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

