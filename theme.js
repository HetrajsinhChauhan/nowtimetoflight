// Get today's date
const today = new Date();
const month = today.getMonth() + 1; // 1–12
const day = today.getDate(); // 1–31

// Determine theme based on date
let themePrefix = "def"; // Default theme

// Diwali Theme: Oct 15 – Nov 15
if (month === 10 && day >= 15 || month === 11 && day <= 15) {
    themePrefix = "diw";
}
// Janmastami Theme: Aug 19 – Aug 30
else if (month === 8 && day >= 19 && day <= 30) {
    themePrefix = "jan";
}

// Get the current page name from pathname
const pathname = window.location.pathname;
const pageName = pathname.split('/').pop().replace('.html', '');

// Map page names to CSS file names
const pageMap = {
    index: 'index',
    aboutus: 'aboutus',
    events: 'events',
    memories: 'memories',
    menu: 'menu',
    reservetable: 'reservetable'
};

// Get the CSS file name
const cssFile = `${themePrefix}${pageMap[pageName] || 'index'}.css`;

// Apply the theme
