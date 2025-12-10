// Get today's date
const today = new Date();
const month = today.getMonth() + 1;  // 1–12
const day = today.getDate();         // 1–31

let theme = "default.css";

// Christmas Theme: Dec 20 – Dec 26
if (month === 12 && day >= 20 && day <= 26) {
    theme = "christmas.css";
}

// New Year Theme: Dec 31 – Jan 2
else if ((month === 12 && day === 31) || (month === 1 && day <= 2)) {
    theme = "newyear.css";
}

// Apply theme
document.getElementById("themeStylesheet").href = theme;
