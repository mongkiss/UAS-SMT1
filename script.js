document.getElementById("enter-btn").addEventListener("click", () => {
  const portfolio = document.getElementById("portfolio-wrapper");
  portfolio.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  const switchTab = (targetId) => {
    tabButtons.forEach((button) => button.classList.remove("active"));
    tabContents.forEach((content) =>
      content.classList.remove("active-content")
    );

    const activeButton = document.querySelector(`[data-target="${targetId}"]`);
    const activeContent = document.getElementById(targetId);

    if (activeButton && activeContent) {
      activeButton.classList.add("active");
      activeContent.classList.add("active-content");
    }
  };

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      switchTab(targetId);
    });
  });

  const hamburger = document.querySelector(".hamburger");
  const tabNav = document.querySelector(".tab-nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    tabNav.classList.toggle("open");
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      hamburger.classList.remove("active");
      tabNav.classList.remove("open");
    });
  });
});
