// Toggle mobile nav
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('open');
});

// Redirect to order page with pizza info
document.querySelectorAll('[data-pizza]').forEach(pizza => {
  pizza.addEventListener('click', () => {
    const pizzaName = pizza.getAttribute('data-pizza');
    sessionStorage.setItem('selectedPizza', pizzaName);
    window.location.href = 'order.html';
  });
});

// Load pizza on order page
if (window.location.pathname.includes('order.html')) {
  const pizzaName = sessionStorage.getItem('selectedPizza');
  if (pizzaName) {
    const pizzaInfo = document.getElementById('pizza-info');
    pizzaInfo.innerHTML = `
      <h2>${pizzaName.toUpperCase()}</h2>
      <img src="${pizzaName}.jpeg" alt="${pizzaName}" />
      <p>Customize your ${pizzaName} pizza order below:</p>
    `;
  }

  // Confirm form submission
  const orderForm = document.getElementById('order-form');
  orderForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const confirmed = confirm("Are you sure you want to place the order?");
    if (confirmed) {
      window.location.href = "confirmation.html";
    }
  });
}
