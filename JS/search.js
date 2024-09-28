function searchProducts() {
  const input = document.getElementById("searchInput");
  const resultDiv = document.getElementById("result");
  const query = input.value.toLowerCase();

  // Example products array with their corresponding URLs
  const products = [
    { name: "Apple iPhone 12", url: "./Products/smartphones/iphone.html" },
    { name: "Oppo F23 Plus", url: "./Products/smartphones/smartphones.html" },
    { name: "Vivo Nex 3 5G", url: "./Products/smartphones/smartphones.html" },
    { name: "Mi 12 Pro 5G", url: "./Products/smartphones/smartphones.html" },
    {
      name: "Motorola Edge 40 Neo",
      url: "./Products/smartphones/smartphones.html",
    },
    { name: "Galaxy J7 Prime", url: "./Products/smartphones/smartphones.html" },
    { name: "Macbook Air", url: "./Products/electronics/elec.html" },
    { name: "Boat Airdopes 148", url: "./Products/electronics/airdopes.html" },
    {
      name: "Boat Wave Elevate Smart Watch",
      url: "./Products/electronics/elec.html",
    },
    { name: "Voltas 1.4 Ton AC", url: "./Products/electronics/elec.html" },
    {
      name: "MI Power Bank 3i 20000mAh",
      url: "./Products/electronics/elec.html",
    },
    { name: "MI 80 cm LED TV", url: "./Products/smartphones/smartphones.html" },
    { name: "Rich Dad Poor Dad", url: "./Products/Books/books.html" },
    {
      name: "The Power of A Positive Attitude",
      url: "./Products/Books/books.html",
    },
    { name: "The Psychology of Money", url: "./Products/Books/books.html" },
    {
      name: "The Life, Lessons & Rules for Success",
      url: "./Products/Books/books.html",
    },
    { name: "The Time Machine", url: "./Products/Books/books.html" },
    { name: "Black Holes", url: "./Products/Books/books.html" },
    {
      name: "Helicopter with Radio Remote Control",
      url: "./Products/New Arrivals in Toys/toys.html",
    },
    {
      name: "Tiles Kids Puzzle Mats ABCD",
      url: "./Products/New Arrivals in Toys/toys.html",
    },
    { name: "3X3X3 CUBE", url: "./Products/New Arrivals in Toys/toys.html" },
    {
      name: "UNO Playing Cards",
      url: "./Products/New Arrivals in Toys/toys.html",
    },
    {
      name: "Avengers Hero Action Figure",
      url: "./Products/New Arrivals in Toys/toys.html",
    },
    {
      name: "Plastic 2 in 1 JCB Construction Vehicle",
      url: "./Products/New Arrivals in Toys/toys.html",
    },
    {
      name: "Trimmer 30 min Runtime 4 Length Settings",
      url: "./Products/Health Personal Care/care.html",
    },
    {
      name: "Digital Thermometer",
      url: "./Products/Health Personal Care/care.html",
    },
    { name: "Glucometer", url: "./Products/Health Personal Care/care.html" },
    {
      name: "Electric Toothbrush",
      url: "./Products/Health Personal Care/care.html",
    },
    { name: "Razor", url: "./Products/Health Personal Care/care.html" },
    {
      name: "Blood Pressure Monitor",
      url: "./Products/Health Personal Care/care.html",
    },
  ];

  // Filter products based on query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  // Clear previous results
  resultDiv.innerHTML = "";

  if (query && filteredProducts.length > 0) {
    resultDiv.style.display = "block"; // Show results when there are matches
    filteredProducts.forEach((product) => {
      const div = document.createElement("div");
      div.textContent = product.name;
      div.classList.add("search-result-item"); // Add a class for styling

      // Add click event listener to redirect to the product page
      div.addEventListener("click", () => {
        window.location.href = product.url; // Redirect to the product page
      });

      resultDiv.appendChild(div);
    });
  } else if (query) {
    // Show "No products found" if query exists but no matches are found
    resultDiv.style.display = "block";
    const div = document.createElement("div");
    div.textContent = "No products found";
    div.style.color = "red"; // Optional: Red color for emphasis
    resultDiv.appendChild(div);
  } else {
    // Hide the resultDiv when input is empty
    resultDiv.style.display = "none";
  }
}
