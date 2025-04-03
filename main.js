// Arrays e variáveis para o carrinho
let cart = [];
const cartLink = document.getElementById("cart-link");
const cartModal = document.getElementById("cart-modal");
const closeCartButton = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const finalizeButton = document.getElementById("finalize-purchase");

// Função para adicionar ao carrinho
function addToCart(productName, productPrice) {
  const product = { name: productName, price: productPrice };
  cart.push(product);
  updateCart();
}

// Função para atualizar o carrinho (exibição e total)
function updateCart() {
  // Limpar a lista do carrinho
  cartItemsList.innerHTML = '';
  let total = 0;

  // Adicionar itens ao carrinho
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
    total += item.price;
  });

  // Atualizar o total do carrinho
  cartTotal.textContent = total.toFixed(2);
}

// Função para mostrar o modal do carrinho
cartLink.addEventListener("click", function() {
  cartModal.style.display = "block";
});

// Função para fechar o modal do carrinho
closeCartButton.addEventListener("click", function() {
  cartModal.style.display = "none";
});

// Função para finalizar a compra (ainda não tem integração real)
finalizeButton.addEventListener("click", function() {
  if (cart.length > 0) {
    alert("Compra finalizada! Total: R$ " + cartTotal.textContent);
    cart = []; // Limpar o carrinho
    updateCart(); // Atualizar visualmente
    cartModal.style.display = "none"; // Fechar o modal
  } else {
    alert("Seu carrinho está vazio!");
  }
});

// Função de adição de produtos ao carrinho ao clicar
const productButtons = document.querySelectorAll('.card a.button');
productButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir o comportamento padrão do link
    const productCard = button.closest('.card');
    const productName = productCard.querySelector('.title').textContent;
    const productPrice = parseFloat(productCard.querySelector('h1').textContent.replace('R$', '').trim());
    addToCart(productName, productPrice);
  });
});

// Botão do menu mobile
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
  });

  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var notification = document.getElementById('cart-notification');
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 2000);
    });
  });
