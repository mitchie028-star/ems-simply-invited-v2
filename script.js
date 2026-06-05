
document.addEventListener("DOMContentLoaded", function () {

  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const sectionsContainer = document.getElementById("sections");

  const data = {
    hero: {
      title: "Princess Aiofee",
      subtitle: "You are invited to a royal celebration"
    },

    sections: [
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
      },
      {
        title: "RSVP",
        text: "Please confirm your attendance",
        image: "assets/princess-level.png",
        rsvp: true
      }
    ]
  };

  /* HERO */
  heroTitle.textContent = data.hero.title;
  heroSubtitle.textContent = data.hero.subtitle;

  /* SECTIONS */
  sectionsContainer.innerHTML = "";

  data.sections.forEach(item => {
    const section = document.createElement("section");
    section.className = "section";

    section.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.text}</p>
      <img src="${item.image}" />

      ${item.rsvp ? `
        <a class="rsvp-btn" href="#" target="_blank">
          Confirm RSVP
        </a>
      ` : ""}
    `;

    sectionsContainer.appendChild(section);
  });

});
