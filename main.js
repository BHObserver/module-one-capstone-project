const moreBtn = document.querySelector('.moreBtn');
const performer = document.querySelectorAll('performer');
moreBtn.addEventListener('click', () => {
  performer.style.display = 'block';
});