const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.nav-wrap') && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const productGrid = document.querySelector('#product-grid');

if (productGrid) {
  const styles = ['Classic', 'Oversized', 'Athletic', 'Premium', 'Striped'];
  const colors = ['Black', 'White', 'Navy', 'Olive', 'Maroon', 'Sand', 'Gray', 'Blue', 'Green', 'Rust'];
  const imageIds = [1062, 146, 1005, 334, 292, 325, 432, 338, 669, 177];

  for (let i = 1; i <= 150; i += 1) {
    const style = styles[(i - 1) % styles.length];
    const color = colors[(i - 1) % colors.length];
    const size = ['S', 'M', 'L', 'XL', 'XXL'][(i - 1) % 5];
    const price = 499 + ((i - 1) % 8) * 100;
    const imageId = imageIds[(i - 1) % imageIds.length];
    const imageUrl = `https://picsum.photos/id/${imageId}/600/700`;

    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${imageUrl}" alt="Desk ${style} Tee in ${color}" loading="lazy" />
      <h3>Desk ${style} Tee #${i}</h3>
      <p>Color: ${color}</p>
      <p>Size: ${size}</p>
      <p class="price">Price: Rs ${price}</p>
    `;

    productGrid.appendChild(card);
  }
}
