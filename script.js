let orderItems = [];

function addFlavor() {
  const flavor = prompt("Ingrese el sabor del raspado:");
  if (flavor) {
    orderItems.push(flavor);
    updateOrderItems();
  }
}

function removeLastFlavor() {
  orderItems.pop();
  updateOrderItems();
}

function updateOrderItems() {
  const orderItemsContainer = document.querySelector(".order-items");
  orderItemsContainer.innerHTML = "";
  orderItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `Raspado: ${item}`;
    orderItemsContainer.appendChild(itemElement);
  });
}

function showOrderForm() {
  const orderForm = document.getElementById("order-form");
  orderForm.style.display = "block";
}

function submitOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (orderItems.length > 0 && name && phone) {
    const message = `Nuevo Pedido\n\nNombre: ${name}\nTeléfono: ${phone}\n\nRaspados:\n${orderItems.join("\n")}`;
    const whatsappLink = `https://wa.me/+50585886997?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  } else {
    alert("Por favor, complete todos los campos y seleccione al menos un raspado.");
  }
}

function closeOrderForm() {
  const orderForm = document.getElementById("order-form");
  orderForm.style.display = "none";
}
