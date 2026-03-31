const lines = [
  'bro status: operational',
  'banana integration: nominal',
  'governance incident probability: non-zero',
  'vlan containment: appreciated',
  'shipping: absolutely'
];

const btn = document.getElementById('bro-btn');
const tagline = document.getElementById('tagline');
let i = 0;
btn.addEventListener('click', () => {
  i = (i + 1) % lines.length;
  tagline.textContent = lines[i];
});
