document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById("toggle-skills");
    const skillsList = document.getElementById("skills-list");

    // Initially hide the skills list
    skillsList.style.display = "none";

    toggleSkillsButton.addEventListener("click", () => {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        } else {
            skillsList.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
});