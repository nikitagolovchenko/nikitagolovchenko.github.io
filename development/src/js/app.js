import ready, { HTML } from './utils';
import initFancybox from './components/fancybox';

ready(() => {
  HTML.classList.add('is-loaded');
  initFancybox();
});
