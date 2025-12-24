document.addEventListener("DOMContentLoaded", () => {
  // Get all tab buttons and all tab content sections
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // Function to switch tabs
  const switchTab = (targetId) => {
    // 1. Deactivate all buttons and hide all content
    tabButtons.forEach((button) => button.classList.remove("active"));
    tabContents.forEach((content) =>
      content.classList.remove("active-content")
    );

    // 2. Activate the clicked button and show its corresponding content
    const activeButton = document.querySelector(`[data-target="${targetId}"]`);
    const activeContent = document.getElementById(targetId);

    if (activeButton && activeContent) {
      activeButton.classList.add("active");
      activeContent.classList.add("active-content");
    }
  };

  // Add a click event listener to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      switchTab(targetId);
    });
  });
});

const hamburger = document.querySelector(".hamburger");
const tabNav = document.querySelector(".tab-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  tabNav.classList.toggle("open");
});

// Close menu after clicking a tab (mobile)
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    hamburger.classList.remove("active");
    tabNav.classList.remove("open");
  });
});
