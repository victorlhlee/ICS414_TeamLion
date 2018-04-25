//click home button to get redirected to start.html
$(document).ready(function(){
    $("#homeButton").click(function(){
        location.href = "start.html";
    });
});

//click black button to get redirected to previous page
// $(document).ready(function(){
//     $("#backButton").click(function(){
//         location.href = "start.html";
//     });
// });



//click alarm choice button to get redirected to selectedRealAlarm.html
$(document).ready(function(){
    $("#warnTable").click(function(){       
        location.href = "selectedDrillAlarm.html";
    });
});

$(document).ready(function(){
    $("#sendDrillVia").click(function(){
        location.href = "sendDrillVia.html";
    });
});

$(document).ready(function(){
    $("#reviewDrillAlarm").click(function(){
        location.href = "reviewDrillAlarm.html";
    });
});

//click black button to get redirected to previous page
$(document).ready(function(){
    $("#confirmDrill").click(function(){
        location.href = "drillAlarmSent.html";
    });
});
