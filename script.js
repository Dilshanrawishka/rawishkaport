// dark light mode
let darkmodeIcon = document.querySelector('#d');

darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle('dark-mode');
};


// animated text
const typed = new Typed('.multiple-text', {
    strings: ['Student', 'Programmer', 'Developer', 'Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// sticky navbar
window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};


// scroll reveal
ScrollReveal({ 
    reset: true ,
    distance: '60px',
    duration:1500,
    delay:50
});

ScrollReveal().reveal('.home-content, .about-content, .a, .container, .cntnr, .contact', { origin:'top' });
ScrollReveal().reveal('.home-img, .about-img, .footer', { orogin:'bottom' });

// focus
window.onload = function() {
    var section = document.getElementById("home");
    section.scrollIntoView();
  }

//link form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOR5Tu5wZcZb9tKOpZ2UF9bqh467snJCJKharpLeQJ-187X8t6xCVZZtJNzrW9SyyX/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })