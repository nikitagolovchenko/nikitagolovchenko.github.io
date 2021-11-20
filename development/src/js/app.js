import ready, { HTML } from './utils';
import initFancybox from './components/fancybox';
import initTooltip from './components/tooltip';

ready(() => {
  HTML.classList.add('is-loaded');
  initFancybox();
  initTooltip();
});
