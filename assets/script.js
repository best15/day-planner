//Current day
var gradDate = moment().format("dddd,MMMM Do");
$("#currentDay").text(gradDate);


for (var i = 0; i<12; i++ )
{ 

var nexthour = moment(String(starthour + i) + "AM", ["HH"]).format("hA");

var timeblock = $("<div class = 'row time-block'></div>");
var hour = $("<div class = 'hour'> </div>").text(nexthour);
var textarea = $("<textarea>");
var savebtn = $("<button  class = 'saveBtn'> <i class='bi bi-save2'></i> </button>");

timeblock.append(hour,textarea,savebtn);
$(".container").append(timeblock);

}
