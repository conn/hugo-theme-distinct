/*
 * As we're setting background images with javascript, images associated with
 * item cards won't be there with things like "ScriptSafe". The color overlay is
 * out of place, so we should ensure that we only have it in the presence of an
 * image.
 */

(function () {
  const toggleColorOverlay = function (item) {
    const article = $(item).find('article')[0];
    const backgroundImage = $(article).data('css-background-image');

    if (backgroundImage) {
      const titleContent = $(item).find('.title-content');
      $(titleContent).after('<div class="color-overlay"></div>');
    }
  };

  $(document).ready(function() {
    $('li.item').each(function (_, item) {
      toggleColorOverlay(item);
    });
  });
})();
