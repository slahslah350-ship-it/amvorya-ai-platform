const body = document.body;
const swatches = document.querySelectorAll('.swatch');

swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    const theme = swatch.dataset.theme;
    swatches.forEach((btn) => btn.classList.toggle('active', btn === swatch));

    body.classList.remove('theme-gold', 'theme-black', 'theme-silver', 'theme-blue', 'theme-green');
    body.classList.add(`theme-${theme}`);
  });
});

const themeMap = {
  gold: {
    '--bg': '#080a0f',
    '--bg-soft': '#0f1420',
    '--panel': 'rgba(20, 23, 28, 0.9)',
    '--panel-strong': '#171b22',
    '--text': '#f5f5f5',
    '--muted': '#b9bec9',
    '--line': 'rgba(255, 255, 255, 0.1)',
    '--gold-1': '#ffd66a',
    '--gold-2': '#efb42e',
    '--gold-3': '#b47003',
    '--gold-4': '#6e4200',
    '--white-soft': '#fafaf8'
  },
  black: {
    '--bg': '#0b0d10',
    '--bg-soft': '#171b22',
    '--panel': 'rgba(17, 17, 17, 0.92)',
    '--panel-strong': '#121317',
    '--text': '#f0f1f3',
    '--muted': '#c5cad3',
    '--line': 'rgba(255, 255, 255, 0.08)',
    '--gold-1': '#f7df8d',
    '--gold-2': '#d5a64c',
    '--gold-3': '#976315',
    '--gold-4': '#3f2a09',
    '--white-soft': '#f3f6f7'
  },
  silver: {
    '--bg': '#0e1014',
    '--bg-soft': '#191d22',
    '--panel': 'rgba(28, 32, 35, 0.92)',
    '--panel-strong': '#1b2024',
    '--text': '#f4f5f6',
    '--muted': '#d4d9df',
    '--line': 'rgba(255, 255, 255, 0.08)',
    '--gold-1': '#e7ecf0',
    '--gold-2': '#bfc4cb',
    '--gold-3': '#7d8894',
    '--gold-4': '#4b5259',
    '--white-soft': '#f5f7fa'
  },
  blue: {
    '--bg': '#06131f',
    '--bg-soft': '#102535',
    '--panel': 'rgba(11, 24, 33, 0.92)',
    '--panel-strong': '#0d1f2b',
    '--text': '#edf4ff',
    '--muted': '#cde0f1',
    '--line': 'rgba(125, 176, 255, 0.18)',
    '--gold-1': '#9bc3ff',
    '--gold-2': '#5f9fff',
    '--gold-3': '#2d6bd1',
    '--gold-4': '#153d82',
    '--white-soft': '#edf8ff'
  },
  green: {
    '--bg': '#081911',
    '--bg-soft': '#112b20',
    '--panel': 'rgba(12, 25, 20, 0.92)',
    '--panel-strong': '#10281f',
    '--text': '#f2fff6',
    '--muted': '#d5f4e2',
    '--line': 'rgba(131, 235, 169, 0.16)',
    '--gold-1': '#b6f7c8',
    '--gold-2': '#72d79d',
    '--gold-3': '#2d9b63',
    '--gold-4': '#0f4f34',
    '--white-soft': '#effff5'
  }
};

function applyTheme(theme) {
  const variables = themeMap[theme] || themeMap.gold;
  Object.entries(variables).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

const initialTheme = document.body.classList.contains('theme-black') ? 'black' : 'gold';
applyTheme(initialTheme);

swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    applyTheme(swatch.dataset.theme);
  });
});
