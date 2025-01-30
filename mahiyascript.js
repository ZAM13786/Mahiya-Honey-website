// Add interactivity here (e.g., cart functionality)
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Added to cart!');
      });
    });
  });