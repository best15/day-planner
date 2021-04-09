//Current day display at the header
var gradDate = moment().format("dddd,MMMM Do");
$("#currentDay").text(gradDate);

//Generates currenthour
var currenthour = moment().format("ha");
var starthour = 6; //day-planner begins from 6am morning


for (var i = 0; i<12; i++ )
{ 

var nexthour = moment(String(starthour + i) + "AM", ["HH"]).format("hA");

var timeblock = $("<div class = 'row time-block justify-content-center'></div>");

var hour = $("<div class = 'hour'> </div>").text(nexthour);
var textarea = $("<textarea class = 'description'>");
var savebtn = $("<button  class = 'saveBtn'> <i class='fas fa-save'></i> </button>");


textarea.attr('id', nexthour + 'txtarea' );
savebtn.attr('id' , nexthour + 'btn' );

timeblock.append(hour,textarea,savebtn);
$(".container").append(timeblock);


var plan = JSON.parse(localStorage.getItem(nexthour));
if (plan != ""){
   
    textarea.text(plan) ;

}

//Compare to find past,present or future time
if ((moment(nexthour, ["hA"]).valueOf()) < (moment(currenthour, ["hA"]).valueOf()))

{
    textarea.attr('disabled', 'disabled');
    textarea.addClass("past") ; 

}
else if((moment(nexthour, ["hA"]).valueOf()) > (moment(currenthour, ["hA"]).valueOf())){
    
    textarea.addClass("future") ; 

}
else {
   
    textarea.addClass("present") ; 
}

}

//Function to run when savebutton is clicked
$('.saveBtn').on('click', function (event) {

    var selectedbutton = $(event.target);
 
    var saveplan = selectedbutton.prev().val();
    var hour = selectedbutton.prev().prev().text()

    localStorage.setItem(hour, JSON.stringify(saveplan));
   

  });
