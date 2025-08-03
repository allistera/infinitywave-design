// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.background = "rgb(18, 46, 77)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
      } else {
        navbar.style.background = "rgb(18, 46, 77)";
        navbar.style.boxShadow = "0 2px 10px rgba(44, 62, 80, 0.3)";
      }
    });
  }

  // Project filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        projectCards.forEach((card) => {
          if (filterValue === "all") {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1)";
            }, 50);
          } else {
            const cardCategories = card
              .getAttribute("data-category")
              .split(" ");
            if (cardCategories.includes(filterValue)) {
              card.style.display = "block";
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
              }, 50);
            } else {
              card.style.opacity = "0";
              card.style.transform = "scale(0.8)";
              setTimeout(() => {
                card.style.display = "none";
              }, 300);
            }
          }
        });
      });
    });
  }

  // Contact form handling with Netlify Forms support
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const requiredFields = contactForm.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "#e74c3c";
        } else {
          field.style.borderColor = "#ddd";
        }
      });

      if (isValid) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        // Submit form data to Netlify
        const formData = new FormData(contactForm);

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => {
            alert(
              "Thank you for your message! We'll get back to you within 24 hours.",
            );
            contactForm.reset();
          })
          .catch((error) => {
            console.error("Error:", error);
            alert(
              "There was an error sending your message. Please try again or contact us directly.",
            );
          })
          .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
          });
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".service-card, .project-card, .faq-item, .pricing-card",
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Counter animation for stats
  const stats = document.querySelectorAll(".stat h3");
  const statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.textContent);
          const increment = finalValue / 50;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
              target.textContent = finalValue + "+";
              clearInterval(timer);
            } else {
              target.textContent = Math.floor(current) + "+";
            }
          }, 30);

          statsObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 },
  );

  stats.forEach((stat) => {
    statsObserver.observe(stat);
  });

  // Parallax effect for hero shapes
  const shapes = document.querySelectorAll(".shape");
  if (shapes.length > 0) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;

      shapes.forEach((shape, index) => {
        const speed = parallaxSpeed * (index + 1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    });
  }

  // Form field focus effects
  const formInputs = document.querySelectorAll("input, select, textarea");
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("focused");
      }
    });
  });

  // Loading animation
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  // Initialize interactive map
  const mapElement = document.getElementById("map");
  if (mapElement && typeof L !== "undefined") {
    // Livingston, Scotland coordinates
    const livingstonLat = 55.8864;
    const livingstonLng = -3.523;

    // Initialize the map
    const map = L.map("map").setView([livingstonLat, livingstonLng], 13);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker for our studio location
    const marker = L.marker([livingstonLat, livingstonLng]).addTo(map);

    // Add popup to marker
    marker
      .bindPopup(
        `
            <div style="text-align: center;">
                <strong>InfinityWave Design</strong><br>
                Livingston, Scotland
            </div>
        `,
      )
      .openPopup();
  }
});
