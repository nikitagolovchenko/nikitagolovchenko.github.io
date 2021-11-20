import 'Plugins/fancyboxPlugin';

// lightbox init
export default function initFancybox() {
  jQuery('a.lightbox, [data-fancybox]').fancybox({
    parentEl: 'body',
    margin: [50, 0],
    loop: true
  });
}
