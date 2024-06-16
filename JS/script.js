// JavaScript for dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all dropdown items
  var dropdowns = document.querySelectorAll(".nav-item.dropdown");

  // Variable to keep track of the currently open dropdown
  var openDropdown = null;

  // Function to close all dropdowns
  function closeAllDropdowns() {
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("show");
      dropdown.querySelector(".dropdown-menu").classList.remove("show");
    });
    openDropdown = null;
  }

  // Loop through each dropdown item
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      // Prevent the default behavior
      event.preventDefault();

      // Close all dropdowns if the clicked dropdown is already open
      if (dropdown === openDropdown) {
        closeAllDropdowns();
      } else {
        // Close all dropdowns except the clicked one
        closeAllDropdowns();

        // Open the clicked dropdown
        dropdown.classList.add("show");
        dropdown.querySelector(".dropdown-menu").classList.add("show");
        openDropdown = dropdown;
      }
    });

    // Hover event to prevent showing dropdowns when another dropdown is open
    dropdown.addEventListener("mouseenter", function (event) {
      if (openDropdown !== null && openDropdown !== dropdown) {
        event.stopPropagation();
      }
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
    var isClickInside = Array.from(dropdowns).some(function (dropdown) {
      return dropdown.contains(event.target);
    });

    if (!isClickInside) {
      closeAllDropdowns();
    }
  });
});
//   navbar

// Navbar button now click goto next page
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("searchIcon");
  const sidebar = document.getElementById("sidebar");
  const earnNowButton = document.getElementById("earnNowButton");

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault();
    sidebar.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !searchIcon.contains(event.target)) {
      sidebar.classList.remove("show");
    }
  });

  earnNowButton.addEventListener("click", function () {
    window.location.href = "earn_now.html";
  });
});
// Navbar button now click goto next page

// our collections
const products = [
  {
    name: "Product Name 1",
    price: "$10.00",
    image: "./images/image-1.webp",
    category: "men",
  },
  {
    name: "Product Name 2",
    price: "$20.00",
    image: "./images/image-2.webp",
    category: "women",
  },
  {
    name: "Product Name 1",
    price: "$10.00",
    image: "./images/image-1.webp",
    category: "category1",
  },
  {
    name: "Product Name 2",
    price: "$20.00",
    image: "./images/image-2.webp",
    category: "category1",
  },
  {
    name: "Product Name 3",
    price: "$30.00",
    image: "./images/image-3.webp",
    category: "category1",
  },
  {
    name: "Product Name 4",
    price: "$40.00",
    image: "./images/image-4.webp",
    category: "category2",
  },
  {
    name: "Product Name 5",
    price: "$50.00",
    image: "./images/image-5.webp",
    category: "category2",
  },
  {
    name: "Product Name 6",
    price: "$60.00",
    image: "./images/image-6.webp",
    category: "category2",
  },
  {
    name: "Product Name 7",
    price: "$70.00",
    image: "./images/image-7.webp",
    category: "category3",
  },
  {
    name: "Product Name 8",
    price: "$80.00",
    image: "./images/image-8.webp",
    category: "category3",
  },
  {
    name: "Product Name 9",
    price: "$90.00",
    image: "./images/image-9.webp",
    category: "category3",
  },
  {
    name: "Product Name 10",
    price: "$100.00",
    image: "./images/image-10.webp",
    category: "category4",
  },
  {
    name: "Product Name 11",
    price: "$110.00",
    image: "./images/image-11.webp",
    category: "category4",
  },
  {
    name: "Product Name 12",
    price: "$120.00",
    image: "./images/image-12.jpg",
    category: "category4",
  },
  {
    name: "Product Name 13",
    price: "$130.00",
    image: "./images/image-13.webp",
    category: "category5",
  },
  {
    name: "Product Name 14",
    price: "$140.00",
    image: "./images/image-14.webp",
    category: "category5",
  },
  {
    name: "Product Name 15",
    price: "$150.00",
    image: "./images/image-15.webp",
    category: "category5",
  },
  {
    name: "Product Name 16",
    price: "$160.00",
    image: "./images/image-16.webp",
    category: "category1",
  },
  {
    name: "Product Name 17",
    price: "$170.00",
    image: "./images/image-17.webp",
    category: "category1",
  },
  {
    name: "Product Name 18",
    price: "$180.00",
    image: "./images/image-18.webp",
    category: "category1",
  },
  {
    name: "Product Name 19",
    price: "$190.00",
    image: "./images/image-19.webp",
    category: "category2",
  },
  {
    name: "Product Name 20",
    price: "$200.00",
    image: "./images/image-20.webp",
    category: "category2",
  },
  {
    name: "Product Name 21",
    price: "$210.00",
    image: "./images/image-21.webp",
    category: "category2",
  },
  {
    name: "Product Name 22",
    price: "$220.00",
    image: "./images/image-22.webp",
    category: "category3",
  },
  {
    name: "Product Name 23",
    price: "$230.00",
    image: "./images/image-23.webp",
    category: "category3",
  },
  {
    name: "Product Name 24",
    price: "$240.00",
    image: "./images/image-24.webp",
    category: "category3",
  },
  {
    name: "Product Name 25",
    price: "$250.00",
    image: "./images/image-25.webp",
    category: "category4",
  },
  {
    name: "Product Name 26",
    price: "$260.00",
    image: "./images/image-26.webp",
    category: "category4",
  },
  {
    name: "Product Name 27",
    price: "$270.00",
    image: "./images/image-27.webp",
    category: "category4",
  },
  {
    name: "Product Name 28",
    price: "$280.00",
    image: "./images/image-28.webp",
    category: "category5",
  },
  {
    name: "Product Name 29",
    price: "$290.00",
    image: "./images/image-29.webp",
    category: "category5",
  },
  {
    name: "Product Name 30",
    price: "$300.00",
    image: "./images/image-30.webp",
    category: "category5",
  },
  // Add more products as needed
];

function renderProducts(page = 1, category = "all") {
  const productsPerPage = 12;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productGrid = document.getElementById("productGrid");
  productGrid.innerHTML = "";
  let filteredProducts = products;

  // Filter products based on the selected category
  if (category !== "all") {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  // Pagination logic
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  paginatedProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";
    productDiv.innerHTML = `
    <div class="product">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="view-icon">&#128065;</div>
      <div class="product-info">
        <p class="product-name">${product.name}</p>
        <p class="product-price">${product.price}</p>
      </div>
    </div>
  `;
    productGrid.appendChild(productDiv);
  });
}

// Event listener for pagination buttons
document.querySelectorAll(".pagination-buttons button").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".pagination-buttons button")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    const page = parseInt(this.getAttribute("data-page"));
    const selectedCategory = document.getElementById("categoryFilter").value;
    renderProducts(page, selectedCategory);
  });
});

// Event listener for category filter
document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    const selectedCategory = this.value;
    // Reset pagination to page 1
    document
      .querySelectorAll(".pagination-buttons button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector(".pagination-buttons button[data-page='1']")
      .classList.add("active");
    renderProducts(1, selectedCategory);
  });

// Initial render
renderProducts();
// our collection

// counter start
const counterNumbers = document.querySelectorAll(".counter-number");

counterNumbers.forEach((counterNumber) => {
  const target = +counterNumber.getAttribute("data-target");
  const increment = target / 100;

  let currentCount = 0;

  const incrementCounter = () => {
    currentCount += increment;
    counterNumber.textContent = Math.round(currentCount);

    if (currentCount < target) {
      requestAnimationFrame(incrementCounter);
    }
  };

  incrementCounter();
});
// counter end

// blog start
function filterPosts(category) {
  const posts = document.querySelectorAll(".recent-posts-grid .post");
  const tabs = document.querySelectorAll(".category-tabs .tab");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  posts.forEach((post) => {
    if (category === "all" || post.classList.contains(category)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });

  document
    .querySelector(`.category-tabs .tab[onclick="filterPosts('${category}')"]`)
    .classList.add("active");
}
// blog end

// subcription
function animateImage(img) {
  img.classList.add("zoom-in");
  setTimeout(function () {
    img.classList.remove("zoom-in");
  }, 500);
}
// subcription

// Eran now page js
// steps
var tabList = document.querySelectorAll("#v-pills-tab button");
tabList.forEach(function (tab) {
  tab.addEventListener("click", function (event) {
    var tabTarget = event.target;
    var tabPaneTarget = tabTarget.getAttribute("data-bs-target");
    var tabPane = document.querySelector(tabPaneTarget);
    tabPane.classList.add("show");
    tabPane.classList.add("active");
  });
});
// steps

// signup btn
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signup").addEventListener("click", function () {
      window.location.href = "signup.html"; // Change this URL to the desired destination for Sign Up
    });

    document.getElementById("login").addEventListener("click", function () {
      window.location.href = "login.html"; // Change this URL to the desired destination for Login
    });
  });
});

// Eran now page js
