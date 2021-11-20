import 'Plugins/tooltipPlugin';

// hover tooltip init
export default function initTooltip() {
  jQuery('[title]').hoverTooltip({
    tooltipStructure: '<div class="hover-tooltip"><div class="tooltip-text"></div></div>',
    positionTypeX: 'left', 
    positionTypeY: 'bottom', 
    extraOffsetX: 5,
    extraOffsetY: 5,
  });
}
