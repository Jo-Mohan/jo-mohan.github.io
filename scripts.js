/*
 * JavaScript to power interactive behaviours on the student portfolio site.
 *
 * This script sets up the mobile navigation toggle, highlights the
 * active navigation link based on the current page, initializes
 * Chart.js for the example bar chart, and respects users’ motion
 * preferences. Accessible practices such as updating aria-expanded
 * attributes are employed to ensure that assistive technologies
 * correctly convey the state of interface controls【658675121105025†L183-L205】.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation toggle for small screens
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      // Toggle the aria-expanded attribute to communicate the state
      navToggle.setAttribute('aria-expanded', (!expanded).toString());
      // Toggle the class that controls the height
      navLinks.classList.toggle('open');
    });
    // Close the navigation when a link is clicked (for mobile)
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Highlight the active page in the navigation bar
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  // Respect prefers-reduced-motion for animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // Remove fade-in animations by cancelling the animation property
    document.querySelectorAll('.fade-in').forEach((el) => {
      el.style.animation = 'none';
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }

  // Initialize Chart.js if the example canvas is present
  const canvas = document.getElementById('exampleChart');
  if (canvas && typeof Chart !== 'undefined') {
    const ctx = canvas.getContext('2d');
    // Retrieve CSS variables for dynamic colours
    const rootStyles = getComputedStyle(document.documentElement);
    const primary = rootStyles.getPropertyValue('--color-primary').trim();
    const secondary = rootStyles.getPropertyValue('--color-secondary').trim();
    // Build the chart
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'],
        datasets: [
          {
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              primary,
              secondary,
              primary,
              secondary,
              primary,
            ],
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        animation: prefersReducedMotion ? false : { duration: 800 },
        scales: {
          x: {
            ticks: { color: rootStyles.getPropertyValue('--color-text').trim() },
            grid: { display: false },
          },
          y: {
            ticks: {
              color: rootStyles.getPropertyValue('--color-text').trim(),
            },
            beginAtZero: true,
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
          },
        },
        plugins: {
          legend: {
            labels: { color: rootStyles.getPropertyValue('--color-text').trim() },
          },
        },
      },
    });
  }
});
