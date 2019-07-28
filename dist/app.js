function lazyLoad(page) {
  switch (page) {
    case 'a':
      return import('./page-a-2c3bb48b.js');
    case 'b':
      return import('./page-b-a68d5be4.js');
    case 'c':
      return import('./page-c-9448c98d.js');
  }
}
