// navbar
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

// sreach bar show
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("searchIcon");
  const sidebar = document.getElementById("sidebar");

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault();
    sidebar.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !searchIcon.contains(event.target)) {
      sidebar.classList.remove("show");
    }
  });
});
// sreach bar  show

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

// best dress
const items = [
  { name: "", image: "images/dress1.webp" },
  { name: "", image: "images/dress7.webp" },
  { name: "", image: "images/dress3.webp" },
  { name: "", image: "images/dress4.webp" },
  { name: "", image: "images/dress5.webp" },
  { name: "", image: "images/dress6.webp" },
];

let currentIndex = 0;

function displayItems() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  for (let i = currentIndex; i < currentIndex + 3 && i < items.length; i++) {
    const item = items[i];
    const gridItem = document.createElement("div");
    gridItem.className = "col-12 col-sm-6 col-md-4 grid-item";
    gridItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name}</p>
      `;
    grid.appendChild(gridItem);
  }
}

function next() {
  if (currentIndex + 3 < items.length) {
    currentIndex += 3;
  } else {
    currentIndex = 0;
  }
  displayItems();
}

function previous() {
  if (currentIndex - 3 >= 0) {
    currentIndex -= 3;
  } else {
    currentIndex = Math.max(0, items.length - 3);
  }
  displayItems();
}

// Initialize the grid with the first set of items
displayItems();
// best dress

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
