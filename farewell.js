const textDivs = document.querySelectorAll('.text1,.text2,.text3,.text4,.text5');

window.addEventListener('scroll', () => {
  textDivs.forEach((div) => {
    const rect = div.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      div.classList.add('fade-in');
    }
  });
});

function navigateTo(page) {
    window.location.href = page;
  }