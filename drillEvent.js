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

function myFunction1() {
    var warnButton = document.getElementById("warnButton1").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

function myFunction2() {
    var warnButton = document.getElementById("warnButton2").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

function myFunction3() {
    var warnButton = document.getElementById("warnButton3").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

function myFunction4() {
    var warnButton = document.getElementById("warnButton4").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

function myFunction5() {
    var warnButton = document.getElementById("warnButton5").value;
    localStorage.warnButton = warnButton;

    location.href = "selectedDrillAlarm.html";
}

// //click alarm choice button to get redirected to selectedDrillAlarm.html
// $(document).ready(function(){
//     $("#warnTable").click(function(){
//         location.href = "selectedDrillAlarm.html";
//     });
// });

$(document).ready(function(){
    $("#sendDrillVia").click(function(){
        location.href = "sendDrillVia.html";
    });
});

function results() {
    var notification = document.forms[0];
    var notificationText = "";
    var i;

    for (i = 0; i < notification.length; i++) {
        if (notification[i].checked) {
            notificationText = notificationText + notification[i].value + " ";
        }
    }

     document.write(notificationText);
}

function islandResults() {
    var island = document.forms[0];
    var islandText = "";
    var j;
    
    for (j = 0; j < island.length; j++) {
        if (island[j].checked) {
            islandText = islandText + island[j].value + " ";
        }
    }

    document.write(islandText);
}

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
