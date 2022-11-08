const navSlide = () => {
  window.onclick = function(event) {
    const burger = document.querySelector('.hamburger');
    const bars = document.querySelector('#bars');
    const menu = document.querySelector('nav .menu');
    const links = document.querySelectorAll('.menu li');
    const dropdown = document.querySelector('.menu ul');

    const animate = () => {
      links.forEach((link, i) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${i / 10 + 0.2}s`
        }
      });
    }

    if (event.target == bars || event.target == burger) {
      burger.classList.toggle('hamburger-click');
      menu.classList.toggle('menu-show');
      animate();
    } else if (event.target != dropdown && document.querySelector('.menu-show')) {
      burger.classList.toggle('hamburger-click');
      menu.classList.toggle('menu-show');
      animate();
    }
  }

  window.ontouchend = function(event) {
    const burger = document.querySelector('.hamburger');
    const bars = document.querySelector('#bars');
    const menu = document.querySelector('nav .menu');
    const links = document.querySelectorAll('.menu li');
    const dropdown = document.querySelector('.menu ul');

    const animate = () => {
      links.forEach((link, i) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${i / 10 + 0.2}s`
        }
      });
    }

    if (event.target == bars || event.target == burger) {
      burger.classList.toggle('hamburger-click');
      menu.classList.toggle('menu-show');
      animate();
    } else if (event.target != dropdown && document.querySelector('.menu-show')) {
      burger.classList.toggle('hamburger-click');
      menu.classList.toggle('menu-show');
      animate();
    }
  }
}

const stickyNav = () => {
  window.onscroll = function() {
    var navbar = document.querySelector('header');
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky-nav")
    } else {
      navbar.classList.remove("sticky-nav");
    }
  }
}

const site = () => {
  navSlide();
  stickyNav();
}

site();
