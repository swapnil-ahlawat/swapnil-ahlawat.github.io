(function (global) {
  button = {};

  button.call = function () {
    window.location.href = 'tel:9818284672';
  };

  button.mail = function () {
    window.location.href = 'mailto:swapnil.ahlawat@gmail.com';
  };

  button.linkedin = function () {
    window.open('https://www.linkedin.com/in/swapnilahlawat');
  };
  window.$button = button;
})(window);
