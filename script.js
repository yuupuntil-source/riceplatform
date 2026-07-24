const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const themeButton = document.querySelector("#themeButton");
const donationForm = document.querySelector("#donationForm");
const donationMessage = document.querySelector("#donationMessage");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const savedTheme = localStorage.getItem("rice-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "rice-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

donationForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = Number(document.querySelector("#amount").value);
  const currency = document.querySelector("#currency").value;

  if (!Number.isFinite(amount) || amount < 1) {
    donationMessage.textContent = "Please enter a valid donation amount.";
    return;
  }

  donationMessage.textContent =
    `Donation checkout placeholder: ${currency} ${amount.toFixed(2)}. Connect this form to Stripe or PayPal before launch.`;
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${visible.target.id}`
      );
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] }
);

sections.forEach((section) => observer.observe(section));
