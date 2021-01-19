var $grid = $('.grid').isotope({
});
$('button').on( 'click', function() {
  
  var filterValue = $(this).attr('data');
  console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});

$grid.isotope({ filter: '.stills' });
$grid.isotope({ filter: '.people' });
$grid.isotope({ filter: '.design' });
$grid.isotope({ filter: '*' });