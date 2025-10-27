// Load dictionary data
const grid = document.getElementById('dictionaryGrid');
const themeSelect = document.getElementById('themeSelect');

// Populate dropdown
dictionary.dictionary.forEach(group => {
  const opt = document.createElement('option');
  opt.value = group.theme;
  opt.textContent = group.theme;
  themeSelect.appendChild(opt);
});

function renderCards(selectedTheme = "all") {
  grid.innerHTML = "";

  dictionary.dictionary.forEach(group => {
    if (selectedTheme !== "all" && group.theme !== selectedTheme) return;
    group.entries.forEach(entry => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="icon">${entry.image_alt}</div>
        <h2>${entry.word}</h2>
        <p>${group.theme}</p>
      `;

      card.addEventListener('click', () => {
        alert(
          `${entry.word.toUpperCase()}\n\nExample: ${entry.example}\n\nTranslations:\n🇺🇸 ${entry.translations.en}\n🇪🇸 ${entry.translations.es}\n🇫🇷 ${entry.translations.fr}\n🇨🇳 ${entry.translations.zh}\n🇸🇦 ${entry.translations.ar}`
        );
      });

      grid.appendChild(card);
    });
  });
}

themeSelect.addEventListener('change', e => {
  renderCards(e.target.value);
});

renderCards();
