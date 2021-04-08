//Current day
var gradDate = moment().format("dddd,MMMM Do");
$("#currentDay").text(gradDate);

var currenthour = '11am'; //moment().format(hh a)
var starthour = 6;

for (var i = 0; i<12; i++ )
{ 

var nexthour = moment(String(starthour + i) + "AM", ["HH"]).format("hA");

var timeblock = $("<div class = 'row time-block'></div>");
var hour = $("<div class = 'hour'> </div>").text(nexthour);
var textarea = $("<textarea>");
var savebtn = $("<button  class = 'saveBtn'> <i class='bi bi-save2'></i> </button>");

textarea.attr('id', nexthour + 'txtarea' );
savebtn.attr('id' , nexthour + 'btn' );

timeblock.append(hour,textarea,savebtn);
$(".container").append(timeblock);


var plan = JSON.parse(localStorage.getItem(nexthour));
if (plan != ""){
    console.log(plan);
    textarea.text(plan) ;

}

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


$('.saveBtn').on('click', function (event) {
    var selectedbutton = $(event.target);
    console.log(selectedbutton.prev().val());
    var saveplan = selectedbutton.prev().val();
    var hour = selectedbutton.prev().prev().text()
    console.log(selectedbutton.prev().prev().text());
    
    localStorage.setItem(hour, JSON.stringify(saveplan));
   

  });
