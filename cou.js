var link = document.getElementById('link');
var counter = document.getElementById('counter');
var count = 0;

link.addEventListener('click', function() {
    count++;
    counter.textContent = count;
    window.open(link.href, '_blank');
    event.preventDefault();
});
