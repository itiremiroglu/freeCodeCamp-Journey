const themes = [{ name: "light", message: "Light theme is active." }, { name: "dark", message: "Dark theme is active." }, { name: "ocean", message: "Ocean theme is active." }, { name: "nord", message: "Nord theme is active." }];


const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const liveRegion = document.querySelector("[aria-live='polite']");
const menuItems = themeDropdown.querySelectorAll("[role='menuitem']");

themeSwitcherButton.addEventListener("click", () => {
    const isHidden = themeDropdown.hasAttribute("hidden");

    if (isHidden) {
        themeDropdown.removeAttribute("hidden");
        themeSwitcherButton.setAttribute("aria-expanded", "true");
    } else {
        themeDropdown.setAttribute("hidden", "");
        themeSwitcherButton.setAttribute("aria-expanded", "false");
    }
});


menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const themeName = item.id.replace("theme-", "").toLowerCase();
        document.body.className = `theme-${themeName}`;
        const currentTheme = themes.find(t => t.name === themeName);
        if (currentTheme && liveRegion) {
            liveRegion.textContent = currentTheme.message;
        }

        themeDropdown.setAttribute("hidden", "");
        themeSwitcherButton.setAttribute("aria-expanded", "false");
    });
});