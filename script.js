// Contact form handler
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = '#FF9F1C';
      return;
    }
    formMessage.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you soon.';
    formMessage.style.color = '#2EC4B6';
    form.reset();
  });
}

// Services cards carousel animation
const servicesCards = document.querySelector('.services-cards');
const cards = document.querySelectorAll('.services-cards .card');
if (servicesCards && cards.length > 3) {
  let index = 0;
  const cardsPerView = 3;
  const scrollCards = () => {
    index += 1;
    if (index > cards.length - cardsPerView) {
      index = 0;
    }
    const card = cards[index];
    if (card) {
      servicesCards.scrollTo({
        left: card.offsetLeft - servicesCards.offsetLeft,
        behavior: 'smooth'
      });
    }
  };
  setInterval(scrollCards, 2000);
}

// Testimonials carousel animation
const testimonialsCarousel = document.querySelector('.testimonials-carousel');
const allTestimonialCards = document.querySelectorAll('.testimonials-cards .testimonial-card');
if (testimonialsCarousel && allTestimonialCards.length > 1) {
  let testimonialIndex = 0;
  const scrollTestimonials = () => {
    testimonialIndex++;
    if (testimonialIndex >= allTestimonialCards.length) {
      testimonialIndex = 0;
    }
    const card = allTestimonialCards[testimonialIndex];
    if (card) {
      const scrollLeft = card.offsetLeft - (testimonialsCarousel.offsetWidth / 2) + (card.offsetWidth / 2);
      testimonialsCarousel.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };
  setInterval(scrollTestimonials, 3000);
} 