const rooms = [
  {
    location: "Pune",
    budget: 4500,
    rating: 4,
    name: "Compact Single Room - Pune",
    img: "img/single room.jpg"
  },
  {
    location: "Indore",
    budget: 8000,
    rating: 3,
    name: "2BHK Flat - Indore",
    img: "img/2bhk.jpg"
  },
  {
    location: "Bangalore",
    budget: 14000,
    rating: 5,
    name: "Luxury Co-living - Bangalore",
    img: "img/luxury Coliv.jpg"
  },
  {
    location: "Hyderabad",
    budget: 7000,
    rating: 4,
    name: "Affordable PG - Hyderabad",
    img: "img/pg rooms.jpg"
  },
  {
    location: "Delhi",
    budget: 9500,
    rating: 5,
    name: "Studio Apartment - Delhi",
    img: "img/std aprtment.avif"
  },
  {
    location: "Pune",
    budget: 12000,
    rating: 5,
    name: "Fully Furnished 1BHK - Pune",
    img: "img/furnish 1bhk.jpg"
  },
  {
    location: "Bangalore",
    budget: 6000,
    rating: 3,
    name: "Sharing Room - Bangalore",
    img: "img/sharing room.webp"
  },
  {
    location: "Delhi",
    budget: 4000,
    rating: 2,
    name: "Budget Room - Delhi",
    img: "img/budget.jpg"
  }
];

function displayRooms(filteredRooms) {
  const list = document.getElementById("roomList");
  list.innerHTML = "";
  filteredRooms.forEach(room => {
    const card = document.createElement("div");
    card.className = "room-card";
    card.innerHTML = `
      <img src="${room.img}" alt="${room.name}" />
      <div class="details">
        <h3>${room.name}</h3>
        <p><strong>City:</strong> ${room.location}</p>
        <p><strong>Budget:</strong> ₹${room.budget}</p>
        <p><strong>Rating:</strong> ${"⭐".repeat(room.rating)} (${room.rating})</p>
      </div>
    `;
    list.appendChild(card);
  });
}

function filterRooms() {
  const location = document.getElementById("locationFilter").value;
  const budget = document.getElementById("budgetFilter").value;
  const rating = document.getElementById("ratingFilter").value;

  const filtered = rooms.filter(room => {
    return (
      (location === "" || room.location === location) &&
      (budget === "" || room.budget <= parseInt(budget)) &&
      (rating === "" || room.rating >= parseInt(rating))
    );
  });

  displayRooms(filtered);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onload = () => displayRooms(rooms);


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}
