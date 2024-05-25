function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollLeft() {
  const container = document.querySelector('.experience-details-container');
  container.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the scroll amount as needed
}

function scrollRight() {
  const container = document.querySelector('.experience-details-container');
  container.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll amount as needed
}
