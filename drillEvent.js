//click home button to get redirected to start.html
$(document).ready(function(){
    $("#homeButton").click(function(){
        location.href = "start.html";
    });
});

//click alarm choice button to get redirected to selectedRealAlarm.html
$(document).ready(function(){
    $("#warnTable").click(function(){    	
        location.href = "selectedDrillAlarm.html";
    });
});
