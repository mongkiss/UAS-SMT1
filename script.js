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
