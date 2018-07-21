/*
 * Good Content Security Policy does not allow for inline CSS. This can
 * be difficult to deal with when your theme depends on markdown-provided data
 * (like a width or image url). In order to get around this, we'll need to set
 * it on the frontend using data attributes in generated HTML elements.
 */

(function () {
  const whitelistedStyles = {
    'figure': ['background-image', 'max-width'],
    'article': ['background-image']
  };

  const injectStyle = function (element, property) {
    const value = $(element).data('css-' + property);
    if (value) $(element).css(property, value);
  };

  const injectStyles = function (element) {
    $(element).each(function (i, e) {
      whitelistedStyles[element].forEach(function (style) {
        injectStyle(e, style);
      });
    });
  };

  $(document).ready(function() {
    Object.keys(whitelistedStyles).forEach(function (element) {
      injectStyles(element);
    });
  });
})();
