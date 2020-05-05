$(document).ready(function() {
    var x = "variable";
    // $('#currentDay').html('<h1>a '+ x + ' b</h1>');
    // is same as
    //$('#currentDay').html(`<h1>a  ${x}  b</h1>`);

    $('#currentDay').html(`<h1>${moment().format('llll')}</h1>`);
   
   
    // $('#highScores').on('click', function(){
  
    // });

});

