document.addEventListener("DOMContentLoaded", function () {

  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const sections = document.getElementById("sections");

  heroTitle.textContent = "Princess Aiofee";
  heroSubtitle.textContent = "You are invited to a royal celebration";

  const data = [
    {
      title: "Birthday Celebration",
      text: "Princess Aiofee is turning 7 years old",
      image: "assets/baby-level.png"
    },
    {
      title: "Venue",
      text: "Jollibee Puregold Luzon Commonwealth",
      image: "assets/child-level.png"
    },
    {
      title: "Details",
      text: "June 14, 2026 • 11:00 AM",
      image: "assets/princess-level.png"
    }
  ];

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "section";

    div.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.text}</p>
      <img src="${item.image}" />
    `;

    sections.appendChild(div);
  });

});
