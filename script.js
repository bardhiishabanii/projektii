const cars = [
    {
      name: "Tesla Model 3",
      price: 35000,
      image: "https://tesla-cdn.thron.com/delivery/public/image/tesla/123456/main/tesla-model-3.jpg"
    },
    {
      name: "Ford Mustang",
      price: 27000,
      image: "https://cdn.motor1.com/images/mgl/Jl6nB/s1/ford-mustang.jpg"
    },
    {
      name: "Toyota Corolla",
      price: 20000,
      image: "https://toyota.com/corolla/image.jpg"
    }
  ];
  
  window.onload = function () {
    const carList = document.getElementById("car-list");
    const carSelect = document.getElementById("carSelect");
  
    cars.forEach((car, index) => {
      // Create car card
      const card = document.createElement("div");
      card.className = "car-card";
      card.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>Price: $${car.price.toLocaleString()}</p>
      `;
      carList.appendChild(card);
  
      // Add to dropdown
      const option = document.createElement("option");
      option.value = index;
      option.text = `${car.name} - $${car.price.toLocaleString()}`;
      carSelect.appendChild(option);
    });
  };
  
  function purchaseCar() {
    const buyerName = document.getElementById("buyerName").value.trim();
    const carIndex = document.getElementById("carSelect").value;
  
    if (!buyerName) {
      alert("Please enter your name.");
      return;
    }
  
    const car = cars[carIndex];
  
    const receipt = `
      <h3>🧾 Purchase Receipt</h3>
      <p><strong>Customer:</strong> ${buyerName}</p>
      <p><strong>Car:</strong> ${car.name}</p>
      <p><strong>Total Paid:</strong> $${car.price.toLocaleString()}</p>
      <p><strong>Status:</strong> ✅ Purchase Confirmed</p>
    `;
  
    document.getElementById("receipt").innerHTML = receipt;
  }
  