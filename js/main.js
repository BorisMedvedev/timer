const init = () => {
  const debounce = (callback, delay) => {
    let timerId;
    return function() {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback.apply(this, arguments);
      }, delay);
    };
  };
  const input = document.querySelector('input');
  const paragraph = document.querySelector('p');
  const updateParagraph = debounce(() => {
    paragraph.textContent = input.value;
  }, 300);
  input.addEventListener('input', updateParagraph);
};

init();

