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

$(document).ready(function(){
    $("#confirm").click(function(){
        location.href = "sendToSupervisor.html";
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
        location.href = "drillAlarmSent.html";
    });
});


//clicking a 'now' choice button will be redirected to start.html
$(document).ready(function(){
    $("#redirectNow").click(function(){
        location.href = "start.html";
    });

    window.setTimeout(function () {		//Redirects to start.html after 5 seconds if 'now' not selected
        location.href = "start.html";
    }, 5000);
});