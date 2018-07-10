
var images = document.getElementById('images');
images.addEventListener('click', change);

function change(event) {
    event = event || window.event;
    var targetElements = event.target;
    if (targetElements.tagName === 'IMG') {
        document.getElementById('current').src = targetElements.getAttribute('src');
    }
}
;







