/*
 * As we're setting background images with javascript, things like "ScriptSafe"
 * will make our gallery thumbnails invisible. To account for this, the images
 * will be initially visible and then hidden once scripts are ran.
 */

(function () {
  $(document).ready(function() {
    $('.gallery').each(function (_, gallery) {
      $(gallery).find('figure').each(function (_, figure) {
        $(figure).addClass('thumbnail-hidden');
      });

      $(gallery).find('img').each(function (_, img) {
        $(img).addClass('thumbnail-hidden');
      });
    });
  });
})();
