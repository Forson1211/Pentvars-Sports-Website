document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
      });

      document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      }));
  } else {
      console.error("Error: .hamburger or .nav-menu elements not found.");
  }

  let viewCount = 0;
  const viewCountElement = document.getElementById('view-count-number');

  // Retrieve the current view count from storage
  const storedViewCount = localStorage.getItem('viewCount');
  if (storedViewCount) {
      viewCount = parseInt(storedViewCount);
  }

  // Increment the view count
  viewCount++;

  // Store the updated view count in storage
  localStorage.setItem('viewCount', viewCount);

  // Display the updated view count
  viewCountElement.textContent = viewCount;

  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const captchaResponse = grecaptcha.getResponse();

      if (!captchaResponse.length > 0) {
          throw new Error("Captcha not complete")
      }

      const fd = new FormData(e.target);
      const params = new URLSearchParams(fd);

      fetch('http://httpbin.org/post', {
          method: "POST",
          body: params,

      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  });

});

// Screen Reader JavaScript Code
const screenReader = {
    init: function() {
      this.addAriaAttributes();
    },
    addAriaAttributes: function() {
      const elements = document.querySelectorAll('h1, h2, h3, p, li, a');
      elements.forEach((element) => {
        element.setAttribute('aria-label', element.textContent);
      });
    },
  };
  
  screenReader.init();