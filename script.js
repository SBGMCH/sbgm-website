document.addEventListener("DOMContentLoaded", () => {
  const roller = document.querySelector(".roller");
  let hue = 0;

  function animateRoller() {
    hue = (hue + 1) % 360;
    roller.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
    requestAnimationFrame(animateRoller);
  }

  animateRoller();

  const header = document.querySelector("h1");
  header.addEventListener("mouseover", () => {
    header.style.transform = "scale(1.1)";
  });

  header.addEventListener("mouseout", () => {
    header.style.transform = "scale(1)";
  });
});
