const moreBtn = document.querySelector('.moreBtn');
const performer = document.querySelectorAll('.performer');
moreBtn.addEventListener('click', () => {
    performer.forEach((e) => {
        e.style.display = 'block';
    }) 
});