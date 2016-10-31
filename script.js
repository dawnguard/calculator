$(document).ready(function() {
  console.log('ready!');
  var number = "";
  var newnumber = ""
  var Ans = 0;
  $('input').focus();
  
  $('.row div').not('.highlight').on('click', function() {
    number = $('input').val();
    number += $(this).text();
    console.log(number);
    $('input').val(number);
    $('input').focus();
  });
  
  $('#C').on('click', function() {
    number = "";
    $('input').val(number);
    $('input').focus();
  });
  
  $('#\\=').on('click', function() {
    Ans = eval($('input').val());
    $('input').val(Ans);
    console.log(Ans);
    $('input').blur();
  });
  
  $(document).keypress(function(e) {
    if(e.which == 13) {
      $("#\\=").click();
    }
  });
});