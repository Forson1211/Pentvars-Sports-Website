document.addEventListener("DOMContentLoaded", function() {
  // Get the hamburger icon and the nav menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll(".nav-item"); // Assuming nav items have class 'nav-item'

  // Toggle the hamburger menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active'); // Toggle the visibility of the nav menu
    sidebar.classList.toggle('active'); // Toggle the visibility of the sidebar
  });

  // Close the menu when a navigation link is clicked
  navLinks.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    sidebar.classList.remove('active');
  }));

  // Get the range slider and the output element
  const rangeSlider = document.getElementById('rangeSlider');
  const rangeValue = document.getElementById('rangeValue');

  // Update the current slider value (each time you drag the slider handle)
  rangeSlider.addEventListener('input', function() {
      rangeValue.textContent = this.value;
  });

  // Sidebar functionality
  const sidebar = document.querySelector('.sidebar');
  
  // Ensure that sidebar and nav menu visibility is controlled
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
      sidebar.classList.remove('active');
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll(".nav-item"); // Assuming nav items have class 'nav-item'

  // Toggle the hamburger menu
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle visibility of the nav menu
  });

  // Close the menu when a navigation link is clicked
  navLinks.forEach(link => link.addEventListener("click", () => {
    navMenu.classList.remove('show');
  }));

  // Close the menu when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('show');
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.background-image');
  const totalSlides = slides.length;
  let currentIndex = 0;
  const slideInterval = 5000; // Time in milliseconds between slides

  function showSlide(index) {
      slides[currentIndex].classList.remove('active'); // Hide current slide
      currentIndex = (index + totalSlides) % totalSlides; // Move to the specified slide
      slides[currentIndex].classList.add('active'); // Show the new slide
  }

  function showNextSlide() {
      showSlide(currentIndex + 1); // Show the next slide
  }

  function showPreviousSlide() {
      showSlide(currentIndex - 1); // Show the previous slide
  }

  // Initialize the first slide
  slides[currentIndex].classList.add('active');

  // Automatic slide change
  setInterval(showNextSlide, slideInterval); // Change slide every 5 seconds

  // Navigation arrows
  document.querySelector('.arrow-left').addEventListener('click', showPreviousSlide);
  document.querySelector('.arrow-right').addEventListener('click', showNextSlide);
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way
  
  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Send the email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      name: name,
      email: email
  })
  .then(function(response) {
      alert('Subscription successful! A confirmation email has been sent.');
  }, function(error) {
      alert('Failed to send email. Please try again.');
  });
});


    // Initialize EmailJS
    emailjs.init("service_4dcxm58");

    document.getElementById("subscribe-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="mail"]').value;

        // Use EmailJS to send the email
        emailjs.sendForm('service_4dcxm58', 'template_gcoae5f', this)
            .then(function(response) {
                alert("Subscription successful! A confirmation email has been sent.");
                console.log("SUCCESS", response);
            }, function(error) {
                alert("Failed to send confirmation email.");
                console.log("FAILED", error);
            });
    });