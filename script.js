// Button click alert example
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for clicking the "' + button.textContent + '" button!');
  });
});
