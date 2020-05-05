$(document).ready(function() {
    $('#currentDay').html(`<h1>${moment().format('llll')}</h1>`);
//    setColorCoding();
     
    // $('#highScores').on('click', function(){
    // });

//    function setColorCoding(){
  
        //var x = "variable";
        // $('#currentDay').html('<h1>a '+ x + ' b</h1>');
        // is same as
        //$('#currentDay').html(`<h1>a  ${x}  b</h1>`);
   
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var currentHour = today.getHours();
    
    //  var currentHour = moment().format('H');
    //  var currentHour = 18;
 
        for (i=9; i < 18; i++){
             var currentRow = $(this).find( "#"+i );
 
            if (currentHour === i) {
                currentRow.addClass('present');
            } else if (currentHour > i) {
                currentRow.addClass('past');
            } else if (currentHour < i){
                currentRow.addClass('future');
            }
        }
//    }
});

        // if (currentHour === rowHour) {
            //     currentRow.addClass('present');
            //   } else if ((currentHour < rowHour) && (currentHour >= rowHour - 6)) {
            //     currentRow.addClass('future');
            //   } else if ((currentHour > rowHour) && (currentHour <= rowHour + 6)) {
            //     currentRow.addClass('past');
            //   } 
     
    //     currentRow.addClass('future');
    //    currentRow.css("background-color","blue");
        //    console.log(currentRow);
    //  $("#i").css({backgroundColor: "blue"});
    //   $(this).find( "#i" ).css("background-color","blue");
    //    $( "p" ).find( "span" ).css( "color", "red" );
    //  $("#3").removeClass("present").addClass("future");