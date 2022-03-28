$(function() {
   var nav = $('.menu_desktop');
   $(window).scroll(function(){
       if($(this).scrollTop()>636){
           nav.addClass("fixed-top");
       } else {
           nav.removeClass("fixed-top");
       }
   });

//    FILTRO DA GALERIA

   var $grid = $('.filters-content > .grid').isotope({
       itemSelector: '.all',
       layoutMode: 'fitRows'
   });

   $('ul.filters_menu > li').click(function () {
       var $value = $(this).attr('data-filter');
       $grid.isotope({
           filter: $value
       })
   })

//    $grid.isotope({
//        filter:'.office'
//    })
});