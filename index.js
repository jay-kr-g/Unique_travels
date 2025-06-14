// Toggle Navbar
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector(".header-main-nav").classList.toggle("active");
});

// Smooth scroll
document.querySelectorAll('.smoothscroll').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

// scroll bar

const scrollToggle = document.getElementById("scroll-toggle");
const scrollText = document.getElementById("scroll-text");
const scrollIcon = document.getElementById("scroll-icon");

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled > scrollable - 100) {
    scrollText.textContent = "GO TO TOP   ";
    scrollIcon.classList.remove("fa-arrow-down");
    scrollIcon.classList.add("fa-arrow-up");
  } else {
    scrollText.textContent = "SCROLL DOWN";
    scrollIcon.classList.remove("fa-arrow-up");
    scrollIcon.classList.add("fa-arrow-down");
  }
});

scrollToggle.addEventListener("click", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled > scrollable - 100) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: scrollable, behavior: "smooth" });
  }
});


// Fade-up scroll animation
const fadeUpElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  fadeUpElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;

    if (boxTop < triggerPoint) {
      el.classList.add('show');
    }
  });
});


//message
 document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("contact").value;
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const message = `Hello, I want to book a ride.\nName: ${name}\nContact: ${mobile}\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date}\nTime: ${time}`;
  const phone = "917865831373"; // driver's WhatsApp number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
});