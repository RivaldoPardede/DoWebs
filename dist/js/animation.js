let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const elements = document.querySelectorAll('.taos-init');

  elements.forEach(function (element) {
    const bounding = element.getBoundingClientRect();

    if (bounding.top > window.innerHeight || bounding.bottom < 0) {
      element.classList.remove('taos-init');
    } else {
      if (scrollTop > lastScrollTop) {
        element.classList.replace('taos:translate-y-[-200px]', ' ')
        element.classList.add('taos:translate-y-[200px]', 'taos:opacity-0');
        element.setAttribute('data-taos-offset', '0')
      }
      else {
        element.classList.replace('taos:translate-y-[200px]', ' ')
        element.classList.add('taos:translate-y-[-200px]', 'taos:opacity-0');
        element.setAttribute('data-taos-offset', '0')
      }
    }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});