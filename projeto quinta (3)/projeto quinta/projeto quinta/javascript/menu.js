if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "../html/menu.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
  }
///abaixo o meu 
function addToCart() {
    const selectedPizzas = [];
    const checkboxes = document.querySelectorAll('.pizza-item input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const pizzaName = checkbox.getAttribute('data-name');
        const pizzaPrice = checkbox.getAttribute('data-price');
        selectedPizzas.push({ name: pizzaName, price: pizzaPrice });
    });

    if (selectedPizzas.length === 0) {
        alert('Por favor, selecione pelo menos uma pizza.');
        return;
    }

    // Convert the selected pizzas to JSON and store in localStorage
    localStorage.setItem('selectedPizzas', JSON.stringify(selectedPizzas));

    // Redirect to the cart page
    window.location.href = 'cart.html';
}