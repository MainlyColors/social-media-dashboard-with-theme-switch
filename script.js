const root = document.documentElement;
const switchEl = document.querySelector('.theme-switcher-container input');

switchEl.addEventListener('change', function (e) {
  // checked = dark mode
  const checked = switchEl.checked;

  root.style.setProperty('--clr-font-primary', checked ? '#fff' : '#1d1f29');
  root.style.setProperty('--clr-font-secondary', checked ? '#8c98c6' : '#63687d');
  root.style.setProperty('--clr-bg', checked ? '#1d1f29' : '#fff');
  root.style.setProperty('--clr-bg-banner', checked ? '#20222F' : '#f7f9ff');
  root.style.setProperty('--clr-bg-card', checked ? '#252b42' : '#f1f3fa');
  root.style.setProperty('--clr-bg-card-hover', checked ? '#333a55' : '#e1e4f0');
});
