
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U' || 
                          event.key === 's' || event.key === 'S' ||
                          event.key === 'a' || event.key === 'A' ||
                          event.key === 'c' || event.key === 'C')) {
        event.preventDefault();
    }
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && ['I','i','J','j'].includes(event.key))) {
        event.preventDefault();
    }
});
document.addEventListener('copy', function (e) {
    e.preventDefault();
});
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});
