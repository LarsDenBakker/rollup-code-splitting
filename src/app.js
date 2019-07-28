function lazyLoad(page) {
  switch (page) {
    case 'a':
      return import('./pages/page-a.js');
    case 'b':
      return import('./pages/page-b.js');
    case 'c':
      return import('./pages/page-c.js');
  }
}