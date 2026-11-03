let quantity = 1;
const qty = document.getElementById('qty');
document.getElementById('plus').addEventListener('click', () => { quantity = Math.min(10, quantity + 1); qty.textContent = quantity; });
document.getElementById('minus').addEventListener('click', () => { quantity = Math.max(1, quantity - 1); qty.textContent = quantity; });
document.querySelectorAll('.swatch').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.swatch').forEach(b => b.classList.remove('active'));
  button.classList.add('active'); document.getElementById('bottle').style.background = button.dataset.color;
}));
document.getElementById('add').addEventListener('click', () => {
  document.getElementById('message').textContent = `Demo only: ${quantity} item(s) added to your sample cart. No real purchase was made.`;
});
