//click home button to get redirected to start.html
$(document).ready(function(){
    $("#homeButton").click(function(){
        location.href = "start.html";
    });
});

//clicking a 'no/cancel' choice button will be redirected to redirectToStart.html
$(document).ready(function(){
    $("#cancel").click(function(){
        location.href = "redirectToStart.html";
    });
});

//clicking a 'no/cancel' choice button will be redirected to redirectToStart.html
$(document).ready(function(){
    $("#correctRealAlarm").click(function(){
        location.href = "realAlarmSent.html";
    });
});


//clicking a 'no/cancel' choice button will be redirected to redirectToStart.html
$(document).ready(function(){
    $("#correctDrillAlarm").click(function(){
        location.href = "realDrillSent.html";
    });
});
