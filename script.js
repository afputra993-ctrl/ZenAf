const wrapper = document.querySelector(".wrapper");
wrapper.innerHTML += wrapper.innerHTML;

const hapusWh = document.querySelectorAll(".wrapper");

// hapusWh.forEach(.wrapper => {
//   .wrapper.removeAttribute(width)
//   .wrapper.removeAttribute(height)
// });

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('Home');
  if (window.scrollY > 100) {
    navbar.classList.add('color')
    
  } else {
  
    navbar.classList.remove('color')
  }
  
});

window.addEventListener('scroll', function() {
  const judull = document.getElementById('judul');
  if (window.scrollY > 100) {
    judull.classList.add('remove')
  } else {
  judull.classList.remove('remove')
  }
});

window.addEventListener('scroll', function() {
  const paragraf = document.getElementById('p')
  if (window.scrollY > 100) {
  paragraf.classList.add('hilang')
  } else {
    paragraf.classList.remove('hilang')
  }
});

window.addEventListener('scroll', () => {
  const active = document.querySelector('.carol')
  if (window.scrollY > 650) {
    active.classList.add('active')
  } else {
    active.classList.remove('active')
  }
});