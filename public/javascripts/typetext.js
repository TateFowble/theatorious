var a = 0;
var text = 'saving one business at a time';
var speed = 200;

function typeWriter() {
    if (a < text.length) {
        document.getElementById('type').innerHTML += text.charAt(a);
        a++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();