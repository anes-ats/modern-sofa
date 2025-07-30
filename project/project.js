
const priceRange = document.querySelector('input[type="range"]');
const priceLabel = document.querySelector('.price-filter label');
if (priceRange && priceLabel) {
  priceRange.addEventListener('input', () => {
    priceLabel.textContent = `Price $4 - $${priceRange.value}`;
  });
}

const filterButton = document.querySelector('.price-filter button');
if (filterButton) {
  filterButton.addEventListener('click', () => {
    const maxPrice = priceRange.value;
    console.log(`Filtering products under $${maxPrice}...`);
  });
}

const paginationLinks = document.querySelectorAll('.pagination a');
paginationLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.textContent;
    console.log(`Switching to page ${page}`);
  });
});

const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product');

function filterProducts(query) {
  const searchTerm = query.toLowerCase();
  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

if (searchIcon && searchInput) {
  searchIcon.addEventListener('click', () => {
    const query = searchInput.value.trim();
    filterProducts(query);
  });

  searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      filterProducts(searchInput.value.trim());
    }
  });
}
const shopLink = document.querySelector('.nav-links li.active a');

