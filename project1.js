// efek muncul saat scroll
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // biar bisa animasi ulang
    }
  });
});
hiddenElements.forEach(el => observer.observe(el));

// progres bar card
const skillSection = document.querySelector('#skills');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = document.querySelectorAll('.progress-bar div');
      progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress;
      });
      skillObserver.unobserve(skillSection); // biar gak ngulang tiap scroll
    }
  });
}, { threshold: 0.4 }); // muncul 40% di layar baru aktif
skillObserver.observe(skillSection);
