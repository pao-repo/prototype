fetch('../assets/json/icons.json')
  .then(response => response.json())
  .then(icons => {
    document.querySelectorAll('[data-icon]').forEach(el => {
      const iconName = el.getAttribute('data-icon');
      if (icons[iconName]) {
        el.innerHTML = icons[iconName];
      } else {
        console.warn(`Icon "${iconName}" not found in JSON.`);
      }
    });
  })
  .catch(err => console.error('Error loading icons:', err));