function removeWarning() {
    var warning = document.getElementById('warningPresence');
    if (warning.style.display === 'none') {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
}