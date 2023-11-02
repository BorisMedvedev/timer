const init = () => {
  const input = document.querySelector('input');
  const paragraph = document.querySelector('p');
  let timeoutId;

  input.addEventListener('change', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      paragraph.textContent = input.value;
    }, 300);
  });
};

init();

