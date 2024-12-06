const toggleButton = document.getElementById('toggleButton');
const orderList = document.getElementById('orderList');

toggleButton.addEventListener('click', () => {
  // Toggle visibility of the order list
  if (orderList.style.display === 'none' || orderList.style.display === '') {
    orderList.style.display = 'block';
  } else {
    orderList.style.display = 'none';
  }
});

