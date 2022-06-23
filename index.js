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