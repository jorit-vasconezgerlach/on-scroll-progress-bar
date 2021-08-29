progressBar = document.getElementById('progressBar');

h = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    progressBarHeight = (window.pageYOffset/h)*100;
    progressBar.style.height = progressBarHeight+'%';
}