$(document).ready(function(){
   $('.magnific-gallery').each(function(index , value){
  var gallery = $(this);
  var galleryImages = $(this).data('links').split(',');
    var items = [];
    for(var i=0;i<galleryImages.length; i++){
      items.push({
        src:galleryImages[i],
        title:''
      });
    }
    gallery.magnificPopup({
      mainClass: 'mfp-fade',
      items:items,
      gallery:{
        enabled:true,
        tPrev: $(this).data('prev-text'),
        tNext: $(this).data('next-text')
      },
      type: 'image'
    });
});
});

/*<gallery data-links="http://www.oxygenna.com/wp-content/uploads/2014/11/blog-2.jpg,http://www.oxygenna.com/wp-content/uploads/2014/11/blog-0.jpg,http://www.oxygenna.com/wp-content/uploads/2014/11/blog-1.jpg,http://www.oxygenna.com/wp-content/uploads/2014/11/blog-3.jpg" class="magnific-gallery">
  xyz
</gallery>
*/