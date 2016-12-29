$(document).ready(function() {
  $('.popup-gallery').each(function(index, value) {
    var gallery = $(this);
    var galleryImages = $(this).data('links').split(',');
    var items = [];
    for (var i = 0; i < galleryImages.length; i++) {
      items.push({
        src: galleryImages[i],
        title: ''
      });
    }
    gallery.magnificPopup({
      mainClass: 'mfp-fade',
      items: items,
      gallery: {
        enabled: true,
        tPrev: $(this).data('prev-text'),
        tNext: $(this).data('next-text')
      },
      type: 'image'
    });
  });
});


$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});