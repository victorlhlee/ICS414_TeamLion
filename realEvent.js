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
        location.href = "selectedRealAlarm.html";
    });
});

$(document).ready(function(){
    $("#sendRealVia").click(function(){
        location.href = "sendRealVia.html";
    });
});

$(document).ready(function(){
    $("#reviewRealAlarm").click(function(){
        location.href = "reviewRealAlarm.html";
    });
});

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


$("input").click(function() {
    var alarm_button = $(this).val();
    alert(alarm_button);
});