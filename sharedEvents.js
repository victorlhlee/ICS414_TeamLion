//click home button to get redirected to start.html
$(document).ready(function(){
    $("#homeButton").click(function(){
        location.href = "start.html";
    });
});

$(document).ready(function(){
    $("#proceed").click(function(){
        location.href = "realAlarmSent.html";
    });
});

//clicking a 'no/cancel' choice button will be redirected to redirectToStart.html
$(document).ready(function(){
    $("#cancel").click(function(){
        location.href = "redirectToStart.html";
    });
});

$(document).ready(function(){
    $("#confirmDrill").click(function(){
        location.href = "drillAlarmSent.html";
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
    $("#cont").click(function(){
        location.href = "realAlarmSent.html";
    });
});



$(document).ready(function(){
    $("#correctAlarm").click(function(){
        location.href = "drillAlarmSent.html";
    });
});

