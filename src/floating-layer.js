const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));
const visualViewportRect = () => {
  const viewport = window.visualViewport;
  const left = viewport?.offsetLeft || 0;
  const top = viewport?.offsetTop || 0;
  return {
    left,
    top,
    right: left + (viewport?.width || window.innerWidth),
    bottom: top + (viewport?.height || window.innerHeight)
  };
};
const anchoredLayerPosition = (anchorRect, layerRect, { margin = 14, gap = 8 } = {}) => {
  const viewport = visualViewportRect();
  const minLeft = viewport.left + margin;
  const minTop = viewport.top + margin;
  const maxLeft = viewport.right - margin - layerRect.width;
  const maxTop = viewport.bottom - margin - layerRect.height;
  const below = anchorRect.bottom + gap;
  const preferredTop = below > maxTop ? anchorRect.top - layerRect.height - gap : below;
  return {
    left: clamp(anchorRect.left, minLeft, maxLeft),
    top: clamp(preferredTop, minTop, maxTop)
  };
};

export { anchoredLayerPosition, clamp, visualViewportRect };
