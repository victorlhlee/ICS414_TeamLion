//clicking a 'no/cancel' choice button will be redirected to redirectToStart.html
$(document).ready(function(){
    $("#cancel").click(function(){
        location.href = "redirectToStart.html";
    });
});

//clicking a 'no/cancel' choice button will be redirected to redirectToStart.html
$(document).ready(function(){
    $("#cont").click(function(){
        location.href = "realAlarmSent.html";
    });
});


//clicking a 'no/cancel' choice button will be redirected to redirectToStart.html
$(document).ready(function(){
    $("#correctAlarm").click(function(){
        location.href = "realDrillSent.html";
    });
});
