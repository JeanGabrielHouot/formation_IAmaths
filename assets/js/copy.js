document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    const text = target.innerText;
    try {
      await navigator.clipboard.writeText(text);
      const old = button.textContent;
      button.textContent = 'Copié ✓';
      setTimeout(() => {
        button.textContent = old;
      }, 1400);
    } catch (e) {
      alert('Impossible de copier automatiquement. Sélectionne le texte manuellement.');
    }
  });
});
