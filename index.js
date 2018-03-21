const districts = require("./districts.json");

// Sort districts alphabetically
districts.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

module.exports = districts;
